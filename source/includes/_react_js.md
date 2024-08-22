# React

## Installation

> **Install the package**

```shell
npm install @rotorvideos/react
## or 
yarn add @rotorvideos/react
```

To install the package, you need to add the NPM Registry configuration to your `.npmrc` file. You can find the config in your
Partners Dashboard. And then you can install the package using `npm` or `yarn`.

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

| Prop Name             | Type                  | Description                                                            | Required | Default              |
|-----------------------|-----------------------|------------------------------------------------------------------------|----------|----------------------|
| authConfig            | AuthConfig            | The authentication configuration                                       | Yes      | -                    |
| availableTracks       | ExternalTrack[]       | The list of available Partner tracks for the user.                     | No       | []                   |
| children              | ReactNode             | The children components to be wrapped by the provider.                 | Yes      | -                    |
| cartApi               | CartApi               | The cart API configuration                                             | No       | -                    |
| creationFlows         | (motion,canvas)[]     | The list of available creation flows for the user.                     | No       | ['motion', 'canvas'] |
| showOrderPage         | boolean               | Show the order page after the user has added video to the cart         | No       | true                 |                                             
| showDuplicateAction   | boolean               | Show the duplicate action for the Video                                | No       | true                 |
| logLevel              | quiet,debug           | The console log level                                                  | No       | quiet                |
| localisationResources | LocalisationResources | The localisation strings for the components. [see more](#localization) | No       | -                    |
| theme                 | AppTheme              | The theme overrides object [see more](#theming)                        | No       | -                    |

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

### ExternalTrack

> **Example of an ExternalTrack**

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

The `ExternalTrack` object represents a track available for the user to select. It is defined as follows:

| Prop Name         | Type                       | Description                                    | Required | Default |
|-------------------|----------------------------|------------------------------------------------|----------|---------|
| id                | string                     | The unique identifier for the Partner's track. | Yes      | -       |
| artistName        | string                     | The name of the artist.                        | Yes      | -       |
| trackName         | string                     | The name of the track.                         | Yes      | -       |
| artworkUrl        | string                     | The URL of the track's artwork.                | Yes      | -       |
| audioUrl          | string                     | The URL of the track's audio file.             | Yes      | -       |
| providerName      | string                     | The name of the track's provider.              | Yes      | -       |
| releaseId         | string                     | The unique identifier for the release.         | No       | null    |
| releaseName       | string                     | The name of the release.                       | No       | null    |
| releaseType       | album, compilation, single | The type of the release.                       | No       | null    |
| releaseArtworkUrl | string                     | The URL of the release's artwork.              | No       | null    |

### CartApi

> **Example of a CartApi**

```typescript
const cartApi = {
  addToCart: (cartItem: CartItem) => {
  },
  removeFromCart: (orderUuid: string) => {
  },
  openCart: (cartItem: CartItem) => {
  }
}
```

> **Example of a CartItem**

```typescript
{
  orderUuid: 'cart-item-uuid';
  trackId: 'partner-demo-track-1';
  title: 'Track 1';
}
```

The `cartApi` object contains the necessary functions to manage the cart. It is defined as follows:

| Prop Name      | Type                         | Description                                   | Required | Default |
|----------------|------------------------------|-----------------------------------------------|----------|---------|
| addToCart      | (cartItem: CartItem) => void | The function to add an item to the cart.      | Yes      | -       |
| removeFromCart | (orderUuid: string) => void  | The function to remove an item from the cart. | Yes      | -       |
| openCart       | (cartItem: CartItem) => void | The function to open the cart.                | Yes      | -       |

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

| Prop Name           | Type   | Description                                   | Required | Default |
|---------------------|--------|-----------------------------------------------|----------|---------|
| providerReferenceId | string | The unique identifier for the Partner's track | No       | null    |

<aside class="notice">
Whenever the <code>providerReferenceId</code> is not provided, the Rotor Embeddable will open the Dashboard with all user created videos.
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
