
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

## Example (as JSON)

```json
{
  "requestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "status": "FAILED",
  "errors": [
    {
      "code": "code8",
      "message": "message0",
      "description": "description0"
    },
    {
      "code": "code8",
      "message": "message0",
      "description": "description0"
    },
    {
      "code": "code8",
      "message": "message0",
      "description": "description0"
    }
  ],
  "details": [
    "details3",
    "details4",
    "details5"
  ]
}
```

