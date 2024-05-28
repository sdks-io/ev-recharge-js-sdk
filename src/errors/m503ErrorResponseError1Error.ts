/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { M503ErrorResponseError } from '../models/m503ErrorResponseError';

/**
 * Creates an instance of M503ErrorResponseError1
 */
interface M503ErrorResponseError1 {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  RequestId: string;
  /** Indicates overall status of the request */
  Status: string;
  Errors?: M503ErrorResponseError[];
}

export class M503ErrorResponseError1Error extends ApiError<M503ErrorResponseError1> {}
