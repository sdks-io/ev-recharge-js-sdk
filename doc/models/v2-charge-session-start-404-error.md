
# V2 Charge Session Start 404 Error

## Structure

`V2ChargeSessionStart404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | requestId is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `errors` | [`NotFoundErrMsg[] \| undefined`](../../doc/models/not-found-err-msg.md) | Optional | Exception details of the error |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof V2ChargeSessionStart404Error) {
    console.log(error.result);
  }
}
```

