
# Internal Server Error

## Structure

`InternalServerError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | requestId is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `errors` | [`InternalErrorObject[] \| undefined`](../../doc/models/internal-error-object.md) | Optional | Exception details of the error |
| `details` | `string[] \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof InternalServerError) {
    console.log(error.result);
  }
}
```

