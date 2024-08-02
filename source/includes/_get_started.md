# Get Started

There are two parts to integrating with Rotor Videos:

1. **Server-side Integration** - Retrieve an individual user's OAuth access token using the Partner's credentials.

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

### Access Token

In order to authorize requests, the component requires a valid OAuth Access Token for each user. The OAuth Access Token is obtained from the server-side integration (as mentioned above), which can be loaded upon session creation, or upon the loading of the page you wish to embed the component.
