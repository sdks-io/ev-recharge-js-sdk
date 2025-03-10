/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  LocationResponeObject,
  locationResponeObjectSchema,
} from './locationResponeObject';

export interface Response {
  /** requestId is unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. */
  requestId?: string;
  /** status of the API call */
  status?: string;
  /** API Response */
  data?: LocationResponeObject[];
}

export const responseSchema: Schema<Response> = object({
  requestId: ['requestId', optional(string())],
  status: ['status', optional(string())],
  data: ['data', optional(array(lazy(() => locationResponeObjectSchema)))],
});
