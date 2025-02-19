// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Context } from "mocha";
import * as dotenv from "dotenv";

import {
  env,
  Recorder,
  record,
  RecorderEnvironmentSetup,
  isPlaybackMode
} from "@azure/test-utils-recorder";
import {
  DefaultHttpClient,
  HttpClient,
  HttpOperationResponse,
  isNode,
  TokenCredential,
  WebResourceLike
} from "@azure/core-http";
import { CommunicationIdentityClient, CommunicationIdentityClientOptions } from "../../../src";
import { DefaultAzureCredential } from "@azure/identity";
import { parseConnectionString } from "@azure/communication-common";

if (isNode) {
  dotenv.config();
}

export interface RecordedClient<T> {
  client: T;
  recorder: Recorder;
}

const replaceableVariables: { [k: string]: string } = {
  COMMUNICATION_CONNECTION_STRING: "endpoint=https://endpoint/;accesskey=banana",
  INCLUDE_PHONENUMBER_LIVE_TESTS: "false",
  COMMUNICATION_ENDPOINT: "https://endpoint/",
  AZURE_CLIENT_ID: "SomeClientId",
  AZURE_CLIENT_SECRET: "SomeClientSecret",
  AZURE_TENANT_ID: "SomeTenantId"
};

export const environmentSetup: RecorderEnvironmentSetup = {
  replaceableVariables,
  customizationsOnRecordings: [
    (recording: string): string =>
      recording.replace(/"token"\s?:\s?"[^"]*"/g, `"token":"sanitized"`),
    (recording: string): string =>
      recording.replace(/"access_token"\s?:\s?"[^"]*"/g, `"access_token":"sanitized"`),
    (recording: string): string => recording.replace(/(https:\/\/)([^/',]*)/, "$1endpoint"),
    (recording: string): string => recording.replace(/"id"\s?:\s?"[^"]*"/g, `"id":"sanitized"`),
    (recording: string): string => {
      return recording.replace(
        /(https:\/\/[^/',]*\/identities\/)[^/',]*(\/token)/,
        "$1sanitized$2"
      );
    },
    (recording: string): string =>
      recording.replace(/\/identities\/[^/'",]*/, "/identities/sanitized"),
    (recording: string): string => recording.replace(/\+\d{1}\d{3}\d{3}\d{4}/g, "+18005551234"),
    (recording: string): string =>
      recording.replace(/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}/gi, "sanitized")
  ],
  queryParametersToSkip: []
};

export function createRecordedCommunicationIdentityClient(
  context: Context
): RecordedClient<CommunicationIdentityClient> {
  const recorder = record(context, environmentSetup);

  // casting is a workaround to enable min-max testing
  return {
    client: new CommunicationIdentityClient(env.COMMUNICATION_CONNECTION_STRING, {
      httpClient: createTestHttpClient()
    } as CommunicationIdentityClientOptions),
    recorder
  };
}

export function createRecordedCommunicationIdentityClientWithToken(
  context: Context
): RecordedClient<CommunicationIdentityClient> | undefined {
  const recorder = record(context, environmentSetup);
  let credential: TokenCredential;
  const endpoint = parseConnectionString(env.COMMUNICATION_CONNECTION_STRING).endpoint;
  if (isPlaybackMode() && isNode) {
    credential = {
      getToken: async (_scopes) => {
        return { token: "testToken", expiresOnTimestamp: 11111 };
      }
    };

    // casting is a workaround to enable min-max testing
    return {
      client: new CommunicationIdentityClient(endpoint, credential, {
        httpClient: createTestHttpClient()
      } as CommunicationIdentityClientOptions),
      recorder
    };
  }

  try {
    credential = new DefaultAzureCredential();
  } catch {
    return undefined;
  }

  // casting is a workaround to enable min-max testing
  return {
    client: new CommunicationIdentityClient(endpoint, credential, {
      httpClient: createTestHttpClient()
    } as CommunicationIdentityClientOptions),
    recorder
  };
}

function createTestHttpClient(): HttpClient {
  const customHttpClient = new DefaultHttpClient();

  const originalSendRequest = customHttpClient.sendRequest;
  customHttpClient.sendRequest = async function(
    httpRequest: WebResourceLike
  ): Promise<HttpOperationResponse> {
    const requestResponse = await originalSendRequest.apply(this, [httpRequest]);

    if (requestResponse.status < 200 || requestResponse.status > 299) {
      console.log(`MS-CV header for failed request: ${requestResponse.headers.get("ms-cv")}`);
    }

    return requestResponse;
  };

  return customHttpClient;
}
