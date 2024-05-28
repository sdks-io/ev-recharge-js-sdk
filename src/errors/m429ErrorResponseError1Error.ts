/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { M429ErrorResponseError } from '../models/m429ErrorResponseError';

/**
 * Creates an instance of M429ErrorResponseError1
 */
interface M429ErrorResponseError1 {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  RequestId: string;
  /** Indicates overall status of the request */
  Status: string;
  Errors?: M429ErrorResponseError[];
}

export class M429ErrorResponseError1Error extends ApiError<M429ErrorResponseError1> {}