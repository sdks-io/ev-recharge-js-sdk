/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ConnectorVOConnectorTypeEnum,
  connectorVOConnectorTypeEnumSchema,
} from './connectorVOConnectorTypeEnum';
import {
  ConnectorVOUpdatedByEnum,
  connectorVOUpdatedByEnumSchema,
} from './connectorVOUpdatedByEnum';
import {
  ElectricalProperties,
  electricalPropertiesSchema,
} from './electricalProperties';
import { Tariff, tariffSchema } from './tariff';

/** An EVSE can have one or many Connectors. Each Connector will normally have a different socket / cable and only one can be used to charge at a time. */
export interface ConnectorVO {
  /** Internal identifier used to refer to this Connector */
  uid?: number;
  /** Identifier of the Evse as given by the Operator, unique for the containing EVSE' */
  externalId?: string;
  connectorType?: ConnectorVOConnectorTypeEnum;
  /** Electrical Properties of the Connector */
  electricalProperties?: ElectricalProperties;
  /** Indicates whether Connector has a fixed cable attached. False by default (not sent in this case) */
  fixedCable?: boolean;
  tariff?: Tariff;
  /** ISO8601-compliant UTC datetime of the last update of the Connector’s data */
  updated?: string;
  updatedBy?: ConnectorVOUpdatedByEnum;
  /** optional  ISO8601-compliant UTC deletion timestamp of the connector */
  deleted?: string;
}

export const connectorVOSchema: Schema<ConnectorVO> = object({
  uid: ['uid', optional(number())],
  externalId: ['externalId', optional(string())],
  connectorType: [
    'connectorType',
    optional(connectorVOConnectorTypeEnumSchema),
  ],
  electricalProperties: [
    'electricalProperties',
    optional(lazy(() => electricalPropertiesSchema)),
  ],
  fixedCable: ['fixedCable', optional(boolean())],
  tariff: ['tariff', optional(lazy(() => tariffSchema))],
  updated: ['updated', optional(string())],
  updatedBy: ['updatedBy', optional(connectorVOUpdatedByEnumSchema)],
  deleted: ['deleted', optional(string())],
});
