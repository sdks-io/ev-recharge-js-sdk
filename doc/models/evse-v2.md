
# Evse V2

Each Location will contain one or more EVSEs (Electric Vehicle Supply Equipment). Each EVSE is capable of charging one car at a time.

## Structure

`EvseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | Internal identifier used to refer to single individual  EVSE unit. |
| `externalId` | `string \| undefined` | Optional | Identifier of the Evse as given by the Operator, unique for that Operator |
| `evseId` | `string \| undefined` | Optional | Standard EVSEId identifier (ISO-IEC-15118) |
| `status` | [`EvseVOStatusEnum \| undefined`](../../doc/models/evse-vo-status-enum.md) | Optional | The current status of the EVSE units availability |
| `updated` | `string \| undefined` | Optional | ISO8601-compliant UTC datetime of the last update of the EVSE |
| `physicalReference` | `string \| undefined` | Optional | An optional number/string printed on the outside of the EVSE for visual identification |
| `connectors` | [`ConnectorV2[] \| undefined`](../../doc/models/connector-v2.md) | Optional | List of all connectors available on this EVSE unit. |
| `authorizationMethods` | [`SingleLocationMarkerAuthorizationMethodsItemsEnum[] \| undefined`](../../doc/models/single-location-marker-authorization-methods-items-enum.md) | Optional | Methods that can be used to Authorize sessions on this EVSE |

## Example (as JSON)

```json
{
  "uid": "NL*MKS*E0000001*0_1",
  "externalId": "01001188_1",
  "evseId": "NL*TNM*E01000401*0",
  "status": "Available",
  "updated": "10/06/2021 10:44:24",
  "physicalReference": "Green",
  "authorizationMethods": [
    "NewMotionApp"
  ]
}
```

