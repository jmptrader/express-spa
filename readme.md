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
need (Typings)[https://github.com/typings/typings] installed globally on your development
machine.

## .ENV File
Express Spa uses a `.env` file to handle all environment variables. `.env` file
are ignored from getting committed into any repo. During the setup command the
sample `.env.example` file will be copy and renamed to `.env`.

Add enivronment specific variables as need. Exampes being: database connections, API 
credentials or anything else you need to reference through out the application. 

### Default Variables
`NODE_ENV=development`
`MORGAN=combined`
`TYPESCRIPT=true`

## Setup & Usage
- Node.js must be installed
- Clone this repo
- Run `npm setup` - This setup up the project and only need one time.
- Run `npm start`

`npm start` will configure the server based on the variables that are set in the
`.env` file. 

## SCSS
In progress. 


