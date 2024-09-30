# Apple Music Album Motion Light

Facilitates the generation of a bundle of album motion preview sets. A set consists of both the `1x1` and the `3x4` aspect ratio variants.

## Create Renders

> **To upload a public image artwork and generate a bundle of renders, use the following:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/album_motion_light" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json" \
  -d '{
       "artwork_url": "https://example.com/The-Oraganism.png"
      }
  }'

```

> **The above command returns JSON structured like this:**

```json
{
  "data": {
    "attributes": {
      "video_bundle_id": "unique-identifier",
      "outputs": [
      {
        "id": 923,
        "title": "Batch 71 - Motion Style 1 - Square",
        "style_id": 15,
        "url": "",
        "aspect_ratio": "1x1"
      },
      {
        "id": 924,
        "title": "Batch 71 - Motion Style 1 - Three By Four",
        "style_id": 15,
        "url": "",
        "aspect_ratio": "3x4"
      }
    ]
    }
  }
}
```

> **The above command returns this if encountering an issue with the provided artwork:**

```json
{
    "error": "invalid artwork_url provided"
}
```

artwork_url in payload is mandatory. A public url is expected.

This uploads and processes the provided artwork resource asynchronously. Multiple sets of render will then be processed asynchronously. Use this endpoint in combination with `GET` endpoint to receive the completed render urls.

<aside class="notice">
The <code>url</code> will return as <code>null</code> here because this process is asynchronous. The <code>url</code> will be populated when after renders are completed.
</aside>

### Data Attributes
Parameter | Description
--------- | -----------
video_bundle_id | unique identifier for the group of renders
outputs | Array of render elements

### Output Element Attributes

Parameter | Description
--------- | -----------
id | uuid for the render
title | Title for the render
style_id | A unique identifier for the style used to render this video
url | A URL that the artwork can be accessed from.

## Get Renders

> **To get the renders, use the following:**

```shell
curl "https://api.rotorvideos.com/api/partner/v1/album_motion_light/<video_bundle_id>" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this when renders are completed:**

```json
{
    "data": {
        "attributes": {
            "video_bundle_id": 72,
            "outputs": [
                {
                    "id": 929,
                    "title": "Batch 72 - Futurism - Square",
                    "style_id": 6,
                    "url": "https://storage.googleapis.com/bucket/output/929-output.mp4",
                    "aspect_ratio": "1x1"
                },
                {
                    "id": 930,
                    "title": "Batch 72 - Futurism - Three By Four",
                    "style_id": 6,
                    "url": "https://storage.googleapis.com/bucket/output/930-output.mp4",
                    "aspect_ratio": "3x4"
                }

            ]
        }
    }
}
```

> **The above command returns JSON structured like this if renders are processing:**

```json
{
    "progress": "processing"
}
```
