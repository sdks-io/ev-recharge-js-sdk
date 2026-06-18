
# Connector V2

An EVSE can have one or many Connectors. Each Connector will normally have a different socket / cable and only one can be used to charge at a time.

## Structure

`ConnectorV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | Internal identifier used to refer to this Connector |
| `externalId` | `string \| undefined` | Optional | Identifier of the Evse as given by the Operator, unique for the containing EVSE' |
| `connectorType` | [`ConnectorVOConnectorTypeEnum \| undefined`](../../doc/models/connector-vo-connector-type-enum.md) | Optional | Type of the connector in the EVSE unit. |
| `electricalProperties` | [`ElectricalPropertiesV2 \| undefined`](../../doc/models/electrical-properties-v2.md) | Optional | Electrical Properties of the Connector |

## Example

```ts
import {
  ConnectorV2,
  ConnectorVOConnectorTypeEnum,
  ElectricalPropertiesPowerTypeEnum,
} from 'ev-recharge-sdk';

const connectorV2: ConnectorV2 = {
  uid: '2',
  externalId: '01000861_1_21',
  connectorType: ConnectorVOConnectorTypeEnum.Type2,
  electricalProperties: {
    powerType: ElectricalPropertiesPowerTypeEnum.AC1Phase,
    voltage: 110.62,
    amperage: 46.4,
    maxElectricPower: 232.04,
  },
};
```

