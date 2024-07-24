/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GetEVLocationsEvseStatusEnum
 */
export enum GetEVLocationsEvseStatusEnum {
  Available = 'Available',
  Occupied = 'Occupied',
  Unavailable = 'Unavailable',
  Unknown = 'Unknown',
}

/**
 * Schema for GetEVLocationsEvseStatusEnum
 */
export const getEVLocationsEvseStatusEnumSchema: Schema<GetEVLocationsEvseStatusEnum> = stringEnum(
  GetEVLocationsEvseStatusEnum
);