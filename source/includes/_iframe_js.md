# Iframe

The iframe embed is the recommended way to add Rotor video creation to your site.

You install a small loader on your page. When you open it, the loader mounts the
Rotor video creator in a full-screen `<iframe>` served from Rotor. Because the
creator itself is served by us rather than bundled into your application, new
features and fixes reach your integration as soon as we ship them — there is no
library version to upgrade to stay current.

## Installation

> **Install the package**

```shell
npm install @rotorvideos/iframe
## or
yarn add @rotorvideos/iframe
```

> **Or add the script to the page**

```html
<!-- Replace 1.0.2 with the release you want to pin to -->
<script src="https://cdn.jsdelivr.net/npm/@rotorvideos/iframe@1.0.2/dist/rv-embeddable-iframe.min.js"></script>
```

`@rotorvideos/iframe` is published publicly to the npm registry, so it needs no
registry credentials and no `.npmrc` entry.

The package has no dependencies, and it does not require React — you can use it
from any page, framework or not.

If you would rather not add a build step, load the script-tag bundle instead. It
exposes a ready-to-use client as the global `RotorVideos`, and is otherwise
identical to the package.

<aside class="notice">
Pinning a version pins the loader only. The video creator is served from the
iframe and stays up to date regardless of the version you pin, so upgrades are
rarely urgent.
</aside>

## Quick start

> **A complete integration using the script-tag bundle**

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Artist Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/@rotorvideos/iframe@1.0.2/dist/rv-embeddable-iframe.min.js"></script>
  </head>
  <body>
    <button id="create-video">Make Videos</button>

    <script>
      // Your own endpoint, returning the User Access Token your server obtained
      // from POST /api/partner/v1/register for the signed-in user.
      async function getToken() {
        const response = await fetch('/my-app/rotor-token');
        const { accessToken } = await response.json();
        return accessToken;
      }

      RotorVideos.init({
        authConfig: {
          clientId: 'partner-app-client-id',
          getToken: getToken,
        },
        mediaAssets: [
          {
            id: 'partner-demo-track-1',
            providerName: 'partner-demo-api',
            artistName: 'Rotor Pretenders',
            trackName: 'Track 1',
            artworkUrl: 'https://example.com/partner-demo-1/artwork.jpg',
            audioUrl: 'https://example.com/partner-demo-1/audio.mp3',
          },
        ],
      });

      document
        .getElementById('create-video')
        .addEventListener('click', function () {
          RotorVideos.open({ providerReferenceId: 'partner-demo-track-1' });
        });
    </script>
  </body>
</html>
```

> **The same integration using the package**

```javascript
import { RotorVideosClient } from '@rotorvideos/iframe';

const client = new RotorVideosClient();

client.init({
  authConfig: { clientId, getToken },
  mediaAssets,
});

client.open({ providerReferenceId: 'partner-demo-track-1' });
```

There are two calls to make: `init` once, with the configuration that stays the
same for your integration, and `open` each time a user wants to create a video.

## RotorVideosClient

> **Creating a client**

```javascript
import { RotorVideosClient } from '@rotorvideos/iframe';

const client = new RotorVideosClient();
```

The client owns the embed for your page. Create one and reuse it — the script-tag
bundle creates one for you and assigns it to `window.RotorVideos`.

| Method | Type                                                            | Description                                                     |
|--------|-----------------------------------------------------------------|-----------------------------------------------------------------|
| init   | (config: RotorVideosConfig) => void                             | Supply the configuration used for every launch.                 |
| open   | (options?: OpenOptions, handlers?: Handlers) => boolean         | Open the video creator.                                         |
| close  | (reason?: string) => void                                       | Close the video creator.                                        |

### init

> **Example**

```javascript
client.init({
  authConfig: {
    clientId: 'partner-app-client-id',
    getToken: getToken,
  },
  mediaAssets: mediaAssets,
  availableFlows: [CreationFlow.lyrics, CreationFlow.artwork],
});
```

`init` takes the `RotorVideosConfig` that applies to every launch. Call it before
the first `open`.

You can call `init` again at any time to replace the configuration — for
instance, after the signed-in user changes, or once a user's assets have loaded.
A call to `init` does not affect an embed that is already open; the new
configuration applies to the next `open`.

#### RotorVideosConfig

| Prop Name            | Type           | Description                                                                                     | Required | Default    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------|----------|------------|
| authConfig           | AuthConfig     | The authentication configuration [see more](#iframe-authentication)                             | Yes      | -          |
| mediaAssets          | MediaAsset[]   | The list of available Partner assets for the user [see more](#react-rotorvideosprovider-mediaasset)                 | No       | []         |
| availableFlows       | CreationFlow[] | The creation flows available to the user [see more](#iframe-creation-flows)                     | No       | All flows  |
| showDuplicateAction  | boolean        | Show the duplicate action for a video                                                            | No       | true       |
| enableUnlinkedMode   | boolean        | Allow users to start a video without selecting one of your assets first                          | No       | false      |
| enableExternalCreate | boolean        | Close the embed instead of starting creation, so your own page can handle the "create" action    | No       | false      |

The `MediaAsset` shape is the same as for the React library — see
[MediaAsset](#react-rotorvideosprovider-mediaasset).

### open

> **Example**

```javascript
client.open(
  { providerReferenceId: 'partner-demo-track-1' },
  {
    onReady: () => console.log('the creator is visible'),
    onClose: (reason) => console.log('closed', reason),
    onError: (message) => console.error(message),
  }
);
```

`open` mounts the video creator over your page. Both arguments are optional.

It returns `true` when the embed was opened, and `false` when an embed is
already open. A call that returns `false` does nothing at all — the visible
session keeps the options and handlers it was opened with.

<aside class="notice">
Whenever the <code>providerReferenceId</code> is not provided, the embed opens the
Dashboard with all of the user's videos. Unless <code>enableUnlinkedMode</code> is
set, this flow doesn't allow the user to create a new video, as there is no
asset reference to start the creation process from.
</aside>

#### OpenOptions

| Prop Name           | Type         | Description                                                                    | Required | Default |
|---------------------|--------------|--------------------------------------------------------------------------------|----------|---------|
| providerReferenceId | string       | The unique identifier for the Partner's track                                  | No       | -       |
| initialFlow         | CreationFlow | The creation flow to open with. Requires the `providerReferenceId`             | No       | -       |

#### Handlers

| Prop Name | Type                        | Description                                                                        |
|-----------|-----------------------------|------------------------------------------------------------------------------------|
| onReady   | () => void                  | The creator has loaded and is visible.                                             |
| onClose   | (reason?: string) => void   | The embed has closed. See the reasons below.                                       |
| onError   | (message: string) => void   | The embed failed to load or reported an error. The user is shown the same message. |

Handlers apply to a single `open` call and are discarded when the embed closes,
so pass them again on the next launch.

`onClose` receives a `reason` describing why the embed closed:

| Reason            | Meaning                                                                                                 |
|-------------------|---------------------------------------------------------------------------------------------------------|
| `undefined`       | The user finished or dismissed the embed normally.                                                       |
| `'dismissed'`     | The user pressed Escape.                                                                                 |
| `'error'`         | The user dismissed the error message shown after a load failure.                                         |
| `'external create'` | The user asked to create a video while `enableExternalCreate` is set, so your page should take over.    |

### close

> **Example**

```javascript
client.close();
```

`close` closes the embed from your page — for example, if the user signs out
while the creator is open. It is a no-op when nothing is open.

The user can already close the embed themselves, and doing so calls your
`onClose` handler, so most integrations never need to call `close` directly.

## Authentication

> **Example of an AuthConfig**

```javascript
{
  clientId: 'partner-app-client-id',
  getToken: async () => {
    const response = await fetch('/my-app/rotor-token');
    const { accessToken } = await response.json();
    return accessToken;
  },
}
```

The `authConfig` object identifies your integration and supplies User Access
Tokens on demand.

| Prop Name | Type                              | Description                                            | Required | Default |
|-----------|-----------------------------------|--------------------------------------------------------|----------|---------|
| clientId  | string                            | The client ID for the partner application.             | Yes      | -       |
| getToken  | () => string &#124; Promise\<string\> | Returns a User Access Token for the signed-in user. | Yes  | -       |

`getToken` is called whenever the embed needs a token, including when the
previous one has expired. Return the current token for the signed-in user each
time it is called — do not cache one indefinitely on the assumption it will
remain valid. See [Authentication](#authentication) for how your server obtains
a User Access Token, and how long it lasts.

Your `getToken` function stays on your page. It is never sent to Rotor: the
embed asks for a token when it needs one, and only the resulting token string is
handed over.

<aside class="warning">
Fetch tokens from your own backend, as in the example above. Do not put your
Client Secret on the page, and do not call <code>POST /oauth/token</code> from
the browser — those credentials authorize your whole application, not a single
user.
</aside>

## Creation Flows

> **Example of how to specify the flows available**

```javascript
import { CreationFlow } from '@rotorvideos/iframe';

client.init({
  authConfig: authConfig,
  mediaAssets: mediaAssets,
  availableFlows: [CreationFlow.lyrics, CreationFlow.artwork],
});
```

There are several kinds of video your users can create. By default they can
create all of them; set `availableFlows` to offer a subset.

- `CreationFlow.canvas` — Spotify Canvas video
- `CreationFlow.motion` — Apple Music Album Motion
- `CreationFlow.artwork` — Artwork video
- `CreationFlow.lyrics` — Lyric video

The `CreationFlow` values are plain strings, so the script-tag bundle can use
them directly — `availableFlows: ['lyrics', 'artwork']` is equivalent to the
example above.

## Going live

Two things must be in place before the embed will load on your production site.

### Register your origins

Because the embed runs framed on your page, we restrict which origins are
allowed to frame each production integration.

Send Rotor the exact origins your integration will be served from — scheme,
host, and port, for example `https://app.example.com` — and we will register
them against your Client ID.

<aside class="warning">
Registration fails closed: until your origins are registered, a production
Client ID will refuse to load and your <code>onError</code> handler will fire.
Sandbox integrations can be framed from any origin, so you can build and test
against your sandbox credentials before your production origins are registered.
</aside>

### Content Security Policy

> **The one directive to add**

```
Content-Security-Policy: frame-src https://embed.rotorvideos.com;
```

Everything the creator loads — our application, our API, the payment SDK — runs
inside the iframe on Rotor's origin and is governed by Rotor's own Content
Security Policy, not yours. So if your page sends a `Content-Security-Policy`
header, you only need to allow the embed host as a frame source.

Add `child-src` alongside `frame-src` if you support browsers that predate
CSP Level 3.

The loader adds no inline `<script>` and no inline `<style>` to your page, so it
does not require `'unsafe-inline'` or `'unsafe-eval'`.

## Differences from the React and Bundle libraries

If you are moving from `@rotorvideos/react` or `@rotorvideos/web`, note that:

- Configuration is split. What was one set of props is now the `init`
  configuration (stable, per-integration) and the `open` options (per-launch).
- `availableFlows` replaces `creationFlows`, and `initialFlow` replaces
  `creationFlow`.
- Authentication is always a `getToken` callback. There is no static
  `accessToken` option, because the embed refreshes tokens on its own.
- There is no smart button. Render your own button and call `open` from it.
