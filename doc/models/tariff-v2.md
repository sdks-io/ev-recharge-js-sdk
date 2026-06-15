
# Tariff V2

Tariff metadata aligned with TariffV2 GraphQL schema

## Structure

`TariffV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tariffId` | `string` | Required | Unique identifier for the tariff |
| `tariffType` | [`TariffTypeEnum`](../../doc/models/tariff-type-enum.md) | Required | Tariff type classification |
| `powerRange` | [`PowerRange`](../../doc/models/power-range.md) | Required | - |
| `internalId` | `string` | Required | Internal identifier used by the platform |
| `operatorId` | `string` | Required | Unique identifier of the operator |
| `providerId` | `string` | Required | Unique identifier of the provider |
| `currency` | `string` | Required | ISO 4217 Currency Code |
| `tariffAltText` | [`TariffAltText[] \| null`](../../doc/models/tariff-alt-text.md) | Required | - |
| `minPrice` | `number` | Required | - |
| `maxPrice` | `number` | Required | - |
| `elements` | [`TariffElement[]`](../../doc/models/tariff-element.md) | Required | - |
| `startDateTime` | `string` | Required | - |
| `endDateTime` | `string` | Required | - |
| `lastUpdated` | `string` | Required | - |
| `createdBy` | `string` | Required | Identifier of the actor who created the tariff |

## Example (as JSON)

```json
{
  "tariffId": "123e4567-e89b-12d3-a456-426614174000",
  "tariffType": "DRIVER",
  "powerRange": {
    "min": 0,
    "max": 100
  },
  "internalId": "123e4567-e89b-12d3-a456-426614174000",
  "operatorId": "AT-HTB",
  "providerId": "Shell_RP_2",
  "currency": "EUR",
  "tariffAltText": [
    {
      "language": "en",
      "text": "€0.30 per kWh"
    }
  ],
  "minPrice": 0.3,
  "maxPrice": 999.0,
  "elements": [
    {
      "priceComponents": [
        {
          "type": "FLAT",
          "stepSize": 1,
          "price": 0.3,
          "vat": 21.0
        }
      ],
      "restrictions": {
        "startTime": "startTime0",
        "endTime": "endTime2",
        "startDate": "2016-03-13T12:52:32.123Z",
        "endDate": "2016-03-13T12:52:32.123Z",
        "minKwh": 247.22
      }
    }
  ],
  "startDateTime": "10/06/2021 10:44:24",
  "endDateTime": "10/06/2021 10:44:24",
  "lastUpdated": "10/06/2021 10:44:24",
  "createdBy": "STAGE_API"
}
```

