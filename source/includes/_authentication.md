# Authentication

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
  "created_at": "1234567890",
  "token_type": "Bearer",
  "expires_in": "1234567890"
}
```

In order to make API requests, you must first authorize your application, using the Oauth Client ID and Client Secret provided by Rotor to your organization.

This request returns your Partner Access Token which can be used to generate a User Access Token for subsequent requests.

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
        "remote_user_id": "123456"
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
      "access_token": "1234567890"
    }
  }
}
```

> **Providing optional attributes, in this case additonal Partner API credentials**

```json
{
  "data": {
    "type" : "access_token",
    "attributes": {
      "access_token": "1234567890",
      "optional_attributes": {
          "api_key_id": "<identifier>",
          "secret_key": "<secret>"
      }
    }
  }
}
```

Register a user for the Partner API; if they exist in our system, an access token is returned. If not, we generate a new
account, then return an access token for them.

Depending on the scope of the integration agreed with Rotor, you may need to pass additional optional attributes. These additional attributes will be stored with the Rotor user and may be used for _eg_ reciprocal API access

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/register"`

### Data Attributes

| Parameter           | Description
|---------------------|-------------------------------------------------------------|
| remote_user_id      | A unique identifier (on the partner platform) for the user.
| optional_attributes | (_Optional_) For some Partner integrations, additional information may need to be provided. These can be provided nested within this attribute. Unrecognised optional attributes will be ignored.
