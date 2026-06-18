
# Charge Error

## Structure

`ChargeError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Session code e.g InternalError |
| `message` | `string \| undefined` | Optional | Session message |

## Example

```ts
import { ChargeError } from 'ev-recharge-sdk';

const chargeError: ChargeError = {
  code: 'code4',
  message: 'message6',
};
```

