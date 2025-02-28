/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { createAuthProviderFromConfig } from './authProvider';
import { ClientCredentialsAuthManager } from './clientCredentialsAuthManager';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
import { HttpClient } from './clientAdapter';

const USER_AGENT = 'APIMATIC 3.0';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  public clientCredentialsAuthManager: ClientCredentialsAuthManager;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    const clonedConfig = {
      ...this._config,
      clientCredentialsAuthCredentials: this._config
        .clientCredentialsAuthCredentials || {
        oAuthClientId: this._config.oAuthClientId || '',
        oAuthClientSecret: this._config.oAuthClientSecret || '',
        oAuthToken: this._config.oAuthToken,
      },
    };

    this._requestBuilderFactory = createRequestHandlerFactory(
      (server) => getBaseUri(server, this._config),
      createAuthProviderFromConfig(
        clonedConfig,
        () => this.clientCredentialsAuthManager
      ),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [withErrorHandlers, withUserAgent, withAuthenticationByDefault],
      this._retryConfig
    );
    this.clientCredentialsAuthManager = new ClientCredentialsAuthManager(
      clonedConfig.clientCredentialsAuthCredentials,
      this
    );
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(server: Server = 'default', config: Configuration): string {
  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://api.shell.com/ev/v1';
    }
    if (server === 'access token server') {
      return 'https://api.shell.com/v2/oauth';
    }
  }
  if (config.environment === Environment.Environment2) {
    if (server === 'default') {
      return 'https://api-test.shell.com/ev/v1';
    }
    if (server === 'access token server') {
      return 'https://api.shell.com/v2/oauth';
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach((c) => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(rb: SdkRequestBuilder) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate([{ bearerAuth: true }]);
}
