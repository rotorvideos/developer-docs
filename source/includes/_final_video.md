# Final Video

Render the final HD version of your video.

## Create Final Video

> To create the final video use the following:

```shell
curl -XPOST
"http://rotorvideos.com/api/partner/v1/tracks/unique-identifier/videos" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "attributes": {
        "style_id": 11,
        "variant_id": 31
      }
    }
  }'
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 99,
          "title": "The Organism",
          "duration": "03:40",
          "video_url": null,
          "style_id": 11,
          "variant_id": 31,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "16x9"
        }
      ]
    }
  }
}
```

This creates the video asynchronously. Use this endpoint in combination with the get video endpoint to identify when the final video is ready.

<aside class="notice">
The <code>video_url</code> will return as <code>null</code> here because this process is asynchronous. The <code>video_url</code> will be populated when the upload has finished.
</aside>

### Data Attributes

Parameter | Description
--------- | -----------
style_id | A unique identifier for the style you want to render.
variant_id | A unique identifier for the variant you want to render.

## Get A Final Video

Return a final video for a given variant id.

> To get the renders for a variant use the following:

```shell
curl "https://rotorvideos.com/api/partner/v1/tracks/unique-identifier/videos/31" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 99,
          "title": "The Organism",
          "duration": "03:40",
          "video_url": "https://example.com/The-Oraganism-Final.mp4",
          "style_id": 11,
          "variant_id": 31,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "16x9"
        }
        ]
      ]
    }
  }
}
```

## Get All Final Videos

Return all rendered final videos.

> To get the renders for a track use the following:

```shell
curl "https://rotorvideos.com/api/partner/v1/tracks/unique-identifier/videos/31" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 99,
          "title": "The Organism",
          "duration": "03:40",
          "video_url": "https://example.com/The-Oraganism-Landscape-Final.mp4",
          "style_id": 11,
          "variant_id": 31,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "16x9"
        },
        {
          "id": 100,
          "title": "The Organism (Vertical (9x16))",
          "duration": "03:40",
          "video_url": "https://example.com/The-Oraganism-Vertical-Final.mp4",
          "style_id": 11,
          "variant_id": 32,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "9x16"
        }
      ]
    }
  }
}
```
