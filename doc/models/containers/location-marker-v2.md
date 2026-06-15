
# Location Marker V2

## Class Name

`LocationMarkerV2`

## Cases

| Type |
|  --- |
| [`SingleLocationMarkerV2`](../../../doc/models/single-location-marker-v2.md) |
| [`MultiLocationMarkerV2`](../../../doc/models/multi-location-marker-v2.md) |

## SingleLocationMarkerV2

### Initialization Code

#### Example

```ts
const value: LocationMarkerV2 = {
  markerType: 'SingleLocation',
  status: SingleLocationMarkerStatusEnum.Available,
  evseCount: 12,
  locationCount: 6,
  locationUid: '2057411',
  operatorName: 'TheNewMotion',
};
```

## MultiLocationMarkerV2

### Initialization Code

#### Example

```ts
const value: LocationMarkerV2 = {
  markerType: 'MultiLocation',
  locationCount: 6,
  evseCount: 10,
  maxPower: 42,
  operatorName: 'TheNewMotion',
};
```

