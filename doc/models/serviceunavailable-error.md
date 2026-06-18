
# Serviceunavailable Error

## Structure

`ServiceunavailableError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | requestId is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `errors` | [`ServiceunavailableErrMsg[] \| undefined`](../../doc/models/serviceunavailable-err-msg.md) | Optional | Exception details of the error |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ServiceunavailableError) {
    console.log(error.result);
  }
}
```

