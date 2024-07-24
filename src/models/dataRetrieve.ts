/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  ChargeRetrieveState,
  chargeRetrieveStateSchema,
} from './chargeRetrieveState';

export interface DataRetrieve {
  /** Id of the session */
  id?: string;
  /** Id of the user that started the session */
  userId?: string;
  /** Id of the evse that the user is charging */
  emaId?: string;
  /** Ema-id of the charge token that is used */
  evseId?: string;
  /** Last updated date */
  lastUpdated?: string;
  /** When the session is started */
  startedAt?: string;
  /** When the session is stopped */
  stoppedAt?: string | null;
  sessionState?: ChargeRetrieveState;
}

export const dataRetrieveSchema: Schema<DataRetrieve> = object({
  id: ['id', optional(string())],
  userId: ['userId', optional(string())],
  emaId: ['emaId', optional(string())],
  evseId: ['evseId', optional(string())],
  lastUpdated: ['lastUpdated', optional(string())],
  startedAt: ['startedAt', optional(string())],
  stoppedAt: ['stoppedAt', optional(nullable(string()))],
  sessionState: [
    'sessionState',
    optional(lazy(() => chargeRetrieveStateSchema)),
  ],
});
