
# Opening Hours Object

## Structure

`OpeningHoursObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `weekDay` | [`OpeningHoursObjectWeekDayEnum \| undefined`](../../doc/models/opening-hours-object-week-day-enum.md) | Optional | - |
| `startTime` | `string \| undefined` | Optional | Hour in 24h local time when the location opens. |
| `endTime` | `string \| undefined` | Optional | Hour in 24h local time when the location closes. |

## Example (as JSON)

```json
{
  "startTime": "08:00",
  "endTime": "23:00",
  "weekDay": "Thu"
}
```

