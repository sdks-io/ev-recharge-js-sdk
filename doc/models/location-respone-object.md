
# Location Respone Object

## Structure

`LocationResponeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `number \| undefined` | Optional | Unique Internal identifier used to refer to this Location by Shell Recharge |
| `externalId` | `string \| undefined` | Optional | Identifier as given by the Shell Recharge Operator, unique for that Operator |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Coordinates of the Shell Recharge Site Location |
| `operatorName` | `string \| undefined` | Optional | Operator of this Shell Recharge Location |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Address of the Shell Recharge Location |
| `accessibility` | [`Accessibility \| undefined`](../../doc/models/accessibility.md) | Optional | Accessibility of the Location |
| `evses` | [`EvseVO[] \| undefined`](../../doc/models/evse-vo.md) | Optional | - |
| `openingHours` | [`OpeningHoursObject[] \| undefined`](../../doc/models/opening-hours-object.md) | Optional | Optional Opening Hours of the Location. Please note that it is not available for all sites. |
| `updated` | `string \| undefined` | Optional | ISO8601-compliant UTC datetime of the last update of the location |
| `operatorComment` | `string \| undefined` | Optional | optional Operator-wide arbitrary text (eg promotional, warning) |
| `locationType` | `string \| undefined` | Optional | the type of the location. Could be "UNKNOWN". |

## Example (as JSON)

```json
{
  "uid": 12,
  "externalId": "01001188",
  "operatorName": "TheNewMotion",
  "updated": "10/06/2021 10:44:24",
  "operatorComment": "promotional",
  "locationType": "Unknown",
  "coordinates": {
    "latitude": 39.14,
    "longitude": 36.94
  },
  "address": {
    "streetAndNumber": "streetAndNumber2",
    "postalCode": "postalCode8",
    "city": "city6",
    "country": "country0"
  }
}
```

