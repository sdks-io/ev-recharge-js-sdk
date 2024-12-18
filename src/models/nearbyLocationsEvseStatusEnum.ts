/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for NearbyLocationsEvseStatusEnum
 */
export enum NearbyLocationsEvseStatusEnum {
  Available = 'Available',
  Occupied = 'Occupied',
  Unavailable = 'Unavailable',
  Unknown = 'Unknown',
}

/**
 * Schema for NearbyLocationsEvseStatusEnum
 */
export const nearbyLocationsEvseStatusEnumSchema: Schema<NearbyLocationsEvseStatusEnum> = stringEnum(
  NearbyLocationsEvseStatusEnum
);
