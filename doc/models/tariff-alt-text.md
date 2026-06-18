
# Tariff Alt Text

## Structure

`TariffAltText`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string` | Required | ISO language code |
| `text` | `string` | Required | Human readable tariff description |

## Example

```ts
import { TariffAltText } from 'ev-recharge-sdk';

const tariffAltText: TariffAltText = {
  language: 'en',
  text: '€0.30 per kWh',
};
```

