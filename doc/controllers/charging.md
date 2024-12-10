# Charging

Charging Endpoints

```ts
const chargingController = new ChargingController(client);
```

## Class Name

`ChargingController`

## Methods

* [Start](../../doc/controllers/charging.md#start)
* [Stop](../../doc/controllers/charging.md#stop)
* [Get-Charge-Session-Retrieve](../../doc/controllers/charging.md#get-charge-session-retrieve)
* [Active](../../doc/controllers/charging.md#active)


# Start

This endpoint start the charging session for the user.

```ts
async start(
  requestId: string,
  body?: ChargesessionStartBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InlineResponse202>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `body` | [`ChargesessionStartBody \| undefined`](../../doc/models/chargesession-start-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InlineResponse202`](../../doc/models/inline-response-202.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const body: ChargesessionStartBody = {
  evChargeNumber: 'NL-TNM-C00122045-K',
  evseId: 'NL*TNM*E02003451*0',
};

try {
  const { result, ...httpResponse } = await chargingController.start(
  requestId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "status": "SUCCESS",
  "data": [
    {
      "sessionId": "c3e332f0-1bb2-4f50-a96b-e075bbb71e68"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Stop

Accepts a request to stop an active session when a valid session id is provided.

```ts
async stop(
  requestId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InlineResponse2021>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `sessionId` | `string` | Query, Required | Session Id<br>**Constraints**: *Minimum Length*: `36`, *Maximum Length*: `36`, *Pattern*: `^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InlineResponse2021`](../../doc/models/inline-response-2021.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const sessionId = 'c3e332f0-1bb2-4f50-a96b-e075bbb71e68';

try {
  const { result, ...httpResponse } = await chargingController.stop(
  requestId,
  sessionId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "status": "SUCCESS"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Get-Charge-Session-Retrieve

This endpoint returns the details of the session if the session is found.

```ts
async getChargeSessionRetrieve(
  requestId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeSessionRetrieveResponse200Json>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `sessionId` | `string` | Query, Required | Session Id<br>**Constraints**: *Minimum Length*: `36`, *Maximum Length*: `36`, *Pattern*: `^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeSessionRetrieveResponse200Json`](../../doc/models/get-charge-session-retrieve-response-200-json.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const sessionId = 'c3e332f0-1bb2-4f50-a96b-e075bbb71e68';

try {
  const { result, ...httpResponse } = await chargingController.getChargeSessionRetrieve(
  requestId,
  sessionId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "status": "SUCCESS",
  "data": [
    {
      "id": "78b5d7a3-bdba-43d7-9851-1c84fcddb782",
      "userId": "281482b6-2c9a-4fd1-b3ea-1928edb40ef9",
      "emaId": "NL-TNM-C00122045-K",
      "evseId": "NL*TNM*E02003451*0",
      "lastUpdated": "2024-06-19T07:36:57.985998Z",
      "startedAt": "2024-06-19T11:20:27Z",
      "stoppedAt": "2014-06-19T12:20:27Z",
      "sessionState": {
        "status": "Started"
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Active

Fetrches the active sessions for user.

```ts
async active(
  requestId: string,
  emaId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActiveResponse200Json>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `emaId` | `string` | Query, Required | Emobility Account Identifier(Ema-ID)<br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `19` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActiveResponse200Json`](../../doc/models/active-response-200-json.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const emaId = 'NL-TNM-C0216599X-A';

try {
  const { result, ...httpResponse } = await chargingController.active(
  requestId,
  emaId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "status": "SUCCESS",
  "data": [
    {
      "id": "78b5d7a3-bdba-43d7-9851-1c84fcddb782",
      "userId": "281482b6-2c9a-4fd1-b3ea-1928edb40ef9",
      "emaId": "NL-TNM-C00122045-K",
      "evseId": "NL*TNM*E02003451*0",
      "startedAt": "2015-08-19T11:20:27Z",
      "stoppedAt": "2015-08-19T11:20:27Z",
      "SessionState": {
        "status": "Started"
      },
      "lastUpdated": "2024-07-17T07:36:57.985998Z"
    }
  ]
}
```

