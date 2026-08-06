# Authentication

The Partner API uses two tokens. Your Partner Access Token authorizes your application; a User Access Token authorizes
requests made on behalf of one of your users. Both expire, and neither is issued with an OAuth refresh token, so renewing
one always means repeating the request that produced it.

| Token                | Obtained from                   | Valid for | To renew                                                 |
|----------------------|---------------------------------|-----------|----------------------------------------------------------|
| Partner Access Token | `POST /oauth/token`             | 2 hours   | Repeat the request with your Client ID and Client Secret  |
| User Access Token    | `POST /api/partner/v1/register` | 72 hours  | Repeat the request with the same `remote_user_id`         |

A request made with an expired token is rejected with a `401 Unauthorized`. Treat a `401` as a signal to fetch a new
token and retry the request, rather than as a permanent failure.

<aside class="warning">
Do not store a token indefinitely, and do not hard-code the lifetimes above. Renew from the <code>expires_in</code> value
returned with each token, so that your integration keeps working if the lifetimes change.
</aside>

## Authorize Application

> **Fetch the Application's Oauth Access Token:**

```shell
curl -XPOST "https://api.rotorvideos.com/oauth/token" \
  -H "Authorization: Basic `$(echo -n $client_id:$client_secret | base64)`" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials"
```

> The above command returns JSON structured like this:

```json
{
  "access_token": "abcdef",
  "created_at": 1234567890,
  "token_type": "Bearer",
  "expires_in": 7200,
  "scope": "<your application's scopes>"
}
```

In order to make API requests, you must first authorize your application, using the Oauth Client ID and Client Secret provided by Rotor to your organization.

This request returns your Partner Access Token which can be used to generate a User Access Token for subsequent requests.

`expires_in` is the number of seconds the token remains valid for, counted from `created_at`. Make this request again to
obtain a new one.

### HTTP Request

`POST "https://api.rotorvideos.com/oauth/token"`

### Data Attributes

| Parameter  | Description                                         |
|------------|-----------------------------------------------------|
| grant_type | Only "client_credentials" is valid for this request |

## Register/Fetch User

> **Fetch the User's Oauth Access Token:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/register" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type" : "user",
      "attributes": {
        "remote_user_id": "123456",
        "remote_email": "user@domain.com"
      }
    }
  }'
```

> **Providing optional attributes, in this case additional Partner API credentials:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/register" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type" : "user",
      "attributes": {
        "remote_user_id": "123456",
        "optional_attributes": {
          "api_url": "<identifier>",
          "api_secret_key": "<secret>",
        },
      }
    }
  }'
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "type" : "access_token",
    "attributes": {
      "access_token": "1234567890",
      "expires_in": 259200
    }
  }
}
```

Register a user for the Partner API; if they exist in our system, an access token is returned. If not, we generate a new
account, then return an access token for them.

`expires_in` is the number of seconds the token remains valid for, counted from the moment it was issued. Make this
request again with the same `remote_user_id` to obtain a new one.

<aside class="notice">
Re-registering an existing user is safe and does not create a duplicate account: <code>register</code> matches on
<code>remote_user_id</code> and returns a fresh <code>access_token</code> for the user you already have.
</aside>

Depending on the scope of the integration agreed with Rotor, you may need to pass additional optional attributes. These additional attributes will be stored with the Rotor user and may be used for _eg_ reciprocal API access

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/register"`

### Data Attributes

| Parameter           | Description
|---------------------|-------------------------------------------------------------|
| remote_user_id      | A unique identifier (on the partner platform) for the user.
| remote_email        | An email for the user.
| optional_attributes | (_Optional_) For some Partner integrations, additional information may need to be provided. These can be provided nested within this attribute. Unrecognised optional attributes will be ignored.
