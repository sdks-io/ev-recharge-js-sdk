/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  M400ErrorResponseError,
  m400ErrorResponseErrorSchema,
} from './m400ErrorResponseError';

/** Bad Request */
export interface M400ErrorResponse {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  requestId: string;
  /** Indicates overall status of the request */
  status: string;
  errors?: M400ErrorResponseError[];
}

export const m400ErrorResponseSchema: Schema<M400ErrorResponse> = object({
  requestId: ['RequestId', string()],
  status: ['Status', string()],
  errors: ['Errors', optional(array(lazy(() => m400ErrorResponseErrorSchema)))],
});
