
# Tariff Element

## Structure

`TariffElement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `priceComponents` | [`PriceComponent[]`](../../doc/models/price-component.md) | Required | - |
| `restrictions` | [`Restrictions \| undefined`](../../doc/models/restrictions.md) | Optional | - |

## Example

```ts
import { TariffElement, TypeEnum } from 'ev-recharge-sdk';

const tariffElement: TariffElement = {
  priceComponents: [
    {
      type: TypeEnum.FLAT,
      stepSize: 1,
      price: 0.3,
      vat: 21,
    }
  ],
  restrictions: {
    startTime: 'startTime0',
    endTime: 'endTime2',
    startDate: '2016-03-13T12:52:32.123Z',
    endDate: '2016-03-13T12:52:32.123Z',
    minKwh: 247.22,
  },
};
```

