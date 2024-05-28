# Locations

APIs for Shell Recharge Locations

```ts
const locationsController = new LocationsController(client);
```

## Class Name

`LocationsController`

## Methods

* [Get Locations List](../../doc/controllers/locations.md#get-locations-list)
* [Get Location by Id](../../doc/controllers/locations.md#get-location-by-id)
* [Get Nearby Locations](../../doc/controllers/locations.md#get-nearby-locations)
* [Get Markers List](../../doc/controllers/locations.md#get-markers-list)


# Get Locations List

This API provides the list of all Shell Recharge locations. The list includes all Shell Recharge network and all locations available through our roaming partners.The end point provides flexible search criteria in order to get the list of Shell Recharge Network. The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site.

Supported Search Options

* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available
* Based on a specific charging unit ID (EVSE ID)

```ts
async getLocationsList(
  requestId: string,
  evseStatus?: GetLocationsListEvseStatusEnum,
  connectorTypes?: GetLocationsListConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: GetLocationsListAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  evseId?: string,
  locationExternalId?: string,
  evseExternalId?: string,
  pageNumber?: number,
  perPage?: number,
  updatedSince?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationResponeObject[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `evseStatus` | [`GetLocationsListEvseStatusEnum \| undefined`](../../doc/models/get-locations-list-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`GetLocationsListConnectorTypesEnum \| undefined`](../../doc/models/get-locations-list-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with the set of Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`GetLocationsListAuthorizationMethodsEnum \| undefined`](../../doc/models/get-locations-list-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker response object |
| `evseId` | `string \| undefined` | Query, Optional | optional Standard EVSE (Electric Vehicle Supply Equipment) Id identifier (ISO-IEC-15118) |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId. (Unique Location externalID provided by Shell Recharge) |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id. (Unique individual EVSE externalID provided by Shell Recharge) |
| `pageNumber` | `number \| undefined` | Query, Optional | Restrict the response list by providing a specific set of page Number. Set perPage parameter also when pageNumber is used. |
| `perPage` | `number \| undefined` | Query, Optional | Restrict the number of sites in reposne per page. |
| `updatedSince` | `string \| undefined` | Query, Optional | ZonedDateTime as string |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationResponeObject[]`](../../doc/models/location-respone-object.md)

## Example Usage

```ts
const requestId = 'RequestId8';

const evseId = 'NL*TNM*E01000401*0';

try {
  const { result, ...httpResponse } = await locationsController.getLocationsList(
  requestId,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  evseId
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


# Get Location by Id

This API provides the details on a single Shell Recharge location.
The query for a single location is to be made using the Unique Internal identifier used to refer to this Location by Shell Recharge. (Uid from List of locations API)

```ts
async getLocationById(
  requestId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationResponeObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `id` | `string` | Template, Required | Unique Uid of the location from List of locations API |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationResponeObject`](../../doc/models/location-respone-object.md)

## Example Usage

```ts
const requestId = 'RequestId8';

const id = 'id0';

try {
  const { result, ...httpResponse } = await locationsController.getLocationById(
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


# Get Nearby Locations

This API provides the list of all near by Shell Recharge locations based on the latitude and longitude provided in the request.
The list includes all Shell Recharge network and all sites available through our roaming partners.
The end point provides the details such as the exact location/address of the site along with the up-to-date status information of all the charging units in the site.

Supported Search Options

* Based on latitude and longitude of the location. (Mandatory)
* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available

```ts
async getNearbyLocations(
  requestId: string,
  latitude: number,
  longitude: number,
  limit?: number,
  locationExternalId?: string,
  evseId?: string,
  evseExternalId?: string,
  operatorName?: string,
  evseStatus?: GetNearbyLocationsEvseStatusEnum,
  connectorTypes?: GetNearbyLocationsConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: GetNearbyLocationsAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  withMaxPower?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationResponeObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `latitude` | `number` | Query, Required | Latitude to get Shell Recharge Locations nearby |
| `longitude` | `number` | Query, Required | Longitude to get Shell Recharge Locations nearby |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of Locations to retrieve |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId Identifier as given by the Shell Recharge Operator, unique for that Operator |
| `evseId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given Evse Id |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id Identifier of the Evse as given by the Operator, unique for that Operator |
| `operatorName` | `string \| undefined` | Query, Optional | Filter by Locations that have the given operator |
| `evseStatus` | [`GetNearbyLocationsEvseStatusEnum \| undefined`](../../doc/models/get-nearby-locations-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`GetNearbyLocationsConnectorTypesEnum \| undefined`](../../doc/models/get-nearby-locations-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with these Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`GetNearbyLocationsAuthorizationMethodsEnum \| undefined`](../../doc/models/get-nearby-locations-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker object (only for marker type SingleChargePoint) |
| `withMaxPower` | `boolean \| undefined` | Query, Optional | Return maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationResponeObject`](../../doc/models/location-respone-object.md)

## Example Usage

```ts
const requestId = 'RequestId8';

const latitude = 65.76;

const longitude = 188.04;

const limit = 25;

try {
  const { result, ...httpResponse } = await locationsController.getNearbyLocations(
  requestId,
  latitude,
  longitude,
  limit
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


# Get Markers List

This API, when given a set of bounds on the geographical front (East,West, North, South) will return a set of Markers that fall within the requested bounds. The API will automatically group locations at the same position on the map into one Marker.

The API also provide further search options to filter the result set.

* Based on status of the Charging units. Eg : Available or Occupied
* Based on available connector types.
* Based on minimum Power output (in kW) available

```ts
async getMarkersList(
  requestId: string,
  west: number,
  south: number,
  east: number,
  north: number,
  zoom: string,
  evseStatus?: GetMarkersListEvseStatusEnum,
  connectorTypes?: GetMarkersListConnectorTypesEnum,
  connectorMinPower?: number,
  authorizationMethods?: GetMarkersListAuthorizationMethodsEnum,
  withOperatorName?: boolean,
  withMaxPower?: boolean,
  locationExternalId?: string,
  evseId?: string,
  evseExternalId?: string,
  operatorName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarkersResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | A unique request id in GUID format. The value is written to the Shell API Platform audit log for end to end traceability of a request. |
| `west` | `number` | Query, Required | Longitude of the western bound to get the Shell Recharge Locations |
| `south` | `number` | Query, Required | Latitude of the southern bound to get the Shell Recharge Locations |
| `east` | `number` | Query, Required | Longitude of the eastern bound to get the Shell Recharge Locations |
| `north` | `number` | Query, Required | Latitude of the northern bound to get the Shell Recharge Locations |
| `zoom` | `string` | Query, Required | Zoom level to show ex: (1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings) |
| `evseStatus` | [`GetMarkersListEvseStatusEnum \| undefined`](../../doc/models/get-markers-list-evse-status-enum.md) | Query, Optional | Filter by Locations that have the given status |
| `connectorTypes` | [`GetMarkersListConnectorTypesEnum \| undefined`](../../doc/models/get-markers-list-connector-types-enum.md) | Query, Optional | Filter by Locations that have Connectors with the set of Connector Types |
| `connectorMinPower` | `number \| undefined` | Query, Optional | Filter by Locations that have a Connector with at least this power output (in kW) |
| `authorizationMethods` | [`GetMarkersListAuthorizationMethodsEnum \| undefined`](../../doc/models/get-markers-list-authorization-methods-enum.md) | Query, Optional | Filter by Locations that support the given Authorization Methods |
| `withOperatorName` | `boolean \| undefined` | Query, Optional | Return operator name in marker object (only for marker type SingleChargePoint) |
| `withMaxPower` | `boolean \| undefined` | Query, Optional | Return maximum power in kW across all locations grouped in this marker (disregarding availability) |
| `locationExternalId` | `string \| undefined` | Query, Optional | Filter by Locations with the given externalId. (Unique Location externalID provided by Shell Recharge) |
| `evseId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given Evse Id |
| `evseExternalId` | `string \| undefined` | Query, Optional | Filter by Locations that have an Evse with the given External Id Identifier of the Evse as given by the Operator, unique for that Operator |
| `operatorName` | `string \| undefined` | Query, Optional | Filter by Locations that have the given operator |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarkersResponse[]`](../../doc/models/containers/markers-response.md)

## Example Usage

```ts
const requestId = 'RequestId8';

const west = 152.84;

const south = 13.76;

const east = 16.36;

const north = 73.98;

const zoom = 'zoom0';

try {
  const { result, ...httpResponse } = await locationsController.getMarkersList(
  requestId,
  west,
  south,
  east,
  north,
  zoom
);
  if (MarkersResponse.isSingleLocationMarker(result)) {
      // Use the result narrowed down to SingleLocationMarker type.
  } else if (MarkersResponse.isMultiLocationMarker(result)) {
      // Use the result narrowed down to MultiLocationMarker type.
  } else {
      // result is narrowed down to type 'never'.
  }
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

