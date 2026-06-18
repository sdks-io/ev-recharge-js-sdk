
# O Auth Token

OAuth 2 Authorization endpoint response

## Structure

`OAuthToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string` | Required | Access token |
| `tokenType` | `string` | Required | Type of access token |
| `expiresIn` | `bigint \| undefined` | Optional | Time in seconds before the access token expires |
| `scope` | `string \| undefined` | Optional | List of scopes granted<br>This is a space-delimited list of strings. |
| `expiry` | `bigint \| undefined` | Optional | Time of token expiry as unix timestamp (UTC) |
| `refreshToken` | `string \| undefined` | Optional | Refresh token<br>Used to get a new access token when it expires. |

## Example

```ts
import { OAuthToken } from 'ev-recharge-sdk';

const oAuthToken: OAuthToken = {
  accessToken: 'access_token2',
  tokenType: 'token_type2',
  expiresIn: BigInt(84),
  scope: 'scope8',
  expiry: BigInt(78),
  refreshToken: 'refresh_token4',
};
```

