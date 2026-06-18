
# Single Location Marker V2

A Marker is a place on the map that represent a single Location

## Structure

`SingleLocationMarkerV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`SingleLocationMarkerStatusEnum \| undefined`](../../doc/models/single-location-marker-status-enum.md) | Optional | Minimum of all status values in the Marker, e.g. if at least one Evse in the Marker is available, the value will be available |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Coordinates of the Shell Recharge Site Location |
| `evseCount` | `number \| undefined` | Optional | Total number of Evse units in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `locationCount` | `number \| undefined` | Optional | Number of Locations that this Marker represents in the given set of bounds |
| `locationUid` | `string \| undefined` | Optional | Unique ID of the Location this Marker represents |
| `authorizationMethods` | [`SingleLocationMarkerAuthorizationMethodsItemsEnum[] \| undefined`](../../doc/models/single-location-marker-authorization-methods-items-enum.md) | Optional | Methods that can be used to Authorize sessions on this EVSE |
| `operatorName` | `string \| undefined` | Optional | Operator of this Shell Recharge Location |
| `markerType` | `string` | Required, Constant | Type of the Marker, in this case it will always be SingleLocation<br><br>**Value**: `'SingleLocation'` |

## Example

```ts
import {
  SingleLocationMarkerStatusEnum,
  SingleLocationMarkerV2,
} from 'ev-recharge-sdk';

const singleLocationMarkerV2: SingleLocationMarkerV2 = {
  markerType: 'SingleLocation',
  status: SingleLocationMarkerStatusEnum.Available,
  coordinates: {
    latitude: 39.14,
    longitude: 36.94,
  },
  evseCount: 12,
  maxPower: 75.6,
  locationCount: 6,
  locationUid: '2057411',
  operatorName: 'TheNewMotion',
};
```

