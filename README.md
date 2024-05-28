
# Getting Started with Shell EV

## Introduction

This API Product provides the option to manage charging at all public Shell Recharge locations. The end points provides control to start, stop and get status of the charging session.

Supported Function

* Start a charging session
* Stop a charging session
* Retrieve the status of a charging session
* Retrieve the list of all active sessions for a card   termsOfService: 'https://developer.shell.com/terms-of-use'

Go to the Shell Developer Portal: [https://developer.shell.com](https://developer.shell.com)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install ev-recharge-sdk@1.0.0
```

For additional package details, see the [Npm page for the ev-recharge-sdk@1.0.0 npm](https://www.npmjs.com/package/ev-recharge-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `env` | `EnvEnum` | This variable specifies the type of environment. Environments:<br><br>* `api` - Production<br>* `api-test` - UAT<br>*Default*: `EnvEnum.EnumApitestshellcom` |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `clientCredentialsAuthCredentials` | [`ClientCredentialsAuthCredentials`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Authorization

This API uses the following authentication schemes.

* [`BearerAuth (OAuth 2 Client Credentials Grant)`](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md)

## List of APIs

* [O Auth Authorization](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/controllers/o-auth-authorization.md)
* [Charging](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/controllers/charging.md)
* [Locations](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/controllers/locations.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/ev-recharge-js-sdk/tree/1.0.0/doc/api-error.md)

