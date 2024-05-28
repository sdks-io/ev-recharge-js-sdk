/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface StopChargeSessionRequestBodyJson {
  /** Session Id is to be fetched */
  sesssionId: string;
}

export const stopChargeSessionRequestBodyJsonSchema: Schema<StopChargeSessionRequestBodyJson> = object(
  { sesssionId: ['SesssionId', string()] }
);