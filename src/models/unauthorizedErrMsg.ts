/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface UnauthorizedErrMsg {
  /** Error code */
  code?: string;
  /** Error desctiption in English */
  message?: string;
  /** Technical details of the error message, the example which is given in the sample payload is one of the scenarios. actual response will vary based on the technical nature */
  description?: string;
  details?: string[];
}

export const unauthorizedErrMsgSchema: Schema<UnauthorizedErrMsg> = object({
  code: ['code', optional(string())],
  message: ['message', optional(string())],
  description: ['description', optional(string())],
  details: ['details', optional(array(string()))],
});