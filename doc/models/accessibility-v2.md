
# Accessibility V2

Accessibility of the Location

## Structure

`AccessibilityV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`AccessibilityStatusEnum \| undefined`](../../doc/models/accessibility-status-enum.md) | Optional | Accessibility Status |

## Example

```ts
import { AccessibilityStatusEnum, AccessibilityV2 } from 'ev-recharge-sdk';

const accessibilityV2: AccessibilityV2 = {
  status: AccessibilityStatusEnum.FreePublic,
};
```

