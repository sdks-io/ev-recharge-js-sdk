
# Getting Started with Shell EV

## Introduction

This API Product provides the list of all Shell Recharge locations. The list includes all Shell Recharge network and all locations available through our roaming partners.

Supported Functions

* Get the list of all the locations and its details.
* Get the details of a particular location.
* Get the list of locations nearby using the latitude and longitude.
* Get the list of locations for a given set of bounds with different zoom levels.

The Charging endpoints provides control to start, stop and get status of the charging session.

Supported Functions

* Start a charging session\n
* Stop a charging session \n
* Retrieve the status of a charging session \n
* Retrieve the list of all active sessions for a card

Go to the Shell Developer Portal: [https://developer.shell.com](https://developer.shell.com)

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install ev-recharge-sdk@2.2.0
```

For additional package details, see the [Npm page for the ev-recharge-sdk@2.2.0 npm](https://www.npmjs.com/package/ev-recharge-sdk/v/2.2.0).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/README.md#environments) | The API environment. <br> **Default: `Environment.SIT`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment } from 'ev-recharge-sdk';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.SIT,
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'ev-recharge-sdk';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'ev-recharge-sdk';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| SIT | **Default** |
| Production | - |

## Authorization

This API uses the following authentication schemes.

* [`BearerAuth (OAuth 2 Client Credentials Grant)`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Locations](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/controllers/locations.md)
* [Charging](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/controllers/charging.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/retry-configuration.md)
* [ProxySettings](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/proxy-settings.md)
* [Configuration-Based Client Initialization](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/environment-based-client-initialization.md)

### HTTP

* [HttpRequest](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/2.2.0/doc/api-error.md)

