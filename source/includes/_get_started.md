# Get Started

There are two parts to integrating with Rotor Videos:

1. **Server-side Integration** - Retrieve an individual user's OAuth access token using the Partner's credentials.
2. **Client-side Integration** - The Rotor React component, built by Rotor Videos, to consume the API and allow partners to embed video creation flows into their artists' dashboards.

## Server-side Integration
> **An example Node app handling the server requests**

```javascript
const fetch = require('node-fetch');
const userUID = require('yargs').argv._[0];

const apiEndpoint = 'https://api.rotorvideos.com'
const clientId = process.env.ROTORVIDEOS_APP_CLIENT_ID;
const clientSecret = process.env.ROTORVIDEOS_APP_CLIENT_SECRET;

const userIDBody = {
  data: {
    type: "user",
    attributes: {
      user_uid: `${userUID}`
    }
  }
}

// Create or Find User based on Partner's unique user id.
function handleAuthorizeUserCallback(body){
  return fetch(`${apiEndpoint}/api/partner/v1/register`, {
    method: 'POST',
    body: JSON.stringify(userIDBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${body.token_type} ${body.access_token}`
    }
  })
  .then(res => {
    if(res.ok){
      return res.json();
    } else {
      throw Error(res.statusText);
    }
  })
  .then(jsonResponse => {
    console.log(jsonResponse);
  })
  .catch(e => console.error(e));
}


// Partner App Authentication
const params = new URLSearchParams();
params.append('grant_type', 'client_credentials');

fetch(`${apiEndpoint}/oauth/token`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${Buffer.from(clientId + ':' + clientSecret).toString('base64')}`
  },
  body: params
})
.then(res => {
  if(res.ok){
    return res.json();
  } else {
    throw Error(res.statusText);
  }
})
.then(jsonResponse => {
  console.log(jsonResponse);
  handleAuthorizeUserCallback(jsonResponse);
})
.catch(e => console.error(e));

```

All sessions using the Rotor API start by having the Partner use their OAuth client credentials to make a server-to-server request for a User level access token for use in Rotor React, thus associating the user ID from the Partner’s platform with a managed User object and Account on the Rotor platform.

This user's OAuth Access Token is then used to initialize the Rotor React component and will be used for all subsequent Rotor API calls in the user's session, from the browser.

### User Registration

The user registration/signin request is authorized with the Partner's access token, and the response will be an access token scoped to the User.

The first time the `register` endpoint is called, it will create the managed user on Rotor and then return an access token for that managed user. Subsequent calls to `register` will simply return an access token for the existing managed user.


See the <a href='#authentication'>Authentication Section</a> for more details on the register endpoint.

## Client-side Integration
> **Example React app embedding Rotor React**

> The following example shows how Rotor React is easily embedded into an existing page, listing the tracks, providing a "Videos" button for each track. This button will open a modal to the video creation flows the component provides.

```javascript
import React from 'React'

import { RotorVideosProvider, RotorVideosButton } from 'rotor-react';
import 'rotor-react/dist/index.css';

import useStorage from './useStorage';

const ExampleArtistTrackList = ( tracks ) => {

  const [rotorAccessToken, setRotorAccessToken] = useStorage(
    `${window.location.href}-rotorAccessToken`
  );

  return (
    <RotorVideosProvider accessToken={rotorAccessToken}>
      {tracks && tracks.map((track) => (
        <>
          <h2>{track.trackName}</h2>
          <RotorVideosButton
            artistName={track.artistName}
            artworkUrl={track.artworkUrl}
            audioUrl={track.audioUrl}
            trackName={track.trackName}
            trackId={track.id}
          />
        </>
      ))}
    </RotorVideosProvider>
  )
}
```

The React component has been built to integrate into an existing React app, such as an artist's track list page.

Video Creation is on a per track basis. When the `<RotorVideosButton />` component is loaded for each track, we sent the track and metadata to Rotor API for analysis. We use the data we gather to automate part of the process.

> **To install the Rotor React component, you can use the following:**

```shell
$ npm install --save rotor-react

# or if you use yarn...
$ yarn add --dev rotor-react
```

### Access Token

In order to authorize requests, the component requires a valid OAuth Access Token for each user. The OAuth Access Token is obtained from the server-side integration (as mentioned above), which can be loaded upon session creation, or upon the loading of the page you wish to embed the component.
