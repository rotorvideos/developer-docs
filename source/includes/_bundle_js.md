# Bundle

## Installation

> **Add the script to the page**

```html
<html lang="en">
  <head>
    <title>App</title>
  </head>
  <body>
    <script src="rv-embeddable-1.0.0.js"></script>
    <script>
      // Use the Rotor Embeddable here
    </script>
  </body>
</html>
```

In order to download the JavaScript bundle, follow the steps below:

1. Follow the steps in the [React](#react) section to get the necessary credentials, obtain NPM Auth Token and create 
a `.npmrc` file.
2. In an empty folder run `npm init -y` to create a new `package.json` file.
3. Run `npm pack  @rotorvideos/web && tar -xzf *.tgz` to download the JavaScript bundle.
4. In the `package/dist` folder, you will find the `rv-embeddable-1.0.0.js` file.

In fact, the bundle uses React version of the Rotor Embeddable, with slightly different interface. See the
[React](#react) section for more information.

## Usage

> **Example**

```typescript
const commonConfig = {
  authConfig: {
    accessToken: 'your-access-token',
    clientId: 'your-client-id',
  },
  mediaAssets: [
    {
      id: 'partner-demo-track-1',
      providerName: 'partner-demo-api',
      artistName: 'Rotor Pretenders',
      releaseId: 'partner-demo-release-1',
      releaseType: 'single',
      releaseName: 'Rotor Pretenders Debut Album',
      releaseArtworkUrl: 'https://example.com/partner-demo-1/release-1-artwork.jpg',
      trackName: 'Track 1',
      artworkUrl: 'https://example.com/partner-demo-1/artwork.jpg',
      audioUrl: 'https://example.com/partner-demo-1/audio.mp3'
    },
  ],
};

RotorVideos.open({
  ...commonConfig,
  providerReferenceId: 'partner-demo-track-1',
});
```

The bundle exposes a global object `RotorVideos` that you can use to interact with the embeddable. It has the following methods:

| Prop Name   | Type                                                         | Description                                                     |
|-------------|--------------------------------------------------------------|-----------------------------------------------------------------|
| open        | (options: GlobalOpenOptions) => void                         | The function to open the Rotor Videos modal.                    |
| close       | () => void                                                   | The function to close the Rotor Videos modal.                   |
| smartButton | (element: Element, props: RotorVideosSmartButtonProps): void | The function to create a theme for the Rotor Videos components. |


### RotorVideos.open

> **GlobalOpenOptions Definition**

```typescript
type GlobalOpenOptions = RotorVideosProviderOptions & { providerReferenceId: string };
```

The `RotorVideos.open` method opens the Rotor Embeddable with the given configuration.
It accepts an object with the same properties as the React's [RotorVideosProvider](#react-rotorvideosprovider)
and an additional `providerReferenceId` property, to open the embeddable for a specific track.

### RotorVideos.close

The `RotorVideos.close` method closes the Rotor Embeddable.

### RotorsVideos.smartButton

> **Example**

```typescript
RotorVideos.smartButton(document.getElementById('div'), {
  providerReferenceId: 'partner-demo-track-1',
  as: 'button'
});
```

The `RotorVideos.smartButton` method creates a button in given DOM `element` that opens the Rotor Embeddable
with the same properties as the React's [RotorVideosSmartButton](#react-rotorvideossmartbutton).
