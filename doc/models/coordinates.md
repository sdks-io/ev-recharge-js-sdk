
# Coordinates

Coordinates of the Shell Recharge Site Location

## Structure

`Coordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number \| undefined` | Optional | Latitude of the Coordinate<br><br>**Constraints**: `>= -90`, `<= 90` |
| `longitude` | `number \| undefined` | Optional | Longitude of the Coordinate<br><br>**Constraints**: `>= -180`, `<= 180` |

## Example

```ts
import { Coordinates } from 'ev-recharge-sdk';

const coordinates: Coordinates = {
  latitude: 52.143814,
  longitude: 52.143814,
};
```

