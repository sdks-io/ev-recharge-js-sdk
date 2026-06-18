
# Multi Location Marker V2

A Marker is a place on the map that represent multiple Locations at the same spot

## Structure

`MultiLocationMarkerV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Coordinates of the Shell Recharge Site Location |
| `locationCount` | `number \| undefined` | Optional | Number of Locations that this Marker represents in the given set of bounds |
| `evseCount` | `number \| undefined` | Optional | Total number of Evses in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `operatorName` | `string \| undefined` | Optional | Operator of this Shell Recharge Location |
| `markerType` | `string` | Required, Constant | Type of the Marker, in this case it will always be MultiLocation<br><br>**Value**: `'MultiLocation'` |

## Example

```ts
import { MultiLocationMarkerV2 } from 'ev-recharge-sdk';

const multiLocationMarkerV2: MultiLocationMarkerV2 = {
  markerType: 'MultiLocation',
  coordinates: {
    latitude: 39.14,
    longitude: 36.94,
  },
  locationCount: 6,
  evseCount: 10,
  maxPower: 42,
  operatorName: 'TheNewMotion',
};
```

