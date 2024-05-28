# Charging

Charging Endpoints

```ts
const chargingController = new ChargingController(client);
```

## Class Name

`ChargingController`

## Methods

* [Start Charge Session](../../doc/controllers/charging.md#start-charge-session)
* [Stop Charge Session](../../doc/controllers/charging.md#stop-charge-session)
* [Get Charge Session Retrieve](../../doc/controllers/charging.md#get-charge-session-retrieve)
* [Active](../../doc/controllers/charging.md#active)


# Start Charge Session

This API initiates to start a session on a EVSE (Electric Vehicle Supply Equipement). When the EV Charge Card number and the unique EVSE ID on the location is provided, the session is initiated.

Please note that this is an asynchronous request, the request will be passed on to the operator/platform to be processed further.

```ts
async startChargeSession(
  requestId: string,
  body?: ChargesessionStartBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InlineResponse202>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `body` | [`ChargesessionStartBody \| undefined`](../../doc/models/chargesession-start-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InlineResponse202`](../../doc/models/inline-response-202.md)

## Example Usage

```ts
const requestId = 'eb621f45-a543-4d9a-a934-2f223b263c42';

const body: ChargesessionStartBody = {
  evChargeNumber: 'NL-TNM-C00122045-K',
  evseId: 'NL*TNM*E02003451*0',
};

try {
  const { result, ...httpResponse } = await chargingController.startChargeSession(
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
  "RequestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "Status": "SUCCESS",
  "Data": [
    {
      "SessionId": "c3e332f0-1bb2-4f50-a96b-e075bbb71e68"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ErrorResponseError1Error`](../../doc/models/m400-error-response-error-1-error.md) |
| 401 | Unauthorized | [`HTTP401ErrorResponseError`](../../doc/models/http401-error-response-error.md) |
| 404 | Invalid charge token with given EmaId was not found.<br><br>Backend HTTP 410 should be transformed to 404. | [`M404ErrorResponseError1Error`](../../doc/models/m404-error-response-error-1-error.md) |
| 405 | Method Not Allowed | [`M405ErrorResponseError1Error`](../../doc/models/m405-error-response-error-1-error.md) |
| 429 | Too Many Requests | [`M429ErrorResponseError1Error`](../../doc/models/m429-error-response-error-1-error.md) |
| 500 | Internal Server Error | [`M500ErrorResponseError1Error`](../../doc/models/m500-error-response-error-1-error.md) |
| 503 | Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed | [`M503ErrorResponseError1Error`](../../doc/models/m503-error-response-error-1-error.md) |


# Stop Charge Session

This API stops a session by providing the session ID which was retrieved when starting the session. HTTP 202 response will be returned if the request is accepted. Once the session is stopped the response will contain the DateTime on which it is stopped.      operationId: Stop

```ts
async stopChargeSession(
  requestId: string,
  uuid: string,
  body?: StopChargeSessionRequestBodyJson,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InlineResponse2021>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `uuid` | `string` | Template, Required | Unique session ID which was generated to activate a charging session. |
| `body` | [`StopChargeSessionRequestBodyJson \| undefined`](../../doc/models/stop-charge-session-request-body-json.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InlineResponse2021`](../../doc/models/inline-response-2021.md)

## Example Usage

```ts
const requestId = 'eb621f45-a543-4d9a-a934-2f223b263c42';

const uuid = '00000f7e-0000-0000-0000-000000000000';

const body: StopChargeSessionRequestBodyJson = {
  sesssionId: 'c3e332f0-1bb2-4f50-a96b-e075bbb71e68',
};

try {
  const { result, ...httpResponse } = await chargingController.stopChargeSession(
  requestId,
  uuid,
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
  "RequestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "Status": "SUCCESS"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ErrorResponseError1Error`](../../doc/models/m400-error-response-error-1-error.md) |
| 401 | Unauthorized | [`M401ErrorResponseError1Error`](../../doc/models/m401-error-response-error-1-error.md) |
| 404 | Session not found or Session has already been stopped. Map 410 Error message into 404. | [`M404ErrorResponseError1Error`](../../doc/models/m404-error-response-error-1-error.md) |
| 405 | Method Not Allowed | [`M405ErrorResponseError1Error`](../../doc/models/m405-error-response-error-1-error.md) |
| 429 | Too Many Requests | [`M429ErrorResponseError1Error`](../../doc/models/m429-error-response-error-1-error.md) |
| 500 | Internal Server Error | [`M500ErrorResponseError1Error`](../../doc/models/m500-error-response-error-1-error.md) |
| 503 | Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed | [`M503ErrorResponseError1Error`](../../doc/models/m503-error-response-error-1-error.md) |


# Get Charge Session Retrieve

This API retrieves the status and details of the session which was started by the user. The session ID generated earlier needs to be passed in this API in order to retrieve the status.

```ts
async getChargeSessionRetrieve(
  requestId: string,
  sessionId: string,
  uuid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeSessionRetrieveResponse200Json>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `sessionId` | `string` | Query, Required | Session Id is to be fetched |
| `uuid` | `string` | Template, Required | Unique session ID which was generated to activate a charging session. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeSessionRetrieveResponse200Json`](../../doc/models/get-charge-session-retrieve-response-200-json.md)

## Example Usage

```ts
const requestId = 'eb621f45-a543-4d9a-a934-2f223b263c42';

const sessionId = 'c3e332f0-1bb2-4f50-a96b-e075bbb71e68';

const uuid = '00000f7e-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await chargingController.getChargeSessionRetrieve(
  requestId,
  sessionId,
  uuid
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
  "RequestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "Status": "SUCCESS",
  "Data": [
    {
      "EmaId": "NL-TNM-C0216599X-A",
      "EvseId": "NL*TNM*EVIRTUALCP0002*0",
      "Id": "4eaf3619-d095-486f-8590-cac75fb21c1b",
      "StartedAt": "2022-10-21T09:56:59.725Z",
      "Sessionstate": "stopped",
      "StoppedAt": "2022-10-21T09:57:25.468Z",
      "SessionCode": null,
      "SessionMessage": null,
      "UserId": "96f69b3b-8ad4-487a-baaa-f1d3db741e88"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ErrorResponseError1Error`](../../doc/models/m400-error-response-error-1-error.md) |
| 401 | Unauthorized | [`M401ErrorResponseError1Error`](../../doc/models/m401-error-response-error-1-error.md) |
| 404 | Not Found | [`M404ErrorResponseError1Error`](../../doc/models/m404-error-response-error-1-error.md) |
| 405 | Method Not Allowed | [`M405ErrorResponseError1Error`](../../doc/models/m405-error-response-error-1-error.md) |
| 429 | Too Many Requests | [`M429ErrorResponseError1Error`](../../doc/models/m429-error-response-error-1-error.md) |
| 500 | Internal Server Error | [`M500ErrorResponseError1Error`](../../doc/models/m500-error-response-error-1-error.md) |
| 503 | Service Unavailable | [`M503ErrorResponseError1Error`](../../doc/models/m503-error-response-error-1-error.md) |


# Active

This API retrieves the list of active sessions for a given set of EMAIds

```ts
async active(
  emaId: string,
  requestId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActiveResponse200Json>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emaId` | `string` | Query, Required | Emobility Account Identifier(Ema-ID) |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActiveResponse200Json`](../../doc/models/active-response-200-json.md)

## Example Usage

```ts
const emaId = 'NL-TNM-C0216599X-A';

const requestId = 'eb621f45-a543-4d9a-a934-2f223b263c42';

try {
  const { result, ...httpResponse } = await chargingController.active(
  emaId,
  requestId
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
  "RequestId": "9d2dee33-7803-485a-a2b1-2c7538e597ee",
  "Status": "SUCCESS",
  "Data": [
    {
      "EmaId": "NL-TNM-C0216599X-A",
      "EvseId": "NL*TNM*EVIRTUALCP0002*0",
      "Id": "260f17a9-52d4-4b40-ae74-83832b538975",
      "StartedAt": "2022-10-21T09:11:23.455Z",
      "SessionState": "started",
      "SessionCode": null,
      "SessionMessage": null,
      "UserId": "96f69b3b-8ad4-487a-baaa-f1d3db741e88"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ErrorResponseError1Error`](../../doc/models/m400-error-response-error-1-error.md) |
| 401 | Unauthorized | [`M401ErrorResponseError1Error`](../../doc/models/m401-error-response-error-1-error.md) |
| 404 | Session not found or Session has already been stopped. Map 410 Error message into 404. | [`M404ErrorResponseError1Error`](../../doc/models/m404-error-response-error-1-error.md) |
| 405 | Method Not Allowed | [`M405ErrorResponseError1Error`](../../doc/models/m405-error-response-error-1-error.md) |
| 429 | Too Many Requests | [`M429ErrorResponseError1Error`](../../doc/models/m429-error-response-error-1-error.md) |
| 500 | Internal Server Error | [`M500ErrorResponseError1Error`](../../doc/models/m500-error-response-error-1-error.md) |
| 503 | Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed | [`M503ErrorResponseError1Error`](../../doc/models/m503-error-response-error-1-error.md) |

