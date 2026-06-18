
# Too Many Requests Error

## Structure

`TooManyRequestsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | RequestID is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `errors` | [`RatelimitErrMsg[] \| undefined`](../../doc/models/ratelimit-err-msg.md) | Optional | Exception details of the error |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof TooManyRequestsError) {
    console.log(error.result);
  }
}
```

