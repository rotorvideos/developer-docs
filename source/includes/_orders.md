# Orders

In the Rotor Embeddable on your website, when the User wants to render (purchase) a final video, an Order is created on the Rotor API with a unique ID (UUID), in the `pending` state.

You can transact a purchase for this Order UUID as needed, and when the user's Order is authorized/checked out on your website, a server-to-server request is required to initiate the render of the final video, and complete the Order.


## Finalize Single Order

> **Finalize a single Order:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/orders/:uuid/finalize" \
  -H "Authorization: Bearer <user access token>" \
  -H "Content-Type: application/json"
```

> **Response:**

```json
{
  "data": {
    "id": "49951b56-96ca-4bea-8cdb-c6875b33ce72",
    "type":"orders",
    "attributes": {
      "title": "Rite - Rotor Pretenders [CANVAS]",
      "order_paid": true,
      "created_at": "2023-06-26T12:17:47.576Z",
      "updated_at": "2023-06-26T12:18:17.215Z",
      "total_credits": 1,
      "remote_user_id": "partner-user-12345",
      "remote_track_id": "partner-track-12345",
      "remote_release_id": "partner-release-12345",
      "assets": {
        "data": [
          {
            "id": "88066362-141b-11ee-a6aa-4e8eb07e0621",
            "type": "render",
            "attributes": {
              "style_used": "High Contrast canvas",
              "error": null,
              "created_at": "2023-06-26T12:18:16.246Z",
              "updated_at":"2023-06-26T12:18:48.828Z",
              "progress":0.0,
              "url": null,
              "render_started_at":"2023-06-26T12:18:17.426Z",
              "render_completed_at": null,
              "specification": {
                "bitrate": 0,
                "container":"mp4",
                "frame_rate":30.0,
                "output_width":1080,
                "output_height":1920,
                "duration":8.0
              }
            }
          }
        ]
      }
    }
  }
}
```

### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/orders/:uuid/finalize"`


### URL Parameters

| Parameter | Description                        |
|-----------|------------------------------------|
| uuid      | A unique identifier for the Order. |


## Finalize Multiple Orders

> **Finalize multiple Orders:**

```shell
curl -XPOST "https://api.rotorvideos.com/api/partner/v1/orders/finalize" \
  -H "Authorization: Bearer <user access token>" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "orders",
      "attributes":  {
        "order_uuids": [
          "49951b56-96ca-4bea-8cdb-c6875b33ce72",
          "49951b56-96ca-4bea-8cdb-c6875b44df83"
        ]
      }
    }
  }'
```

> **Response:**

```json
{
  "data": [
    {
      "id": "49951b56-96ca-4bea-8cdb-c6875b33ce72",
      "type":"orders",
      "attributes": {
        ...
      }
    },
    {
      "id": "49951b56-96ca-4bea-8cdb-c6875b44df83",
      "type":"orders",
      "attributes": {
        ...
      }
    }
  }
}
```


### HTTP Request

`POST "https://api.rotorvideos.com/api/partner/v1/orders/finalize"`

### Data Attributes

| Parameter   | Description                                    |
|-------------|------------------------------------------------|
| order_uuids | An array of unique identifiers for the Orders. |


## Get Order

> **GET an Order by UUID:**

```shell
curl -XGET "https://api.rotorvideos.com/api/partner/v1/orders/:uuid" \
  -H "Authorization: Bearer <user access token>"
```

> **Response:**

```json
{
  "data": {
    "id": "49951b56-96ca-4bea-8cdb-c6875b33ce72",
    "type":"orders",
    "attributes": {
      ...
    }
  }
}
```

A single Order can be retrieved with the following request.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/orders/:uuid"`

### URL parameters

| Parameter | Description                        |
|-----------|------------------------------------|
| uuid      | A unique identifier for the Order. |



## Get All Orders

> **GET all Orders:**

```shell
curl -XGET "https://api.rotorvideos.com/api/partner/v1/orders" \
  -H "Authorization: Bearer <user access token>"
```


> **Response:**

```json
{
  "data": [
    {
      "id": "49951b56-96ca-4bea-8cdb-c6875b33ce72",
      "type":"orders",
      "attributes": {
        ...
      }
    },
    {
      "id": "49951b56-96ca-4bea-8cdb-c6875b33ab12",
      "type":"orders",
      "attributes": {
        ...
      }
    },
  ]
}
```

All Orders for a user can be retrieved with the following request.

### HTTP Request

`GET "https://api.rotorvideos.com/api/partner/v1/orders"`
