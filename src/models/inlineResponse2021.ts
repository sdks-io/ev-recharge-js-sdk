/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import {
  GetChargeSessionRetrieveResponse200JsonStatusEnum,
  getChargeSessionRetrieveResponse200JsonStatusEnumSchema,
} from './getChargeSessionRetrieveResponse200JsonStatusEnum';

export interface InlineResponse2021 {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  requestId: string;
  status: GetChargeSessionRetrieveResponse200JsonStatusEnum;
}

export const inlineResponse2021Schema: Schema<InlineResponse2021> = object({
  requestId: ['requestId', string()],
  status: ['status', getChargeSessionRetrieveResponse200JsonStatusEnumSchema],
});
