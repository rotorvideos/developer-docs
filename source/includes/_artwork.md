# Artwork

## Create Artwork

> **To upload/create artwork for a track, use the following:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/tracks/:id/artwork" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "attributes": {
        "url": "https://example.com/The-Oraganism.png"
      }
    }
  }'

```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "id": "unique-identifier",
      "url": null
    }
  }
}
```

This creates the artwork resource asynchronously. Use this endpoint in combination with the get a track endpoint to
identify when the track is ready to use.

<aside class="notice">
The <code>url</code> will return as <code>null</code> here because this process is asynchronous. The <code>url</code> will be populated when the upload has finished.
</aside>

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/tracks/:id/artwork"`

### URL Parameters

| Parameter | Description                                |
|-----------|--------------------------------------------|
| id        | A unique identifier for the track.         |


### Data Attributes

| Parameter | Description                                |
|-----------|--------------------------------------------|
| url       | A URL that the track can be accessed from. |


## Get Artwork

> **To get the artwork for a track, use the following:**

```shell
curl "https://api.rotorvideos.com/api/partner/v1/tracks/:id/artwork" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "id": "unique-identifier",
      "url": "https://example.com/uploads/artwork/media_file.png"
    }
  }
}
```

This retrieves the artwork for a track.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/tracks/:id/artwork"`

### URL Parameters

| Parameter | Description                                |
|-----------|--------------------------------------------|
| id        | A unique identifier for the track.         |
