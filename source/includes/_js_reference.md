# JavaScript API

Alongside the REST API, we provide the [Iframe](#iframe) library,
`@rotorvideos/iframe`, which embeds the Rotor video creator into your own pages
so your users never leave your platform to make a video. It uses the
[server-side integration](#get-started) above to get User Access Tokens.

The embed loads the video creator from Rotor, so you get new features and fixes
without upgrading anything, and there is no application code to pull into your
build.

<aside class="warning">
The <a href="#react-deprecated">React</a> (<code>@rotorvideos/react</code>) and
<a href="#bundle-deprecated">Bundle</a> (<code>@rotorvideos/web</code>) libraries
are deprecated. From 1 January 2027 they will no longer receive new features or
fixes. Existing integrations will keep working, but to get new features you need
to move to the Iframe. See
<a href="#iframe-migrating-from-react-or-bundle">Migrating from React or Bundle</a>.
</aside>
