# Authentication

## Access Token

Register a user for the Partner API; if they exist in our system, an access token is returned. If not, we generate a new account, then return an access token for them.

> To get an access token use the following:

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/register" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type" : "user",
      "attributes": {
        "user_uid": "123456"
      }
    }
  }'
```

> The above command returns JSON structured like this:

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

### Data Attributes

Parameter | Description
--------- | -----------
user_uid | A unique identifier (on the partner platform) for the user.
