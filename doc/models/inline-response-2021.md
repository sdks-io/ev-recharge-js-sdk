
# Inline Response 2021

## Structure

`InlineResponse2021`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Required, Read-only | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `status` | [`GetChargeSessionRetrieveResponse200JsonStatusEnum`](../../doc/models/get-charge-session-retrieve-response-200-json-status-enum.md) | Required, Read-only | **Constraints**: *Minimum Length*: `6`, *Maximum Length*: `7` |

## Example

```ts
import {
  GetChargeSessionRetrieveResponse200JsonStatusEnum,
  InlineResponse2021,
} from 'ev-recharge-sdk';

const inlineResponse2021: InlineResponse2021 = {
  requestId: '9d2dee33-7803-485a-a2b1-2c7538e597ee',
  status: GetChargeSessionRetrieveResponse200JsonStatusEnum.SUCCESS,
};
```

