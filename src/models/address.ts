/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Address of the Shell Recharge Location */
export interface Address {
  /** Street Name and Number of the Shell Recharge Location */
  streetAndNumber?: string;
  /** Postal Code of the Shell Recharge Location */
  postalCode?: string;
  /** City name of the Shell Recharge Location */
  city?: string;
  /** ISO 3166 Alpha-2 Country Code of the Shell Recharge Location */
  country?: string;
}

export const addressSchema: Schema<Address> = object({
  streetAndNumber: ['streetAndNumber', optional(string())],
  postalCode: ['postalCode', optional(string())],
  city: ['city', optional(string())],
  country: ['country', optional(string())],
});
