/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DataActiveSessionStateEnum
 */
export enum DataActiveSessionStateEnum {
  Started = 'started',
  Stopped = 'stopped',
  Startrequested = 'start-requested',
  Stoprequested = 'stop-requested',
  Failedtostart = 'failed-to-start',
  Failedtostop = 'failed-to-stop',
}

/**
 * Schema for DataActiveSessionStateEnum
 */
export const  dataActiveSessionStateEnumSchema: Schema<DataActiveSessionStateEnum> = stringEnum(DataActiveSessionStateEnum);
