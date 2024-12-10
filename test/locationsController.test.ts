/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { LocationsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('LocationsController', () => {
  let controller : LocationsController;

  beforeAll(() => {
    controller = new LocationsController(testClient);
  });

  it('should Test getEVLocations', async () => {
    const requestId = '123e4567-e89b-12d3-a456-426614174000';

    const evseId = 'NL*TNM*E01000401*0';

    const country: string[] = [
      'NED'
    ];

    const excludeCountry: string[] = [
      'NED'
    ];

    const response = await makeApiCall(
      () => controller.getEVLocations(
        requestId,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        evseId,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        country,
        excludeCountry
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
