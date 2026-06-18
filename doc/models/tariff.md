
# Tariff

## Structure

`Tariff`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startFee` | `number \| undefined` | Optional | Tariff to start a charging session |
| `perMinute` | `number \| undefined` | Optional | Tariff per minute of charging time |
| `perKWh` | `number \| undefined` | Optional | Tariff per kWh of energy consumed |
| `currency` | `string \| undefined` | Optional | ISO 4217 Currency Code of the local currency. |
| `updated` | `string \| undefined` | Optional | ISO8601-compliant UTC datetime of the last update of the Tariff |
| `updatedBy` | [`TariffVOUpdatedByEnum \| undefined`](../../doc/models/tariff-vo-updated-by-enum.md) | Optional | Source of the last update of the tariff details |
| `structure` | `string \| undefined` | Optional | Tariff structure that this tariff belongs to, typically Default unless specific tariff is defined for provider |

## Example

```ts
import { Tariff, TariffVOUpdatedByEnum } from 'ev-recharge-sdk';

const tariff: Tariff = {
  startFee: 0,
  perMinute: 0.12,
  perKWh: 0.89,
  currency: 'EUR',
  updated: '2021-07-06T10:44:24Z',
  updatedBy: TariffVOUpdatedByEnum.TariffService,
  structure: 'default',
};
```

