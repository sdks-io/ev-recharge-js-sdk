/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

/** Coordinates of the Shell Recharge Site Location */
export interface Coordinates {
  /** Latitude of the Coordinate */
  latitude?: number;
  /** Longitude of the Coordinate */
  longitude?: number;
}

export const coordinatesSchema: Schema<Coordinates> = object({
  latitude: ['latitude', optional(number())],
  longitude: ['longitude', optional(number())],
});
