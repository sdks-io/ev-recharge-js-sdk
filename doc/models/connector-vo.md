
# Connector VO

An EVSE can have one or many Connectors. Each Connector will normally have a different socket / cable and only one can be used to charge at a time.

## Structure

`ConnectorVO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `number \| undefined` | Optional | Internal identifier used to refer to this Connector |
| `externalId` | `string \| undefined` | Optional | Identifier of the Evse as given by the Operator, unique for the containing EVSE' |
| `connectorType` | [`ConnectorVOConnectorTypeEnum \| undefined`](../../doc/models/connector-vo-connector-type-enum.md) | Optional | - |
| `electricalProperties` | [`ElectricalProperties \| undefined`](../../doc/models/electrical-properties.md) | Optional | Electrical Properties of the Connector |
| `fixedCable` | `boolean \| undefined` | Optional | Indicates whether Connector has a fixed cable attached. False by default (not sent in this case) |
| `tariff` | [`Tariff \| undefined`](../../doc/models/tariff.md) | Optional | - |
| `updated` | `string \| undefined` | Optional | ISO8601-compliant UTC datetime of the last update of the Connector’s data |
| `updatedBy` | [`ConnectorVOUpdatedByEnum \| undefined`](../../doc/models/connector-vo-updated-by-enum.md) | Optional | - |
| `deleted` | `string \| undefined` | Optional | optional  ISO8601-compliant UTC deletion timestamp of the connector |

## Example (as JSON)

```json
{
  "uid": 2,
  "externalId": "01000861_1_21",
  "fixedCable": true,
  "updated": "10/06/2021 10:44:24",
  "deleted": "12/06/2021 10:44:24",
  "connectorType": "Industrial3PEAc",
  "electricalProperties": {
    "powerType": "AC1Phase",
    "voltage": 110.62,
    "amperage": 46.4,
    "maxElectricPower": 232.04
  }
}
```

