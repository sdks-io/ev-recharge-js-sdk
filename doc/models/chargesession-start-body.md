
# Chargesession Start Body

## Structure

`ChargesessionStartBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `evChargeNumber` | `string` | Required | Ev charge number<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `evseId` | `string` | Required | This is the Electric Vehicle EquipmentID<br><br>**Constraints**: *Minimum Length*: `18`, *Maximum Length*: `36` |

## Example

```ts
import { ChargesessionStartBody } from 'ev-recharge-sdk';

const chargesessionStartBody: ChargesessionStartBody = {
  evChargeNumber: 'NL-TNM-C00122045-K',
  evseId: 'NL*TNM*E02003451*0',
};
```

