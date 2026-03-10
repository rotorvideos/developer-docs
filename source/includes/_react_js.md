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
Partners Dashboard (Engineering -> JavaScript Integration). And then you can install the package using `npm` or `yarn`.

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
| cartApi               | CartApi               | The cart API configuration                                                                   | No       | -                                                                                      |
| creationFlows         | (motion,canvas)[]     | The list of available creation flows for the user.                                           | No       | [CreationFlow.canvas, CreationFlow.lyrics, CreationFlow.motion, CreationFlow.artwork]  |
| showOrderPage         | boolean               | Show the order page after the user has added video to the cart                               | No       | true                                                                                   |                                             
| showDuplicateAction   | boolean               | Show the duplicate action for the Video                                                      | No       | true                                                                                   |
| logLevel              | quiet,debug           | The console log level                                                                        | No       | quiet                                                                                  |
| theme                 | AppTheme              | The theme overrides object [see more](#theming)                                              | No       | -                                                                                      |
| variant               | default,lite          | The variant of the embeddable                                                                | No       | default                                                                                |
| enableCashPayment     | boolean               | Enables direct Stripe payment. Mutually exclusive with `cartApi` and `enableInvoicePayment`. | No       | false                                                                                  |
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
  creationFlow: 'canvas';
}
```

The `cartApi` object contains the necessary functions to manage the cart. It is defined as follows:

| Prop Name      | Type                         | Description                                   | Required | Default |
|----------------|------------------------------|-----------------------------------------------|----------|---------|
| addToCart      | (cartItem: CartItem) => void | The function to add an item to the cart.      | Yes      | -       |
| removeFromCart | (orderUuid: string) => void  | The function to remove an item from the cart. | Yes      | -       |
| openCart       | (cartItem: CartItem) => void | The function to open the cart.                | Yes      | -       |

Each creation flow in the RotorVideosProvider can be configured with a checkout process, allowing users to add, remove, or view items in a shopping cart. To enable this functionality, you simply pass the `cartApi` prop to the provider with your custom cart handler functions.

#### 1. Implement Cart Handler Functions

First, create the cart functions you want to use for adding, removing, and opening the cart.
These can be your own functions, or those provided by your app's state management.

```js
import { useAppConfig } from '../AppConfig';

const {
    state: { partnerUserId, creationFlowVariant },
    api: { setIsCartOpen },
  } = useAppConfig();

  const { data: config, isLoading: isLoadingConfig } = useConfig();

  const addToCart = useAddCartItem();
  const removeFromCart = useRemoveCartItem();
  const openCart = useCallback(
    (_cartItem: CartItem) => {
      setIsCartOpen(true);
    },
    [setIsCartOpen]
  );
```

#### 2. Bundle the cart functions with useMemo

Use React's `useMemo` to bundle your cart functions into a single API object:

```js
import { useMemo } from 'react';

const cartApi = useMemo(
  () => ({
    addToCart,
    removeFromCart,
    openCart,
  }),
  [addToCart, removeFromCart, openCart]
);
```

#### 3. Pass the cartApi to the provider

Simply pass the `cartApi` object as a prop to the `RotorVideosProvider`.
This enables cart actions within all your active creation flows.

```js
<RotorVideosProvider
  {...rotorVideosConfig}
  mediaAssets={compactReleases}
  theme={releasesDemoTheme}
  cartApi={cartApi}
  creationFlows={[CreationFlow.motion, CreationFlow.canvas]}
  variant={CreationFlowVariant.lite}
  showDuplicateAction={false}
>
  {/* Your app content */}
</RotorVideosProvider>
```

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
  cartApi={cartApi}
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

## Cash Payment

When cash payment is enabled, all purchases are charged directly.

### Enabling Cash Payment

> **Enable cash payment by passing `enableCashPayment` to `RotorVideosProvider`**

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
      enableCashPayment={true} // This prop needs to be present and true to enable cash payment
    >
      {mediaAssets.map((asset) => (
        <RotorVideosSmartButton key={asset.id} providerReferenceId={asset.id} />
      ))}
    </RotorVideosProvider>
  );
};
```

Pass `enableCashPayment={true}` to `RotorVideosProvider`. This is mutually exclusive with `cartApi` and `enableInvoicePayment` — only one payment mode should be active at a time.

#### Parameters

| Prop Name         | Type    | Description                                                                              | Required | Default |
|-------------------|---------|------------------------------------------------------------------------------------------|----------|---------|
| enableCashPayment | boolean | Enables direct Stripe payment. Mutually exclusive with `cartApi` and `enableInvoicePayment`. | No   | false   |
