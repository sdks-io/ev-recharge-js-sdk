
# Not Found Error

Requested resource path not available it will provides the error in OpenAPI spec mentioned format, if there is any change in base URL then respective platform error message will be populated.

## Structure

`NotFoundError`

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
  if (error instanceof NotFoundError) {
    console.log(error.result);
  }
}
```

