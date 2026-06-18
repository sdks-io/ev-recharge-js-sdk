
# Restrictions

## Structure

`Restrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `string \| undefined` | Optional | Valid from this time of the day (HH:mm) |
| `endTime` | `string \| undefined` | Optional | Valid until this time of the day (HH:mm) |
| `startDate` | `string \| undefined` | Optional | - |
| `endDate` | `string \| undefined` | Optional | - |
| `minKwh` | `number \| undefined` | Optional | - |
| `maxKwh` | `number \| undefined` | Optional | - |
| `minCurrent` | `number \| undefined` | Optional | - |
| `maxCurrent` | `number \| undefined` | Optional | - |
| `minPower` | `number \| undefined` | Optional | - |
| `maxPower` | `number \| undefined` | Optional | - |
| `minDuration` | `number \| undefined` | Optional | Minimum session duration in seconds |
| `maxDuration` | `number \| undefined` | Optional | Maximum session duration in seconds |
| `dayOfWeek` | [`DayOfWeekEnum[] \| undefined`](../../doc/models/day-of-week-enum.md) | Optional | - |

## Example

```ts
import { Restrictions } from 'ev-recharge-sdk';

const restrictions: Restrictions = {
  startTime: '08:00',
  endTime: '18:00',
  startDate: '2021-10-06',
  endDate: '2021-10-31',
  minKwh: 0.1,
  maxKwh: 100,
  minCurrent: 0,
  maxCurrent: 500,
  minPower: 0,
  maxPower: 100,
  minDuration: 0,
  maxDuration: 86400,
};
```

