/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  M503ErrorResponseError,
  m503ErrorResponseErrorSchema,
} from './m503ErrorResponseError';

export interface M503ErrorResponse {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  requestId: string;
  /** Indicates overall status of the request */
  status: string;
  errors?: M503ErrorResponseError[];
}

export const m503ErrorResponseSchema: Schema<M503ErrorResponse> = object({
  requestId: ['RequestId', string()],
  status: ['Status', string()],
  errors: ['Errors', optional(array(lazy(() => m503ErrorResponseErrorSchema)))],
});
