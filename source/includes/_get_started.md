# Get Started

There are two parts to integrating with Rotor Videos:

1. **Server-side Integration** - Server-to-server communication, such as User Registration, Finalize Order, etc.
2. **Client-side Integration** - The React/Javascript component, built by Rotor Videos, to consume the API and allow you
   to embed video creation flows into your artists' dashboards.

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
      remote_user_id: `${userUID}`
    }
  }
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

```

All sessions using the Rotor API start by having the Partner use their OAuth client credentials to make a
server-to-server request for a User level access token for use in Rotor Client, thus associating the user ID from the
Partner’s platform with a managed User object and Account on the Rotor platform.

This user's OAuth Access Token is then used to initialize the Rotor Client component and will be used for all subsequent
Rotor API calls in the user's session, from the browser.

### User Registration

The user registration/signin request is authorized with the Partner's access token, and the response will be an access
token scoped to the User.

The first time the `register` endpoint is called, it will create the managed user on Rotor and then return an access
token for that managed user. Subsequent calls to `register` will simply return an access token for the existing managed
user.

See the <a href='#authentication'>Authentication Section</a> for more details on the register endpoint.

![User Registration Flow](embeddable-user-registration.png "User Registration Flow")

### Access Token

In order to authorize requests, the Rotor Client requires a valid OAuth Access Token for each user. The OAuth Access
Token is obtained from the server-side integration (as mentioned above), which can be loaded upon session creation, or
upon the loading of the page you wish to embed the component.

### Final Video Transaction flow

In order to finalize a transaction, the Rotor Client will make a request to the Rotor API to create a new Order. The
Order will be created with the User's access token, and the response will contain the Order UUID, which can be used to
finalize the order.

See the <a href='#orders-finalize-single-order'>Finalize Order</a> for more details on the finalize endpoint.

![Final Video Transaction flow](embeddable-integration-checkout.png "Final Video Transaction flow")

## Client-side Integration

> **An example React app with Rotor Client**

```jsx
import {RotorVideosProvider, RotorVideosSmartButton} from '@rotorvideos/react';

const App = () => {
  const authConfig = {
    accessToken: 'user-access-token',
    clientId: 'partner-app-client-id',
  }

  const availableTracks = [
    {
      id: 'partner-demo-track-1',
      ...
    }
  ]

  return (
    <RotorVideosProvider
      authConfig={authConfig}
      availableTracks={availableTracks}
    >
      {availableTracks.map(track => (
        <RotorVideosSmartButton key={track.id} providerReferenceId={track.id}/>
      ))}
    </RotorVideosProvider>
  );
}

```

In order to make it as easy as possible to integrate Rotor Videos into your platform, we have componentized some of the
tools you see on rotorvideos.com, into easy to embed javascript widgets. The components are built using React, but we
also provide a native javascript bundle and interface.

Through the embeddable, we ingest an artist's data, including Releases, Tracks, and accompanying assets. We use these in
the background to feed the video creation process.

See the <a href='#orders-finalize-single-order'>Finalize Order</a> for more details.

