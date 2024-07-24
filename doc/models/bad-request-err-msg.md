
# Bad Request Err Msg

## Structure

`BadRequestErrMsg`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Error code |
| `message` | `string \| undefined` | Optional | Error desctiption in English |
| `description` | `string \| undefined` | Optional | Technical details of the error message, the example which is given in the sample payload is one of the scenarios. actual response will vary based on the validation error |
| `details` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "E0001",
  "message": "Bad Request",
  "description": "Authorization header is missing",
  "details": [
    "details7",
    "details8",
    "details9"
  ]
}
```

