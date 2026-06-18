
# Response V2

## Structure

`ResponseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | requestId is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |
| `status` | `string \| undefined` | Optional | status of the API call |
| `data` | [`LocationResponeObjectV2[] \| undefined`](../../doc/models/location-respone-object-v2.md) | Optional | API Response |

## Example

```ts
import { ResponseV2 } from 'ev-recharge-sdk';

const responseV2: ResponseV2 = {
  requestId: '9d2dee33-7803-485a-a2b1-2c7538e597ee',
  status: 'SUCCESS',
  data: [
    {
      uid: 'uid0',
      externalId: 'externalId6',
      coordinates: {
        latitude: 39.14,
        longitude: 36.94,
      },
      operatorName: 'operatorName0',
      address: {
        streetAndNumber: 'streetAndNumber2',
        postalCode: 'postalCode8',
        city: 'city6',
        country: 'country0',
      },
    },
    {
      uid: 'uid0',
      externalId: 'externalId6',
      coordinates: {
        latitude: 39.14,
        longitude: 36.94,
      },
      operatorName: 'operatorName0',
      address: {
        streetAndNumber: 'streetAndNumber2',
        postalCode: 'postalCode8',
        city: 'city6',
        country: 'country0',
      },
    },
    {
      uid: 'uid0',
      externalId: 'externalId6',
      coordinates: {
        latitude: 39.14,
        longitude: 36.94,
      },
      operatorName: 'operatorName0',
      address: {
        streetAndNumber: 'streetAndNumber2',
        postalCode: 'postalCode8',
        city: 'city6',
        country: 'country0',
      },
    }
  ],
};
```

