/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { HTTP401ErrorResponseError } from '../errors/hTTP401ErrorResponseError';
import {
  M400ErrorResponseError1Error,
} from '../errors/m400ErrorResponseError1Error';
import {
  M401ErrorResponseError1Error,
} from '../errors/m401ErrorResponseError1Error';
import {
  M404ErrorResponseError1Error,
} from '../errors/m404ErrorResponseError1Error';
import {
  M405ErrorResponseError1Error,
} from '../errors/m405ErrorResponseError1Error';
import {
  M429ErrorResponseError1Error,
} from '../errors/m429ErrorResponseError1Error';
import {
  M500ErrorResponseError1Error,
} from '../errors/m500ErrorResponseError1Error';
import {
  M503ErrorResponseError1Error,
} from '../errors/m503ErrorResponseError1Error';
import {
  ActiveResponse200Json,
  activeResponse200JsonSchema,
} from '../models/activeResponse200Json';
import {
  ChargesessionStartBody,
  chargesessionStartBodySchema,
} from '../models/chargesessionStartBody';
import {
  GetChargeSessionRetrieveResponse200Json,
  getChargeSessionRetrieveResponse200JsonSchema,
} from '../models/getChargeSessionRetrieveResponse200Json';
import {
  InlineResponse202,
  inlineResponse202Schema,
} from '../models/inlineResponse202';
import {
  InlineResponse2021,
  inlineResponse2021Schema,
} from '../models/inlineResponse2021';
import {
  StopChargeSessionRequestBodyJson,
  stopChargeSessionRequestBodyJsonSchema,
} from '../models/stopChargeSessionRequestBodyJson';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ChargingController extends BaseController {
  /**
   * This API initiates to start a session on a EVSE (Electric Vehicle Supply Equipement). When the EV
   * Charge Card number and the unique EVSE ID on the location is provided, the session is initiated.
   *
   * Please note that this is an asynchronous request, the request will be passed on to the
   * operator/platform to be processed further.
   *
   *
   * @param requestId    A unique request id in GUID format. The value is written to
   *                                                      the Shell API Platform audit log for end to end traceability
   *                                                      of a request.
   * @param body
   * @return Response from the API call
   */
  async startChargeSession(
    requestId: string,
    body?: ChargesessionStartBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<InlineResponse202>> {
    const req = this.createRequest('POST', '/ev/v1/charge-session/start');
    const mapped = req.prepareArgs({
      requestId: [requestId, string()],
      body: [body, optional(chargesessionStartBodySchema)],
    });
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, M400ErrorResponseError1Error, 'Bad Request\n');
    req.throwOn(401, HTTP401ErrorResponseError, 'Unauthorized');
    req.throwOn(404, M404ErrorResponseError1Error, 'Invalid charge token with given EmaId was not found.\n\nBackend HTTP 410 should be transformed to 404.');
    req.throwOn(405, M405ErrorResponseError1Error, 'Method Not Allowed');
    req.throwOn(429, M429ErrorResponseError1Error, 'Too Many Requests');
    req.throwOn(500, M500ErrorResponseError1Error, 'Internal Server Error');
    req.throwOn(503, M503ErrorResponseError1Error, 'Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(inlineResponse202Schema, requestOptions);
  }

  /**
   * This API stops a session by providing the session ID which was retrieved when starting the session.
   * HTTP 202 response will be returned if the request is accepted. Once the session is stopped the
   * response will contain the DateTime on which it is stopped.      operationId: Stop
   *
   *
   * @param requestId    A unique request id in GUID format. The value is
   *                                                                written to the Shell API Platform audit log for end
   *                                                                to end traceability of a request.
   * @param uuid         Unique session ID which was generated to activate
   *                                                                a charging session.
   * @param body
   * @return Response from the API call
   */
  async stopChargeSession(
    requestId: string,
    uuid: string,
    body?: StopChargeSessionRequestBodyJson,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<InlineResponse2021>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      requestId: [requestId, string()],
      uuid: [uuid, string()],
      body: [body, optional(stopChargeSessionRequestBodyJsonSchema)],
    });
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/ev/v1/charge-session/stop/${mapped.uuid}`;
    req.throwOn(400, M400ErrorResponseError1Error, 'Bad Request\n');
    req.throwOn(401, M401ErrorResponseError1Error, 'Unauthorized');
    req.throwOn(404, M404ErrorResponseError1Error, 'Session not found or Session has already been stopped. Map 410 Error message into 404.');
    req.throwOn(405, M405ErrorResponseError1Error, 'Method Not Allowed');
    req.throwOn(429, M429ErrorResponseError1Error, 'Too Many Requests');
    req.throwOn(500, M500ErrorResponseError1Error, 'Internal Server Error');
    req.throwOn(503, M503ErrorResponseError1Error, 'Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed\n');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(inlineResponse2021Schema, requestOptions);
  }

  /**
   * This API retrieves the status and details of the session which was started by the user. The session
   * ID generated earlier needs to be passed in this API in order to retrieve the status.
   *
   *
   * @param requestId A unique request id in GUID format. The value is written to the Shell API Platform
   *                            audit log for end to end traceability of a request.
   * @param sessionId Session Id is to be fetched
   * @param uuid      Unique session ID which was generated to activate a charging session.
   * @return Response from the API call
   */
  async getChargeSessionRetrieve(
    requestId: string,
    sessionId: string,
    uuid: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeSessionRetrieveResponse200Json>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      requestId: [requestId, string()],
      sessionId: [sessionId, string()],
      uuid: [uuid, string()],
    });
    req.header('RequestId', mapped.requestId);
    req.query('SessionId', mapped.sessionId);
    req.appendTemplatePath`/ev/v1/charge-session/retrieve/${mapped.uuid}`;
    req.throwOn(400, M400ErrorResponseError1Error, 'Bad Request');
    req.throwOn(401, M401ErrorResponseError1Error, 'Unauthorized');
    req.throwOn(404, M404ErrorResponseError1Error, 'Not Found');
    req.throwOn(405, M405ErrorResponseError1Error, 'Method Not Allowed');
    req.throwOn(429, M429ErrorResponseError1Error, 'Too Many Requests');
    req.throwOn(500, M500ErrorResponseError1Error, 'Internal Server Error');
    req.throwOn(503, M503ErrorResponseError1Error, 'Service Unavailable');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(
      getChargeSessionRetrieveResponse200JsonSchema,
      requestOptions
    );
  }

  /**
   * This API retrieves the list of active sessions for a given set of EMAIds
   *
   * @param emaId     Emobility Account Identifier(Ema-ID)
   * @param requestId A unique request id in GUID format. The value is written to the Shell API Platform
   *                            audit log for end to end traceability of a request.
   * @return Response from the API call
   */
  async active(
    emaId: string,
    requestId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ActiveResponse200Json>> {
    const req = this.createRequest('GET', '/ev/v1/charge-session/active');
    const mapped = req.prepareArgs({
      emaId: [emaId, string()],
      requestId: [requestId, string()],
    });
    req.header('RequestId', mapped.requestId);
    req.query('EmaId', mapped.emaId);
    req.throwOn(400, M400ErrorResponseError1Error, 'Bad Request\n');
    req.throwOn(401, M401ErrorResponseError1Error, 'Unauthorized');
    req.throwOn(404, M404ErrorResponseError1Error, 'Session not found or Session has already been stopped. Map 410 Error message into 404.');
    req.throwOn(405, M405ErrorResponseError1Error, 'Method Not Allowed');
    req.throwOn(429, M429ErrorResponseError1Error, 'Too Many Requests');
    req.throwOn(500, M500ErrorResponseError1Error, 'Internal Server Error');
    req.throwOn(503, M503ErrorResponseError1Error, 'Returned when a connectivity failure is encountered like DB connection failed, endpoint failed etc or when max number of retries are completed\n');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(activeResponse200JsonSchema, requestOptions);
  }
}