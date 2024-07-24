# Locations

APIs for Shell Recharge Locations

```ts
const locationsController = new LocationsController(client);
```

## Class Name

`LocationsController`

## Methods

* [Get EV Locations](../../doc/controllers/locations.md#get-ev-locations)
* [Ev Locations by ID](../../doc/controllers/locations.md#ev-locations-by-id)
* [Nearby Locations](../../doc/controllers/locations.md#nearby-locations)
* [Locations Markers](../../doc/controllers/locations.md#locations-markers)


# Get EV Locations

This API provides the list of all Shell Recharge locations. The list includes all Shell Recharge network and all locations available through our roaming partners. The end point provides flexible search criteria in order to get the list of Shell Recharge Network. The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site.

Supported Search Options

* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available
* Based on a specific charging unit ID (EVSE ID)

```ts
async getEVLocations(  requestId: string,
  evseStatus?: GetEVLocationsEvseStatusEnum,
  connectorTypes?: GetEVLocationsConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: GetEVLocationsAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  evseId?: string,
  locationExternalId?: string,
  evseExternalId?: string,
  pageNumber?: number,
  perPage?: number,
  updatedSince?: string,
  country?: string[],
  excludeCountry?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `evseStatus` | [`GetEVLocationsEvseStatusEnum \| undefined`](../../doc/models/get-ev-locations-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`GetEVLocationsConnectorTypesEnum \| undefined`](../../doc/models/get-ev-locations-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with the set of Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`GetEVLocationsAuthorizationMethodsEnum \| undefined`](../../doc/models/get-ev-locations-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker response object |
| `evseId` | `string \| undefined` | Query, Optional | optional Standard EVSE (Electric Vehicle Supply Equipment) Id identifier (ISO-IEC-15118) |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId. (Unique Location externalID provided by Shell Recharge) |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id. (Unique individual EVSE externalID provided by Shell Recharge) |
| `pageNumber` | `number \| undefined` | Query, Optional | Restrict the response list by providing a specific set of page Number. Set perPage parameter also when page Number is used. |
| `perPage` | `number \| undefined` | Query, Optional | Restrict the number of sites in response per page. |
| `updatedSince` | `string \| undefined` | Query, Optional | ZonedDateTime as string |
| `country` | `string[] \| undefined` | Query, Optional | Filter by Locations that are at least in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `excludeCountry` | `string[] \| undefined` | Query, Optional | Filter by Locations that are not in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Response`](../../doc/models/response.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const evseId = 'NL*TNM*E01000401*0';

const country: string[] = [
  'NED'
];

const excludeCountry: string[] = [
  'NED'
];

try {
  const { result, ...httpResponse } = await locationsController.getEVLocations(
  requestId,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  evseId,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  country,
  excludeCountry
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Ev Locations by ID

This API provides the details on a single Shell Recharge location.
The query for a single location is to be made using the Unique Internal identifier used to refer to this Location by Shell Recharge. (Uid from List of locations API)

```ts
async evLocationsByID(  requestId: string,
  id: string,
  providerId?: string,
  since?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `id` | `string` | Template, Required | Unique Uid of the location from List of locations API |
| `providerId` | `string \| undefined` | Query, Optional | The provider id that you wish to see locations and tariffs for |
| `since` | `string \| undefined` | Query, Optional | to get the locations modified after a date |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Response`](../../doc/models/response.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const id = 'id0';

try {
  const { result, ...httpResponse } = await locationsController.evLocationsByID(
  requestId,
  id
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Nearby Locations

This API provides the list of all nearby Shell Recharge locations based on the latitude and longitude provided in the request.
The list includes all Shell Recharge network and all sites available through our roaming partners.
The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site.

Supported Search Options

* Based on latitude and longitude of the location. (Mandatory)
* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available

```ts
async nearbyLocations(  requestId: string,
  latitude: number,
  longitude: number,
  limit?: number,
  locationExternalId?: string,
  evseId?: string,
  evseExternalId?: string,
  operatorName?: string,
  evseStatus?: NearbyLocationsEvseStatusEnum,
  connectorTypes?: NearbyLocationsConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: NearbyLocationsAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  withMaxPower?: boolean,
  country?: string[],
  excludeCountry?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `latitude` | `number` | Query, Required | Latitude to get Shell Recharge Locations nearby |
| `longitude` | `number` | Query, Required | Longitude to get Shell Recharge Locations nearby |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of Locations to retrieve |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId Identifier as given by the Shell Recharge Operator, unique for that Operator |
| `evseId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given Evse Id |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id Identifier of the Evse as given by the Operator, unique for that Operator |
| `operatorName` | `string \| undefined` | Query, Optional | Filter by Locations that have the given operator |
| `evseStatus` | [`NearbyLocationsEvseStatusEnum \| undefined`](../../doc/models/nearby-locations-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`NearbyLocationsConnectorTypesEnum \| undefined`](../../doc/models/nearby-locations-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with these Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`NearbyLocationsAuthorizationMethodsEnum \| undefined`](../../doc/models/nearby-locations-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker object (only for marker type Single ChargePoint) |
| `withMaxPower` | `boolean \| undefined` | Query, Optional | Return maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `country` | `string[] \| undefined` | Query, Optional | Filter by Locations that are at least in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `excludeCountry` | `string[] \| undefined` | Query, Optional | Filter by Locations that are not in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Response`](../../doc/models/response.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const latitude = 65.76;

const longitude = 188.04;

const limit = 25;

const country: string[] = [
  'NED'
];

const excludeCountry: string[] = [
  'NED'
];

try {
  const { result, ...httpResponse } = await locationsController.nearbyLocations(
  requestId,
  latitude,
  longitude,
  limit,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  country,
  excludeCountry
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |


# Locations Markers

This API, when given a set of bounds on the geographical front (East,West, North, South) will return a set of Markers that fall within the requested bounds. The API will automatically group locations at the same position on the map into one Marker.

The API also provide further search options to filter the result set.

* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available

```ts
async locationsMarkers(  requestId: string,
  west: number,
  south: number,
  east: number,
  north: number,
  zoom: string,
  evseStatus?: LocationsMarkersEvseStatusEnum,
  connectorTypes?: LocationsMarkersConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: LocationsMarkersAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  withMaxPower?: boolean,
  locationExternalId?: string,
  evseId?: string,
  evseExternalId?: string,
  operatorName?: string,
  country?: string[],
  excludeCountry?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<SingleLocationMarkerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | RequestId must be unique identifier value that can be used by the consumer to correlate each request /response .<br>Format.<br> Its canonical textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in five groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 hexadecimal characters and 4 hyphens) <br> |
| `west` | `number` | Query, Required | Longitude of the western bound to get the Shell Recharge Locations |
| `south` | `number` | Query, Required | Latitude of the southern bound to get the Shell Recharge Locations |
| `east` | `number` | Query, Required | Longitude of the eastern bound to get the Shell Recharge Locations |
| `north` | `number` | Query, Required | Latitude of the northern bound to get the Shell Recharge Locations |
| `zoom` | `string` | Query, Required | Zoom level to show ex: (1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings) |
| `evseStatus` | [`LocationsMarkersEvseStatusEnum \| undefined`](../../doc/models/locations-markers-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`LocationsMarkersConnectorTypesEnum \| undefined`](../../doc/models/locations-markers-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with the set of Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`LocationsMarkersAuthorizationMethodsEnum \| undefined`](../../doc/models/locations-markers-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker object (only for marker type SingleChargePoint) |
| `withMaxPower` | `boolean \| undefined` | Query, Optional | Return maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId. (Unique Location externalID provided by Shell Recharge) |
| `evseId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given Evse Id |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id Identifier of the Evse as given by the Operator, unique for that Operator |
| `operatorName` | `string \| undefined` | Query, Optional | Filter by Locations that have the given operator |
| `country` | `string[] \| undefined` | Query, Optional | Filter by Locations that are at least in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `excludeCountry` | `string[] \| undefined` | Query, Optional | Filter by Locations that are not in one of the given countries (specified using ISO 3166-1 alpha-3 codes) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleLocationMarkerResponse`](../../doc/models/single-location-marker-response.md)

## Example Usage

```ts
const requestId = '123e4567-e89b-12d3-a456-426614174000';

const west = 152.84;

const south = 13.76;

const east = 16.36;

const north = 73.98;

const zoom = 'zoom0';

const country: string[] = [
  'NED'
];

const excludeCountry: string[] = [
  'NED'
];

try {
  const { result, ...httpResponse } = await locationsController.locationsMarkers(
  requestId,
  west,
  south,
  east,
  north,
  zoom,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  country,
  excludeCountry
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | The request has not been applied because it lacks valid authentication credentials for the target resource. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Location Not Found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | The Request reached maximum allocated rate limit | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal server error | [`InternalServerError`](../../doc/models/internal-server-error.md) |
| 503 | Service unavailable | [`ServiceunavailableError`](../../doc/models/serviceunavailable-error.md) |

