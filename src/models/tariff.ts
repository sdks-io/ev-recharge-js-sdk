/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import {
  TariffVOUpdatedByEnum,
  tariffVOUpdatedByEnumSchema,
} from './tariffVOUpdatedByEnum';

export interface Tariff {
  /** Tariff to start a charging session */
  startFee?: number;
  /** Tariff per minute of charging time */
  perMinute?: number;
  /** Tariff per kWh of energy consumed */
  perKWh?: number;
  /** ISO 4217 Currency Code of the local currency. */
  currency?: string;
  /** ISO8601-compliant UTC datetime of the last update of the Tariff */
  updated?: string;
  updatedBy?: TariffVOUpdatedByEnum;
  /** Tariff structure that this tariff belongs to, typically Default unless specific tariff is defined for provider */
  structure?: string;
}

export const tariffSchema: Schema<Tariff> = object({
  startFee: ['startFee', optional(number())],
  perMinute: ['perMinute', optional(number())],
  perKWh: ['perKWh', optional(number())],
  currency: ['currency', optional(string())],
  updated: ['updated', optional(string())],
  updatedBy: ['updatedBy', optional(tariffVOUpdatedByEnumSchema)],
  structure: ['structure', optional(string())],
});
