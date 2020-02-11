# Next Passport Auth

From a tutorial from May 14, 2019 \
[Link](https://auth0.com/blog/next-js-authentication-tutorial/) \
An exercise on building a Next.js application with authentication using passport.js.



## Packages and descriptions
> `body-parser`: This package lets your Express application parse different types of request bodies (e.g., application/json) \
> `dotenv`: This package helps you read environment variables from a file. \
> `dotenv-webpack`: This package allows you to adjust some of the settings of Next.js. \
> `express`: This package will allow you to define a backend app more easily. \
> `isomorphic-fetch`: This package adds an isomorphic fetch function that you can use both on the frontend and the backend. \
> `next`, `react`, and `react-dom`: Together, these packages let you build React apps that support server-side rendering. \
> `@zeit/next-sass`, `node-sass`, `next-compose-plugins`: Together, this allows me to use node-sass and an easier way to deal with the config file \
> `passport`, `passport-auth0`, `express-session`: Passport auth using auth0. \
> `uid-safe`: using uid-safe to generate a safe secret to hash cookies. \
> `connect-ensure-login`: used to verify local strategy login


## Configuration
`.babelrc` \
At this point, the .babelrc can be removed, as Next.js will then automatically use next/babel when there is no Babel configuration.

If you are using styled components, this may be necessary. So maybe you need it if you are using bootstrap, as well. 

`next.config.js` \
Major configuration tool for Next.js. This one is not as advanced as the next portfolio project but includes options explicitely for dotenv, which is new.

`.env` \
Environment variables. Declaring port as 3000 is kinda like wearing suspenders with a belt, what whatever.



## Pages
`index.js` in `src/pages` \
The root url page.

`_document.js` \
A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.

`_app.js` \
Adding a custom getInitialProps in your App will disable Automatic Static Optimization.


## Passport
Passport offers different strategies that you can use for authentication. Auth0 configuration is setup. Passport-local is also installed as an alternative strat.


## Experiment
Try building out a sqlite database with the app that can be deployed all in one. A monolith.
