/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EnvEnum
 */
export enum EnvEnum {
  EnumApitestshellcom = 'api-test.shell.com',
  EnumApishellcom = 'api.shell.com',
}

/**
 * Schema for EnvEnum
 */
export const  envEnumSchema: Schema<EnvEnum> = stringEnum(EnvEnum);