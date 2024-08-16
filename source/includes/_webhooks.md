# Webhooks

The Rotor API will fire webhooks to registered endpoints, per application. For example, every time an order is placed in an embeddable, and finalized, a webhook will be sent to the application's registered endpoints, that are subscribed to that event.

## Webhook Endpoints

Rotor needs to know where to send events. You can register multiple webhooks with Rotor by emailing engineering@rotorvideos.com.

You will need to provide the publicly accessible HTTPS URL to your webhook endpoint, and select the type of events you’re receiving in your endpoint.

## Webhook Events

Rotor API will fire webhooks for the following events:

### Event: `order.finalized`

> **An example webhook payload for `order.finalized`**

```json
{
  "id": "8997ae3c-1d9f-4421-9064-c2a8ab386fa0",
  "event": "order.finalized",
  "created_at": "2023-02-13 13:09:42.654463",
  "type": "order",
  "payload": {
    "data": {
      "id": "49951b56-96ca-4bea-8cdb-c6875b33ce72",
      "type":"order",
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
                "progress":1.0,
                "url": "https://rotorvideos-heroku-production-uploads.storage.googleapis.com/output/1.mp4?1687781928",
                "render_started_at":"2023-06-26T12:18:17.426Z",
                "render_completed_at":"2023-06-26T12:18:48.216Z",
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
}
```
When the renders for the order have been completed and uploaded to the cloud, Rotor marks the order as complete, and triggers `order.finalized`
