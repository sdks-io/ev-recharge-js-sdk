
# Multi Location Marker

A Marker is a place on the map that represent multiple Locations at the same spot

## Structure

`MultiLocationMarker`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `markerType` | `string` | Required | Identifies the marker type. If it's a `MultiLocationMarker`, then the value is `MultiLocation` |
| `uniqueKey` | `string \| undefined` | Optional | Uniquely identifies the marker object |
| `coordinates` | [`Coordinates1 \| undefined`](../../doc/models/coordinates-1.md) | Optional | - |
| `locationCount` | `number \| undefined` | Optional | Number of Locations that this Marker represents in the given set of bounds |
| `evseCount` | `number \| undefined` | Optional | Total number of Evses in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `geoHash` | `string \| undefined` | Optional | GeoHash of marker coordinates |

## Example

```ts
import { MultiLocationMarker } from 'ev-recharge-sdk';

const multiLocationMarker: MultiLocationMarker = {
  markerType: 'MultiLocation',
  uniqueKey: '2060319_6',
  coordinates: {
    latitude: 39.14,
    longitude: 36.94,
  },
  locationCount: 6,
  evseCount: 10,
  maxPower: 42,
  geoHash: 'sx',
};
```

