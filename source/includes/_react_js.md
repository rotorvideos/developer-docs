# React

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
| variant               | default,lite          | The variant of the embeddable                                                                | No       | default                                                                                |
### AuthConfig

> **Example of an AuthConfig**

```json
{
  "accessToken": "user-access-token",
  "clientId": "partner-app-client-id"
}
```

The `authConfig` object contains the necessary information to authenticate the user with the Rotor Videos API.
It is defined as follows:

| Prop Name   | Type   | Description                                | Required | Default |
|-------------|--------|--------------------------------------------|----------|---------|
| accessToken | string | The access token for the user.             | Yes      | -       |
| clientId    | string | The client ID for the partner application. | Yes      | -       |

### MediaAsset

> **Example of a MediaAsset for a Track with Release**

```json
{
  "id": "partner-demo-track-1",
  "providerName": "partner-demo-api",
  "artistName": "Rotor Pretenders",
  "releaseId": "partner-demo-release-1",
  "releaseType": "single",
  "releaseName": "Rotor Pretenders Debut Album",
  "releaseArtworkUrl": "https://example.com/partner-demo-1/release-1-artwork.jpg",
  "trackName": "Track 1",
  "artworkUrl": "https://example.com/partner-demo-1/artwork.jpg",
  "audioUrl": "https://example.com/partner-demo-1/audio.mp3"
}
```

> **Example of a MediaAsset for a Release**

```json
{
  "providerName": "partner-demo-api",
  "releaseId": "partner-demo-release-1",
  "releaseType": "single",
  "releaseName": "Rotor Pretenders Debut Album",
  "releaseArtworkUrl": "https://example.com/partner-demo-1/release-1-artwork.jpg"
}
```

The `MediaAsset` object represents an asset available for the user to select. It is defined as follows:

| Prop Name         | Type                       | Description                                    | Required | Default |
|-------------------|----------------------------|------------------------------------------------|----------|---------|
| id                | string                     | The unique identifier for the Partner's track. | No       | -       |
| artistName        | string                     | The name of the track's artist.                | No       | -       |
| trackName         | string                     | The name of the track.                         | No       | -       |
| artworkUrl        | string                     | The URL of the track's artwork.                | No       | -       |
| audioUrl          | string                     | The URL of the track's audio file.             | No       | -       |
| providerName      | string                     | The name of the media asset provider.          | Yes      | -       |
| releaseId         | string                     | The unique identifier for the release.         | No       | null    |
| releaseName       | string                     | The name of the release.                       | No       | null    |
| releaseType       | album, compilation, single | The type of the release.                       | No       | null    |
| releaseArtworkUrl | string                     | The URL of the release's artwork.              | No       | null    |

### Creation Flows

There are various media types your users can create: **Apple Music Album Motion**, **Spotify Canvas Video**, **Lyric Video**, and **Artwork Video**. By default, all creation flows are available to users. However, you can customize which flows appear by configuring the `creationFlows` prop in the `RotorVideosProvider` when integrating our toolkit into your React app.

#### How Creation Flows Work

- **Creation flows** control which media types will be available for your users to create.
- By **customizing the `creationFlows` prop**, you choose exactly which flows are available.
- **Creation flow variants** control the appearance and behavior of each creation flow.
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
  variant={CreationFlowVariant.lite}
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
| providerReferenceId | string        | The unique identifier for the Partner's track                                | No       | null    |
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
| providerReferenceId | string      | The unique identifier for the Partner's track                | Yes      | -        |
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
