/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const DeleteOperationResult: msRest.CompositeMapper = {
  serializedName: "DeleteOperationResult",
  type: {
    name: "Composite",
    className: "DeleteOperationResult",
    modelProperties: {
      operationResult: {
        readOnly: true,
        serializedName: "boolean",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EndpointPropertiesSubnetsItem: msRest.CompositeMapper = {
  serializedName: "EndpointProperties_subnetsItem",
  type: {
    name: "Composite",
    className: "EndpointPropertiesSubnetsItem",
    modelProperties: {
      first: {
        serializedName: "first",
        type: {
          name: "String"
        }
      },
      last: {
        serializedName: "last",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "scope",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EndpointPropertiesCustomHeadersItem: msRest.CompositeMapper = {
  serializedName: "EndpointProperties_customHeadersItem",
  type: {
    name: "Composite",
    className: "EndpointPropertiesCustomHeadersItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeatMapEndpoint: msRest.CompositeMapper = {
  serializedName: "HeatMapEndpoint",
  type: {
    name: "Composite",
    className: "HeatMapEndpoint",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      endpointId: {
        serializedName: "endpointId",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueryExperience: msRest.CompositeMapper = {
  serializedName: "QueryExperience",
  type: {
    name: "Composite",
    className: "QueryExperience",
    modelProperties: {
      endpointId: {
        required: true,
        serializedName: "endpointId",
        type: {
          name: "Number"
        }
      },
      queryCount: {
        required: true,
        serializedName: "queryCount",
        type: {
          name: "Number"
        }
      },
      latency: {
        serializedName: "latency",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TrafficFlow: msRest.CompositeMapper = {
  serializedName: "TrafficFlow",
  type: {
    name: "Composite",
    className: "TrafficFlow",
    modelProperties: {
      sourceIp: {
        serializedName: "sourceIp",
        type: {
          name: "String"
        }
      },
      latitude: {
        serializedName: "latitude",
        type: {
          name: "Number"
        }
      },
      longitude: {
        serializedName: "longitude",
        type: {
          name: "Number"
        }
      },
      queryExperiences: {
        serializedName: "queryExperiences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryExperience"
            }
          }
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const HeatMapModel: msRest.CompositeMapper = {
  serializedName: "HeatMapModel",
  type: {
    name: "Composite",
    className: "HeatMapModel",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      startTime: {
        serializedName: "properties.startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "properties.endTime",
        type: {
          name: "DateTime"
        }
      },
      endpoints: {
        serializedName: "properties.endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HeatMapEndpoint"
            }
          }
        }
      },
      trafficFlows: {
        serializedName: "properties.trafficFlows",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrafficFlow"
            }
          }
        }
      }
    }
  }
};

export const UserMetricsModel: msRest.CompositeMapper = {
  serializedName: "UserMetricsModel",
  type: {
    name: "Composite",
    className: "UserMetricsModel",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      key: {
        serializedName: "properties.key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Endpoint: msRest.CompositeMapper = {
  serializedName: "Endpoint",
  type: {
    name: "Composite",
    className: "Endpoint",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      targetResourceId: {
        serializedName: "properties.targetResourceId",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "properties.target",
        type: {
          name: "String"
        }
      },
      endpointStatus: {
        serializedName: "properties.endpointStatus",
        type: {
          name: "String"
        }
      },
      weight: {
        serializedName: "properties.weight",
        type: {
          name: "Number"
        }
      },
      priority: {
        serializedName: "properties.priority",
        type: {
          name: "Number"
        }
      },
      endpointLocation: {
        serializedName: "properties.endpointLocation",
        type: {
          name: "String"
        }
      },
      endpointMonitorStatus: {
        serializedName: "properties.endpointMonitorStatus",
        type: {
          name: "String"
        }
      },
      minChildEndpoints: {
        serializedName: "properties.minChildEndpoints",
        type: {
          name: "Number"
        }
      },
      geoMapping: {
        serializedName: "properties.geoMapping",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      subnets: {
        serializedName: "properties.subnets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointPropertiesSubnetsItem"
            }
          }
        }
      },
      customHeaders: {
        serializedName: "properties.customHeaders",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointPropertiesCustomHeadersItem"
            }
          }
        }
      }
    }
  }
};

export const CheckTrafficManagerRelativeDnsNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckTrafficManagerRelativeDnsNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckTrafficManagerRelativeDnsNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DnsConfig: msRest.CompositeMapper = {
  serializedName: "DnsConfig",
  type: {
    name: "Composite",
    className: "DnsConfig",
    modelProperties: {
      relativeName: {
        serializedName: "relativeName",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "fqdn",
        type: {
          name: "String"
        }
      },
      ttl: {
        serializedName: "ttl",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MonitorConfigCustomHeadersItem: msRest.CompositeMapper = {
  serializedName: "MonitorConfig_customHeadersItem",
  type: {
    name: "Composite",
    className: "MonitorConfigCustomHeadersItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MonitorConfigExpectedStatusCodeRangesItem: msRest.CompositeMapper = {
  serializedName: "MonitorConfig_expectedStatusCodeRangesItem",
  type: {
    name: "Composite",
    className: "MonitorConfigExpectedStatusCodeRangesItem",
    modelProperties: {
      min: {
        serializedName: "min",
        type: {
          name: "Number"
        }
      },
      max: {
        serializedName: "max",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MonitorConfig: msRest.CompositeMapper = {
  serializedName: "MonitorConfig",
  type: {
    name: "Composite",
    className: "MonitorConfig",
    modelProperties: {
      profileMonitorStatus: {
        serializedName: "profileMonitorStatus",
        type: {
          name: "String"
        }
      },
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      intervalInSeconds: {
        serializedName: "intervalInSeconds",
        type: {
          name: "Number"
        }
      },
      timeoutInSeconds: {
        serializedName: "timeoutInSeconds",
        type: {
          name: "Number"
        }
      },
      toleratedNumberOfFailures: {
        serializedName: "toleratedNumberOfFailures",
        type: {
          name: "Number"
        }
      },
      customHeaders: {
        serializedName: "customHeaders",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MonitorConfigCustomHeadersItem"
            }
          }
        }
      },
      expectedStatusCodeRanges: {
        serializedName: "expectedStatusCodeRanges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MonitorConfigExpectedStatusCodeRangesItem"
            }
          }
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Profile: msRest.CompositeMapper = {
  serializedName: "Profile",
  type: {
    name: "Composite",
    className: "Profile",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      profileStatus: {
        serializedName: "properties.profileStatus",
        type: {
          name: "String"
        }
      },
      trafficRoutingMethod: {
        serializedName: "properties.trafficRoutingMethod",
        type: {
          name: "String"
        }
      },
      dnsConfig: {
        serializedName: "properties.dnsConfig",
        type: {
          name: "Composite",
          className: "DnsConfig"
        }
      },
      monitorConfig: {
        serializedName: "properties.monitorConfig",
        type: {
          name: "Composite",
          className: "MonitorConfig"
        }
      },
      endpoints: {
        serializedName: "properties.endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Endpoint"
            }
          }
        }
      },
      trafficViewEnrollmentStatus: {
        serializedName: "properties.trafficViewEnrollmentStatus",
        type: {
          name: "String"
        }
      },
      maxReturn: {
        serializedName: "properties.maxReturn",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TrafficManagerNameAvailability: msRest.CompositeMapper = {
  serializedName: "TrafficManagerNameAvailability",
  type: {
    name: "Composite",
    className: "TrafficManagerNameAvailability",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Region: msRest.CompositeMapper = {
  serializedName: "Region",
  type: {
    name: "Composite",
    className: "Region",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      regions: {
        serializedName: "regions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Region"
            }
          }
        }
      }
    }
  }
};

export const TrafficManagerGeographicHierarchy: msRest.CompositeMapper = {
  serializedName: "TrafficManagerGeographicHierarchy",
  type: {
    name: "Composite",
    className: "TrafficManagerGeographicHierarchy",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      geographicHierarchy: {
        serializedName: "properties.geographicHierarchy",
        type: {
          name: "Composite",
          className: "Region"
        }
      }
    }
  }
};

export const ProfileListResult: msRest.CompositeMapper = {
  serializedName: "ProfileListResult",
  type: {
    name: "Composite",
    className: "ProfileListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Profile"
            }
          }
        }
      }
    }
  }
};
