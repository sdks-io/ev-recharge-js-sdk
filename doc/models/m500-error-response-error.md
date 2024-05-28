
# M500 Error Response Error

## Structure

`M500ErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | Error code that logically best represents the error encountered<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5` |
| `title` | `string` | Required | Description of the error type<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `detail` | `string` | Required | Details of the error that can help under the cause of the error<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `250` |
| `additionalInfo` | `Record<string, string \| null> \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "Code": "E0002",
  "Title": "Unknown Error",
  "Detail": "Something is wrong! Please retry after sometime. If the  problem persists contact support",
  "AdditionalInfo": {
    "key0": "AdditionalInfo2",
    "key1": "AdditionalInfo1"
  }
}
```

