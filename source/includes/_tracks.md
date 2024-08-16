# Tracks

## Create Track

> **To upload/create a track, use the following:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/tracks" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "attributes": {
        "id": "unique-identifier",
        "name": "The Organism",
        "url": "https://example.com/The-Oraganism.mp3"
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
      "name": "The Organism",
      "url": null
    }
  }
}
```

This creates a new track asynchronously. Use this endpoint in combination with
the get a track endpoint to identify when the track is ready to use.

<aside class="notice">
The <code>url</code> will return as <code>null</code> here because this process is asynchronous. The <code>url</code> will be populated when the upload has finished.
</aside>

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/tracks"`


### Data Attributes

| Parameter | Description                                |
|-----------|--------------------------------------------|
| id        | A unique identifier for the track.         |
| name      | The display name for the track.            |
| url       | A URL that the track can be accessed from. |

## Get Track

> **To get a track use the following:**

```shell
curl "https://api.rotorvideos.com/api/partner/v1/tracks/:id" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "id": "unique-identifier",
      "name": "The Organism",
      "url": "https://example.com/uploads/tracks/song.mp3"
    }
  }
}
```

This endpoint will return the track's details by id.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/tracks/:id"`


### URL Parameters

| Parameter | Description                                |
|-----------|--------------------------------------------|
| id        | A unique identifier for the track.         |
