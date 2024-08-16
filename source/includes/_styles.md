# Styles

These ofter options to style your video based on a theme.

## Get Styles

> **To get the available styles, use the following:**

```shell
curl "https://api.rotorvideos.com/api/partner/v1/styles" \
  -H "Authorization: Bearer <insert token here>" \
  -H "Content-Type: application/json"
```

> **The above command returns JSON structured like this:**

```json
{
  "data": [
    {
      "attributes": {
        "id": 11,
        "title": "Vinyl",
        "preview": "https://example.com/style-11-preview.mp4",
        "variants": [
          {
            "id": 31,
            "title": "Landscape (16x9)",
            "preview": "https://example.com/variant-31-preview.mp4",
            "aspect_ratio": "16x9",
            "duration": 3
          },
          {
            "id": 32,
            "title": "Vertical (9x16)",
            "preview": "https://example.com/variant-32-preview.mp4",
            "aspect_ratio": "9x16",
            "duration": 3
          },
          {
            "id": 33,
            "title": "Square (1x1)",
            "preview": "https://example.com/variant-33-preview.mp4",
            "aspect_ratio": "1x1",
            "duration": 3
          }
        ]
      }
    },
    {
      "attributes": {
        "id": 12,
        "title": "Horizon",
        "preview": "https://example.com/style-12-preview.mp4",
        "variants": [
          {
            "id": 34,
            "title": "Landscape (16x9)",
            "preview": "https://example.com/variant-34-preview.mp4",
            "aspect_ratio": "16x9",
            "duration": 5
          },
          {
            "id": 36,
            "title": "Square (1x1)",
            "preview": "https://example.com/variant-36-preview.mp4",
            "aspect_ratio": "1x1",
            "duration": 5
          }
        ]
      }
    }
  ]
}
```

This returns all the available styles that you can choose to base your video
on. You can see a short preview each via the <code>preview</code> attribute.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/styles"`

