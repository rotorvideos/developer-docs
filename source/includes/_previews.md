# Previews

Previews are videos that are used to demonstrate the variants for a given style.

## Create Previews

> **To create preview videos of a given style, use the following:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/tracks/:id/previews" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "attributes": {
        "style_id": 11
      }
    }
  }'
```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "video_id": 56,
      "outputs": [
        {
          "id": 99,
          "title": "The Organism (Landscape (16x9))",
          "duration": 220,
          "video_url": null,
          "style_id": 11,
          "variant_id": 31,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "16x9"
        },
        {
          "id": 100,
          "title": "The Organism (Vertical (9x16))",
          "duration": 220,
          "video_url": null,
          "style_id": 11,
          "variant_id": 32,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "9x16"
        },
        {
          "id": 101,
          "title": "The Organism (Square (1x1))",
          "duration": 220,
          "video_url": null,
          "style_id": 11,
          "variant_id": 33,
          "progress": 0,
          "progress_message": null,
          "aspect_ratio": "1x1"
        }
      ]
    }
  }
}
```

This creates the previews asynchronously. Use this endpoint in combination with the get previews endpoint to identify
when the preview videos are ready.

<aside class="notice">
The <code>video_url</code> will return as <code>null</code> here because this process is asynchronous. The <code>video_url</code> will be populated when the upload has finished.
</aside>

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/tracks/:id/previews"`

### URL Parameters

| Parameter | Description                                |
|-----------|--------------------------------------------|
| id        | A unique identifier for the track.         |


### Data Attributes

| Parameter | Description                                            |
|-----------|--------------------------------------------------------|
| style_id  | A unique identifier for the style you want to preview. |

## Get Previews

> **To get the previews for a track use the following:**

```shell
curl "https://rotorvideos.com/api/partner/v1/tracks/:track_id/previews/:style_id" \
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
          "id": 99,
          "title": "The Organism (Landscape (16x9))",
          "duration": 220,
          "video_url": "https://example.com/The-Oraganism-Landscape.mp4",
          "style_id": 11,
          "variant_id": 31,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "16x9"
        },
        {
          "id": 100,
          "title": "The Organism (Vertical (9x16))",
          "duration": 220,
          "video_url": "https://example.com/The-Oraganism-Vertical.mp4",
          "style_id": 11,
          "variant_id": 32,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "9x16"
        },
        {
          "id": 101,
          "title": "The Organism (Square (1x1))",
          "duration": 220,
          "video_url": "https://example.com/The-Oraganism-Square.mp4",
          "style_id": 11,
          "variant_id": 33,
          "progress": 100,
          "progress_message": null,
          "aspect_ratio": "1x1"
        }
      ]
    }
  }
}
```

Return the available preview videos for a track with a given style.


### HTTP Request

`GET "https://rotorvideos.com/api/partner/v1/tracks/:track_id/previews/:style_id"`


### URL Parameters

| Parameter | Description                        |
|-----------|------------------------------------|
| track_id  | A unique identifier for the track. |
| style_id  | A unique identifier for the style. |
