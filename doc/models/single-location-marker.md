
# Single Location Marker

A Marker is a place on the map that represent a single Location

## Structure

`SingleLocationMarker`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `markerType` | `string` | Required | Identifies the marker type. If it’s a `SingleLocationMarker`, then the value is `SingleLocation` |
| `uniqueKey` | `string \| undefined` | Optional | Uniquely identifies the marker object |
| `status` | [`SingleLocationMarkerStatusEnum \| undefined`](../../doc/models/single-location-marker-status-enum.md) | Optional | Minimum of all status values in the Marker, e.g. if at least one Evse in the Marker is available, the value will be available |
| `coordinates` | [`Coordinates1 \| undefined`](../../doc/models/coordinates-1.md) | Optional | - |
| `evseCount` | `number \| undefined` | Optional | Total number of Evse units in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `geoHash` | `string \| undefined` | Optional | GeoHash of marker coordinates |
| `locationUid` | `number \| undefined` | Optional | Unique ID of the Location this Marker represents |
| `authorizationMethods` | [`SingleLocationMarkerAuthorizationMethodsItemsEnum[] \| undefined`](../../doc/models/single-location-marker-authorization-methods-items-enum.md) | Optional | Methods that can be used to Authorize sessions on this EVSE |
| `operatorId` | `string \| undefined` | Optional | Unique Id of the operator |

## Example

```ts
import {
  SingleLocationMarker,
  SingleLocationMarkerStatusEnum,
} from 'ev-recharge-sdk';

const singleLocationMarker: SingleLocationMarker = {
  markerType: 'SingleLocation',
  uniqueKey: '2057411_1',
  status: SingleLocationMarkerStatusEnum.Available,
  coordinates: {
    latitude: 39.14,
    longitude: 36.94,
  },
  evseCount: 12,
  maxPower: 42,
  geoHash: 'sx',
  locationUid: 2057411,
  operatorId: 'AT-HTB',
};
```

