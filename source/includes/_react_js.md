# React

<aside class="notice">
For new integrations we recommend the <a href="#iframe">Iframe</a> embed, which
needs no registry credentials and keeps itself up to date. Use the React library
when the video creator needs to run inside your own React application.
</aside>

## Installation

> **Add NPM Registry token to your `.npmrc` file**

```shell
@rotorvideos:registry=https://us-npm.pkg.dev/rotor-lf-client/rotor-lf-npm/
//us-npm.pkg.dev/rotor-lf-client/rotor-lf-npm/:_password="<insert token here>"
//us-npm.pkg.dev/rotor-lf-client/rotor-lf-npm/:username=_json_key_base64
//us-npm.pkg.dev/rotor-lf-client/rotor-lf-npm/:email=not.valid@email.com
//us-npm.pkg.dev/rotor-lf-client/rotor-lf-npm/:always-auth=true
``` 

> **Install the package**

```shell
npm install @rotorvideos/react
## or 
yarn add @rotorvideos/react
```

To install the package, you need to add the NPM Registry token to your `.npmrc` file. You can find the token in your
Partner Dashboard (Engineering -> JavaScript Integration). And then you can install the package using `npm` or `yarn`.

## RotorVideosProvider

> **Example**

```jsx
import { RotorVideosProvider } from '@rotorvideos/react';

const App = () => {
  return (
    <RotorVideosProvider
      authConfig={{
        accessToken,
        clientId,
      }}
      theme={customTheme}
    >
      ...
    </RotorVideosProvider>
  );
}
```

Wrap your application with the `RotorVideosProvider` component to provide the necessary configuration for the Rotor
Videos components.

### Parameters

| Prop Name             | Type                  | Description                                                                                  | Required | Default                                                                                |
|-----------------------|-----------------------|----------------------------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------|
| authConfig            | AuthConfig            | The authentication configuration                                                             | Yes      | -                                                                                      |
| mediaAssets           | MediaAsset[]          | The list of available Partner assets for the user.                                           | No       | []                                                                                     |
| availableTracks       | MediaAsset[]          | Deprecated, please use `mediaAssets` instead                                                 | No       | []                                                                                     |
| children              | ReactNode             | The children components to be wrapped by the provider.                                       | Yes      | -                                                                                      |
| creationFlows         | (motion,canvas)[]     | The list of available creation flows for the user.                                           | No       | [CreationFlow.canvas, CreationFlow.lyrics, CreationFlow.motion, CreationFlow.artwork]  |
| showDuplicateAction   | boolean               | Show the duplicate action for the Video                                                      | No       | true                                                                                   |
| logLevel              | quiet,debug           | The console log level                                                                        | No       | quiet                                                                                  |
| theme                 | AppTheme              | The theme overrides object [see more](#theming)                                              | No       | -                                                                                      |
### AuthConfig

> **Supplying a token on demand (recommended)**

```jsx
<RotorVideosProvider
  authConfig={{
    clientId: 'partner-app-client-id',
    getToken: async () => {
      const response = await fetch('/my-app/rotor-token');
      const { accessToken } = await response.json();
      return accessToken;
    },
  }}
>
  ...
</RotorVideosProvider>
```

> **Supplying a fixed token**

```json
{
  "accessToken": "user-access-token",
  "clientId": "partner-app-client-id"
}
```

The `authConfig` object contains the necessary information to authenticate the user with the Rotor Videos API.
It takes one of two forms.

Prefer the `getToken` form. User Access Tokens expire, and `getToken` is called
again whenever a fresh one is needed, so your integration keeps working through
an expiry without you having to re-render the provider.

| Prop Name   | Type                    | Description                                                                | Required | Default |
|-------------|-------------------------|----------------------------------------------------------------------------|----------|---------|
| clientId    | string                  | The client ID for the partner application.                                 | Yes      | -       |
| getToken    | () => Promise\<string\> | Returns a User Access Token for the user. Called again whenever one is needed. | Yes, unless `accessToken` is given | - |
| accessToken | string                  | A fixed access token for the user. Not refreshed — use `getToken` instead. | Yes, unless `getToken` is given    | - |

<aside class="notice">
Provide either <code>getToken</code> or <code>accessToken</code>, not both. If
<code>getToken</code> is present it is used, and <code>accessToken</code> is
ignored.
</aside>

### MediaAsset

> **Example of a track asset**

```json
{
  "id": "partner-demo-track-1",
  "providerName": "partner-demo-api",
  "trackName": "Rite",
  "artistName": "Rotor Pretenders",
  "audioUrl": "https://example.com/partner-demo-1/audio.mp3",
  "artworkUrl": "https://example.com/partner-demo-1/artwork.jpg",
  "releaseId": "partner-demo-release-1",
  "releaseName": "Some Are Lovin'",
  "releaseType": "album",
  "releaseArtworkUrl": "https://example.com/partner-demo-1/release-1-artwork.jpg"
}
```

> **Example of a release asset**

```json
{
  "providerName": "partner-demo-api",
  "releaseId": "partner-demo-release-2",
  "releaseName": "Rotor Pretenders Debut",
  "releaseType": "single",
  "releaseArtworkUrl": "https://example.com/partner-demo-1/release-2-artwork.jpg"
}
```

A `MediaAsset` represents an asset available for the user to select. There are
two shapes, and the fields you send decide which one you get:

- A **track asset** has an `id`. It imports the track's audio and artwork, and
  may also carry the details of the release it belongs to.
- A **release asset** has no `id` and a `releaseId`. It imports the release only.

<aside class="warning">
The <code>providerReferenceId</code> you open the embeddable with must exactly
match an asset's <code>id</code> (track asset) or <code>releaseId</code> (release
asset).
</aside>

A track asset and a release asset may carry the same `releaseId`. Releases are
matched on `providerName` and `releaseId`, so both assets resolve to the same
release rather than creating a duplicate.

#### Track asset

| Prop Name         | Type                           | Description                                                                    | Required |
|-------------------|--------------------------------|--------------------------------------------------------------------------------|----------|
| id                | string                         | Your unique identifier for the track. Open the embeddable with this value.     | Yes      |
| providerName      | string                         | The name of the media asset provider.                                          | Yes      |
| trackName         | string                         | The name of the track.                                                         | Yes      |
| artistName        | string                         | The name of the track's artist.                                                | Yes      |
| audioUrl          | string                         | The URL of the track's audio file.                                             | Yes      |
| artworkUrl        | string                         | The URL of the track's artwork.                                                | No       |
| releaseId         | string                         | Your unique identifier for the release. Supplying it also imports the release. | No       |
| releaseName       | string                         | The name of the release.                                                       | No       |
| releaseType       | album, compilation, ep, single | The type of the release.                                                       | No       |
| releaseArtworkUrl | string                         | The URL of the release's artwork.                                              | No       |

#### Release asset

| Prop Name         | Type                           | Description                                                                  | Required |
|-------------------|--------------------------------|------------------------------------------------------------------------------|----------|
| providerName      | string                         | The name of the media asset provider.                                        | Yes      |
| releaseId         | string                         | Your unique identifier for the release. Open the embeddable with this value. | Yes      |
| releaseName       | string                         | The name of the release.                                                     | No       |
| releaseType       | album, compilation, ep, single | The type of the release.                                                     | No       |
| releaseArtworkUrl | string                         | The URL of the release's artwork.                                            | No       |
| artistName        | string                         | The name of the release's artist.                                            | No       |

#### Media requirements

Assets are imported server side, so every URL you supply has to be fetchable
without authentication — we send a `HEAD` request before downloading the file.
Pre-signed URLs are fine, but they must stay valid until the import finishes,
not just for as long as your page is open.

- **Audio format** — WAV, MP3, M4A, AAC, OGG, FLAC or AIFF
- **Audio length** — under 10 minutes
- **Audio size** — 300 MB or less
- **Artwork format** — JPEG, PNG, GIF or TIFF

### Creation Flows

There are various media types your users can create: **Apple Music Album Motion**, **Spotify Canvas Video**, **Lyric Video**, and **Artwork Video**. By default, all creation flows are available to users. However, you can customize which flows appear by configuring the `creationFlows` prop in the `RotorVideosProvider` when integrating our toolkit into your React app.

#### How Creation Flows Work

- **Creation flows** control which media types will be available for your users to create.
- By **customizing the `creationFlows` prop**, you choose exactly which flows are available.
- **Empty array (`[]`)**: All flows are enabled (default behavior).
- **Specific entries**: Only the flows listed will be enabled.

#### Available Creation Flows

- `CreationFlow.canvas` — Spotify Canvas video
- `CreationFlow.motion` — Apple Music Album Motion
- `CreationFlow.artwork` — Artwork video
- `CreationFlow.lyrics` — Lyric video

Here's how to use the `creationFlows` prop when integrating the provider into your React app:

>**Example of how to specify the creationFlows available**

```jsx
<RotorVideosProvider
  {...rotorVideosConfig}
  mediaAssets={compactReleases}
  theme={releasesDemoTheme}
  creationFlows={[CreationFlow.motion, CreationFlow.canvas]}
  showDuplicateAction={false}
>
  {/* Your app content */}
</RotorVideosProvider>
```

## useRotorVideos

> **Example**

```jsx
import { useRotorVideos } from '@rotorvideos/react';

const MyComponent = () => {
  const { open } = useRotorVideos();

  return (
    <div>
      <button onClick={() => open({ providerReferenceId: 'partner-demo-track-1' })}>
        Create Video
      </button>
    </div>
  );
}
```

The `useRotorVideos` hook provides access to the Rotor Videos context. It returns the following properties:

| Prop Name | Type                            | Description                                   |
|-----------|---------------------------------|-----------------------------------------------|
| open      | (options: OpenOptions?) => void | The function to open the Rotor Videos modal.  |
| close     | () => void                      | The function to close the Rotor Videos modal. |

### OpenOptions

> **OpenOptions Example**

```typescript
{
  providerReferenceId: 'partner-demo-track-1';
}
```

The `OpenOptions` object contains the necessary information to open the Rotor Videos modal. It is defined as follows:

| Prop Name           | Type          | Description                                                                  | Required | Default |
|---------------------|---------------|------------------------------------------------------------------------------|----------|---------|
| providerReferenceId | string        | The identifier of the asset to open. Must match a `MediaAsset` `id` or `releaseId` | No       | null    |
| creationFlow        | canvas,motion | The creation flow to open the modal with. Requires the `providerReferenceId` | No       | null    |

<aside class="notice">
Whenever the <code>providerReferenceId</code> is not provided, the Rotor Embeddable will open the Dashboard with all user-created videos.
This flow doesn't allow the user to create a new video, as there is no track reference to start the creation process.
</aside>


## RotorVideosSmartButton

> **Example**

```jsx
import { RotorVideosProvider, RotorVideosSmartButton } from '@rotorvideos/react';

const App = () => (
  <RotorVideosProvider {...options}>
    <RotorVideosSmartButton providerReferenceId="partner-demo-track-1" />
  </RotorVideosProvider>
);
```

> **Example button label states**

```markdown
- `Loading...` when the track is being imported
- `Failed to load!` when the track failed to import
- `Your Videos ({{count}})` when the track already has videos
- `Make Videos` when the track is ready to create videos
```

The `RotorVideosSmartButton` component is a button that opens the Rotor Videos modal when clicked.


### Parameters

| Prop Name           | Type        | Description                                                  | Required | Default  |
|---------------------|-------------|--------------------------------------------------------------|----------|----------|
| providerReferenceId | string      | The identifier of the asset to open. Must match a `MediaAsset` `id` or `releaseId` | Yes      | -        |
| as                  | ElementType | The element type of the button (HTML tag or React component) | No       | 'button' |

The rest of the props are passed to the button element.

```jsx
import { RotorVideosProvider, RotorVideosSmartButton } from '@rotorvideos/react';

// NOTE: Take implementation as an example. Please be responsible in handling your credentials for your app.
const App = () => {
  const authConfig = {
    accessToken: 'user-access-token',
    clientId: 'partner-app-client-id',
  };

  // SAMPLE DATA
  const mediaAssets = [
    {
      id: 'partner-demo-track-1',
      providerName: 'partner-demo-api',
      trackName: 'Track 1',
      artistName: 'Artist Name',
      audioUrl: 'https://example.com/audio.mp3',
      artworkUrl: 'https://example.com/artwork.jpg',
    }
  ];

  return (
    <RotorVideosProvider
      authConfig={authConfig}
      mediaAssets={mediaAssets}
    >
      {mediaAssets.map((asset) => (
        <RotorVideosSmartButton key={asset.id} providerReferenceId={asset.id} />
      ))}
    </RotorVideosProvider>
  );
};
```
