# Express Spa

Express SPA doesn't care what you're framework or library of choice is, Angular,
React, or something else it just provides a simple Express server that can be used
in both development and production for any Single Page Apps.

## Routing
Express SPA sends all traffic `dist/index.html` with the assumption that that SPA
will handle all routing for the app. This also allows use of pretty, non-hashed,
URLs by default.
