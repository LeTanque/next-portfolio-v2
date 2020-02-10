# Next Passport Auth

From a tutorial from May 14, 2019 \
[Link](https://auth0.com/blog/next-js-authentication-tutorial/) \
An exercise on building a Next.js application with authentication using passport.js.




### Packages and descriptions
> `body-parser`: This package lets your Express application parse different types of request bodies (e.g., application/json) \
> `dotenv`: This package helps you read environment variables from a file. \
> `dotenv-webpack`: This package allows you to adjust some of the settings of Next.js. \
> `express`: This package will allow you to define a backend app more easily. \
> `isomorphic-fetch`: This package adds an isomorphic fetch function that you can use both on the frontend and the backend. \
> `next`, `react`, and `react-dom`: Together, these packages let you build React apps that support server-side rendering.

### Configuration

`.babelrc` \
At this point, the .babelrc can be removed, as Next.js will then automatically use next/babel when there is no Babel configuration.

If you are using styled components, this may be necessary. So maybe you need it if you are using bootstrap, as well. 

`next.config.js` \
Major configuration tool for Next.js. This one is not as advanced as the next portfolio project but includes options explicitely for dotenv, which is new.

`.env` \
Environment variables. Declaring port as 3000 is kinda like wearing suspenders with a belt, what whatever.


### Pages

`index.js` in `src/pages` \
The root url page.

`_document.js` \
A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.

