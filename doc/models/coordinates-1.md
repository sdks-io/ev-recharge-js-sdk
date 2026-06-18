
# Coordinates 1

## Structure

`Coordinates1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number \| undefined` | Optional | Latitude of the Coordinate<br><br>**Constraints**: `>= -90`, `<= 90` |
| `longitude` | `number \| undefined` | Optional | Longitude of the Coordinate<br><br>**Constraints**: `>= -180`, `<= 180` |

## Example

```ts
import { Coordinates1 } from 'ev-recharge-sdk';

const coordinates1: Coordinates1 = {
  latitude: 52.143814,
  longitude: 52.143814,
};
```

