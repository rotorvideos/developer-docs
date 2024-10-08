# Trailers

Trailers are a short 5 second clip of your video to demonstrate each of the video style options.

## Create Trailers

> **To create trailers for a track, use the following:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/tracks/:id/trailers" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 103,
          "title": "The Organism (Vinyl)",
          "duration": 5,
          "video_url": null,
          "style_id": 12,
          "variant_id": 36,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "16x9"
        },
        {
          "id": 102,
          "title": "The Organism (Horizon)",
          "duration": 5,
          "video_url": null,
          "style_id": 11,
          "variant_id": 33,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "16x9"
        }
      ]
    }
  }
}
```

This creates the trailers asynchronously. Use this endpoint in combination with the get trailers endpoint to identify
when the trailer videos are ready.

<aside class="notice">
The <code>video_url</code> will return as <code>null</code> here because this process is asynchronous. The <code>video_url</code> will be populated when the upload has finished.
</aside>

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/tracks/:id/trailers"`


## Get Trailers

> **To get the trailers for a track, use the following:**

```shell
curl "https://rotorvideos.com/api/partner/v1/tracks/:id/trailers" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 103,
          "title": "The Organism (Vinyl)",
          "duration": 5,
          "video_url": "https://example.com/The-Oraganism-Vinyl.mp4",
          "style_id": 12,
          "variant_id": 36,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "16x9"
        },
        {
          "id": 102,
          "title": "The Organism (Horizon)",
          "duration": 5,
          "video_url": "https://example.com/The-Oraganism-Horizon.mp4",
          "style_id": 11,
          "variant_id": 33,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "16x9"
        }
      ]
    }
  }
}
```

This gets the trailers for a track. Use this endpoint to identify when the trailer videos are ready.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/tracks/:id/trailers"`

