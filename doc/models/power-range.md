
# Power Range

## Structure

`PowerRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `min` | `number` | Required | Minimum supported power in kW |
| `max` | `number` | Required | Maximum supported power in kW |

## Example

```ts
import { PowerRange } from 'ev-recharge-sdk';

const powerRange: PowerRange = {
  min: 0,
  max: 100,
};
```

