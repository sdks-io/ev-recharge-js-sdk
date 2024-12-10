
# Single Location Marker

A Marker is a place on the map that represent a single Location

## Structure

`SingleLocationMarker`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `markerType` | `string` | Required | Identifies the marker type. If it’s a `SingleLocationMarker`, then the value is `SingleLocation` |
| `uniqueKey` | `string \| undefined` | Optional | Uniquely identifies the marker object |
| `status` | [`SingleLocationMarkerStatusEnum \| undefined`](../../doc/models/single-location-marker-status-enum.md) | Optional | - |
| `coordinates` | [`Coordinates \| undefined`](../../doc/models/coordinates.md) | Optional | Coordinates of the Shell Recharge Site Location |
| `evseCount` | `number \| undefined` | Optional | Total number of Evse units in Locations that this Marker represents |
| `maxPower` | `number \| undefined` | Optional | Maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `geoHash` | `string \| undefined` | Optional | GeoHash of marker coordinates |
| `locationUid` | `number \| undefined` | Optional | Unique ID of the Location this Marker represents |
| `authorizationMethods` | [`SingleLocationMarkerAuthorizationMethodsItemsEnum[] \| undefined`](../../doc/models/single-location-marker-authorization-methods-items-enum.md) | Optional | Methods that can be used to Authorize sessions on this EVSE |
| `operatorId` | `string \| undefined` | Optional | Unique Id of the operator |

## Example (as JSON)

```json
{
  "markerType": "SingleLocation",
  "uniqueKey": "2057411_1",
  "evseCount": 12.0,
  "maxPower": 42.0,
  "geoHash": "sx",
  "locationUid": 2057411,
  "operatorId": "AT-HTB",
  "status": "Available",
  "coordinates": {
    "latitude": 39.14,
    "longitude": 36.94
  }
}
```

