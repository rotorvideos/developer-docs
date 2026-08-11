# JavaScript API

Alongside the REST API, we provide client-side libraries that embed the Rotor
video creator into your own pages, so your users never leave your platform to
make a video.

There are three ways to integrate. All of them use the same
[server-side integration](#get-started) and the same User Access Tokens.

| Integration       | Use it when                                                              | How you get it                                                   |
|-------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------|
| [Iframe](#iframe) | **Recommended for new integrations.** Any site, with or without React.   | Public npm package, or a script tag. No credentials needed.       |
| [React](#react)   | The creator needs to run inside your own React application.              | Private npm registry, using a token from your Partner Dashboard.  |
| [Bundle](#bundle) | The same, on a page that isn't a React application.                      | Private npm registry, using a token from your Partner Dashboard.  |

The [Iframe](#iframe) embed loads the video creator from Rotor, so you get new
features and fixes without upgrading anything, and there is no application code
to pull into your build. The [React](#react) and [Bundle](#bundle) libraries run
the creator inside your own application, which means pinning a version of our
application and its dependencies alongside yours.

<aside class="notice">
The React and Bundle libraries remain fully supported. If you are already using
one of them, there is nothing you need to do.
</aside>
