// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredentialOptions } from "../client/identityClient";
import { TokenCachePersistenceOptions } from "../tokenCache/persistencePlatforms";

/**
 * Defines options for the {@link UsernamePasswordCredential} class.
 */
export interface UsernamePasswordCredentialOptions extends TokenCredentialOptions {
  /**
   * To provide a persistence layer to store the credentials,
   * we allow users to optionally specify {@link TokenCachePersistenceOptions} for their credential.
   *
   * This feature is not currently available on Node 8 or earlier versions of Node JS.
   *
   * This persistence layer uses DPAPI on Windows.
   * On OSX (Darwin) it tries to use the system's Keychain, otherwise if the property `allowUnencryptedStorage` is set to true, it uses an unencrypted file.
   * On Linux it tries to use the system's Keyring, otherwise if the property `allowUnencryptedStorage` is set to true, it uses an unencrypted file.
   */
  tokenCachePersistenceOptions?: TokenCachePersistenceOptions;
}
