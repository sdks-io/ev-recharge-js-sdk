
# Electrical Properties V2

Electrical Properties of the Connector

## Structure

`ElectricalPropertiesV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `powerType` | [`ElectricalPropertiesPowerTypeEnum \| undefined`](../../doc/models/electrical-properties-power-type-enum.md) | Optional | Power Type used in this connector. |
| `voltage` | `number \| undefined` | Optional | Voltage in Volts for this connector |
| `amperage` | `number \| undefined` | Optional | Electric Current in Amperes for this connector |
| `maxElectricPower` | `number \| undefined` | Optional | Power in Kilowatts for this connector |

## Example

```ts
import {
  ElectricalPropertiesPowerTypeEnum,
  ElectricalPropertiesV2,
} from 'ev-recharge-sdk';

const electricalPropertiesV2: ElectricalPropertiesV2 = {
  powerType: ElectricalPropertiesPowerTypeEnum.AC1Phase,
  voltage: 230,
  amperage: 16,
  maxElectricPower: 3.7,
};
```

