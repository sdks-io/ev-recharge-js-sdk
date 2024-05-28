/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  M500ErrorResponseError,
  m500ErrorResponseErrorSchema,
} from './m500ErrorResponseError';

export interface M500ErrorResponse {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  requestId: string;
  /** Indicates overall status of the request */
  status: string;
  errors?: M500ErrorResponseError[];
}

export const m500ErrorResponseSchema: Schema<M500ErrorResponse> = object({
  requestId: ['RequestId', string()],
  status: ['Status', string()],
  errors: ['Errors', optional(array(lazy(() => m500ErrorResponseErrorSchema)))],
});