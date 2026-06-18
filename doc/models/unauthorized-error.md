
# Unauthorized Error

## Structure

`UnauthorizedError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | requestId or correlation id of the message |
| `status` | `string \| undefined` | Optional | Status of the request |
| `errors` | [`UnauthorizedErrMsg[] \| undefined`](../../doc/models/unauthorized-err-msg.md) | Optional | Exception details of the error |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof UnauthorizedError) {
    console.log(error.result);
  }
}
```

