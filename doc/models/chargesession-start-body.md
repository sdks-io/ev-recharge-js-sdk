
# Chargesession Start Body

## Structure

`ChargesessionStartBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `evChargeNumber` | `string` | Required | Ev charge number<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `evseId` | `string` | Required | This is the Electric Vehicle EquipmentID<br>**Constraints**: *Minimum Length*: `18`, *Maximum Length*: `36` |

## Example (as JSON)

```json
{
  "evChargeNumber": "NL-TNM-C00122045-K",
  "evseId": "NL*TNM*E02003451*0"
}
```

