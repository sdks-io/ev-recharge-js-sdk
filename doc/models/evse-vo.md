
# Evse VO

Each Location will contain one or more EVSEs (Electric Vehicle Supply Equipment). Each EVSE is capable of charging one car at a time.

## Structure

`EvseVO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `number \| undefined` | Optional | Internal identifier used to refer to single individual  EVSE unit. |
| `externalId` | `string \| undefined` | Optional | Identifier of the Evse as given by the Operator, unique for that Operator |
| `evseId` | `string \| undefined` | Optional | Standard EVSEId identifier (ISO-IEC-15118) |
| `status` | [`EvseVOStatusEnum \| undefined`](../../doc/models/evse-vo-status-enum.md) | Optional | The current status of the EVSE units availability |
| `connectors` | [`ConnectorVO[] \| undefined`](../../doc/models/connector-vo.md) | Optional | List of all connectors available on this EVSE unit. |
| `authorizationMethods` | [`EvseVOAuthorizationMethodsEnum \| undefined`](../../doc/models/evse-vo-authorization-methods-enum.md) | Optional | Methods that can be used to Authorize sessions on this EVSE |
| `updated` | `string \| undefined` | Optional | ISO8601-compliant UTC datetime of the last update of the EVSE |
| `deleted` | `string \| undefined` | Optional | optional  ISO8601-compliant UTC deletion timestamp of the Evse |
| `physicalReference` | `string \| undefined` | Optional | An optional number/string printed on the outside of the EVSE for visual identification |

## Example (as JSON)

```json
{
  "uid": 4,
  "externalId": "01001188_1",
  "evseId": "NL*TNM*E01000401*0",
  "status": "Available",
  "authorizationMethods": "NewMotionApp",
  "updated": "10/06/2021 10:44:24",
  "deleted": "10/06/2021 10:44:24",
  "physicalReference": "Green",
  "connectors": [
    {
      "uid": 60,
      "externalId": "externalId6",
      "connectorType": "Tesla",
      "electricalProperties": {
        "powerType": "AC1Phase",
        "voltage": 110.62,
        "amperage": 46.4,
        "maxElectricPower": 232.04
      },
      "fixedCable": false
    }
  ]
}
```

