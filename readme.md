# Express Spa

Express Spa doesn't care what you're framework or library of choice is, Angular,
React, or something else it just provides a simple Express server that can be used
in both development and production for any Single Page Apps.

## Routing
Express Spa sends all traffic `public/index.html` with the assumption that that
the SPA will handle all routing for the app. This also allows use of pretty,
non-hashed, URLs by default. (However, a history plugin may be required based on
your framework of choice.)

## Typescript
Express Spa uses Typescript by default, however based on the library or framework
of choice the `.d.ts` files need to be installed. For `.d.ts` installs you will
need [Typings](https://github.com/typings/typings) installed globally on your development
machine.

Any project specific definitions can be add to the `project.d.ts` file. Do not
remove the definitions that are alreayd included, they are need to make HMR and
Webpack DefinePlugin work without errors.

## .ENV File
Express Spa uses a `.env` file to handle all environment variables. `.env` file
are ignored from getting committed into any repo. During the setup command the
sample `.env.example` file will be copy and renamed to `.env`.

Add enivronment specific variables as need. Exampes being: database connections, API
credentials or anything else you need to reference through out the application.

### Default Variables
- `NODE_ENV=development`
- `MORGAN=combined`
- `TYPESCRIPT=true`

## Setup & Usage

### NVM
Express Spa uses [NVM](https://github.com/creationix/nvm) to control specific Node version via the `.nvmrc` file. Whenever a project is started define the Node version that you are planning to use in the `.nvmrc` file. Then upgrade as you needed when your project grows.

### NPM
By default Express Spa when an NPM package is installed the exact version will be saved into the `package.json` file. This helps prevent package updates from introducing breaking changes
into you build. This bahavior is controlled by the `.npmrc` file.

### Setup
- Node.js via [NVM](https://github.com/creationix/nvm) must be installed
- Clone this repo
- Run `npm setup` - This setup up the project and only need one time.
- Run `npm start`
`npm start` will configure the server based on the variables that are set in the `.env` file.

## SCSS
In progress.
