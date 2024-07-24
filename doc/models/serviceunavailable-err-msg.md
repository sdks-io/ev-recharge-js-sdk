
# Serviceunavailable Err Msg

## Structure

`ServiceunavailableErrMsg`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Error code |
| `message` | `string \| undefined` | Optional | Error desctiption in English |
| `description` | `string \| undefined` | Optional | Technical details of the error message, the example which is given in the sample payload is one of the scenarios. actual response will vary based on the technical nature |
| `details` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "E0014",
  "message": "Connectivity Error",
  "description": "Service Unavailable",
  "details": [
    "details1"
  ]
}
```

