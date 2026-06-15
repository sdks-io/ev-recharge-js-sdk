
# Location Marker

## Class Name

`LocationMarker`

## Cases

| Type |
|  --- |
| [`SingleLocationMarker`](../../../doc/models/single-location-marker.md) |
| [`MultiLocationMarker`](../../../doc/models/multi-location-marker.md) |

## SingleLocationMarker

### Initialization Code

#### Example

```ts
const value: LocationMarker = {
  markerType: 'SingleLocation',
  uniqueKey: '2057411_1',
  status: SingleLocationMarkerStatusEnum.Available,
  evseCount: 12,
  maxPower: 42,
  geoHash: 'sx',
  locationUid: 2057411,
  operatorId: 'AT-HTB',
};
```

## MultiLocationMarker

### Initialization Code

#### Example

```ts
const value: LocationMarker = {
  markerType: 'MultiLocation',
  uniqueKey: '2060319_6',
  locationCount: 6,
  evseCount: 10,
  maxPower: 42,
  geoHash: 'sx',
};
```

