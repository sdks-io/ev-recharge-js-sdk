
# Multi Location Marker

A Marker is a place on the map that represent multiple Locations at the same spot

## Structure

`MultiLocationMarker`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `markerType` | `string` | Required | Identifies the marker type. If it's a `MultiLocationMarker`, then the value is `MultiLocation` |
| `uniqueKey` | `string \| undefined` | Optional | Uniquely identifies the marker object |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Coordinates of the Shell Recharge Site Location |
| `locationCount` | `number \| undefined` | Optional | Number of Locations that this Marker represents in the given set of bounds |
| `evseCount` | `number \| undefined` | Optional | Total number of Evses in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `geoHash` | `string \| undefined` | Optional | GeoHash of marker coordinates |

## Example (as JSON)

```json
{
  "markerType": "MultiLocation",
  "uniqueKey": "2060319_6",
  "locationCount": 6.0,
  "evseCount": 10.0,
  "maxPower": 42.0,
  "geoHash": "sx",
  "coordinates": {
    "latitude": 39.14,
    "longitude": 36.94
  }
}
```

