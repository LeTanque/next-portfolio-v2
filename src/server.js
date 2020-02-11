require("dotenv").config();
const express = require("express");
// 1 - importing dependencies
const helmet = require("helmet");
const cors = require("cors");
const http = require("http");
const next = require("next");
const bodyParser = require("body-parser");
const session = require("express-session");
// Passport and auth
// const Auth0Strategy = require("passport-auth0");
// const uid = require("uid-safe");
const connectEnsureLogin = require("connect-ensure-login");
const passport = require("passport");
const Strategy = require('passport-local').Strategy;
// Database
const db = require("./data/models");
// Routes
// const auth0Routes = require("./api/auth0-routes");
const authRoutes = require("./api/auth-routes");
const thoughtsAPI = require("./api/thoughts-api");

const dev = process.env.NODE_ENV !== "production";
const app = next({
    dev,
    dir: "./src"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Put on your helmet
    server.use(helmet());
    // Use Cors
    server.use(cors());
    // // Body parse
    server.use(bodyParser());

    // 2 - add session management to Express
    const sessionConfig = {
        // secret: uid.sync(18), // auth0
        // saveUninitialized: true, // auth0
        secret: process.env.SECRET,
        cookie: {
            maxAge: 86400 * 1000 // 24 hours in milliseconds
        },
        resave: false,
        saveUninitialized: false,
    };
    server.use(session(sessionConfig));

    // // 3 - configuring Auth0Strategy
    // const auth0Strategy = new Auth0Strategy(
    //     {
    //         domain: process.env.AUTH0_DOMAIN,
    //         clientID: process.env.AUTH0_CLIENT_ID,
    //         clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //         callbackURL: process.env.AUTH0_CALLBACK_URL
    //     },
    //     function(accessToken, refreshToken, extraParams, profile, done) {
    //         return done(null, profile);
    //     }
    // );
    // passport.use(auth0Strategy);
    // // 4 - configuring Passport
    // passport.serializeUser((user, done) => done(null, user));
    // passport.deserializeUser((user, done) => done(null, user));


    // 3 - Alternate local strategy
    // The local strategy require a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(new Strategy(
        (username, password, done) => {
            db.users.findByUsername(username, (err, user) => {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (user.password != password) { return done(null, false); }
                return done(null, user);
            });
        }
    ));
    // 4 - Alternate configuring Passport
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        db.users.findById(id, (err, user) => {
            if (err) { return cb(err); }
                cb(null, user);
            });
    });
    

    

    // 5 - adding Passport and authentication routes
    // Initialize Passport and restore authentication state, if any, from the
    // session.
    server.use(passport.initialize());
    server.use(passport.session());

    // Routes
    // server.use(auth0Routes);
    server.use(authRoutes);
    server.use(thoughtsAPI);

    // 6 - you are restricting access to some routes
    const restrictAccess = (req, res, next) => {
        // if (!req.isAuthenticated()) return res.redirect("/login");  // Auth0
        if (!connectEnsureLogin.ensureLoggedIn()) return res.redirect("/login");
        next();
    };

    server.use("/profile", restrictAccess);
    server.use("/share-thought", restrictAccess);

    // handling everything else with Next.js
    server.get("*", handle);

    http.createServer(server).listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
});
