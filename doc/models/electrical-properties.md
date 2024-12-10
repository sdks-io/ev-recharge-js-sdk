
# Electrical Properties

Electrical Properties of the Connector

## Structure

`ElectricalProperties`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `powerType` | [`ElectricalPropertiesPowerTypeEnum \| undefined`](../../doc/models/electrical-properties-power-type-enum.md) | Optional | - |
| `voltage` | `number \| undefined` | Optional | Voltage in Volts for this connector |
| `amperage` | `number \| undefined` | Optional | Electric Current in Amperes for this connector |
| `maxElectricPower` | `number \| undefined` | Optional | Power in Kilowatts for this connector |

## Example (as JSON)

```json
{
  "voltage": 230.0,
  "amperage": 16.0,
  "maxElectricPower": 3.7,
  "powerType": "DC"
}
```

