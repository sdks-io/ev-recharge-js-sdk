
# Charge Retrieve State

## Structure

`ChargeRetrieveState`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Optional | Describes the session state<br><br>started, stopped, start-requested, stop-requested, failed-to-start, failed-to-stop |
| `error` | [`ChargeError \| undefined`](../../doc/models/charge-error.md) | Optional | - |

## Example

```ts
import { ChargeRetrieveState } from 'ev-recharge-sdk';

const chargeRetrieveState: ChargeRetrieveState = {
  status: 'status0',
  error: {
    code: 'code2',
    message: 'message4',
  },
};
```

