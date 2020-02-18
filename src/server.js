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
const LocalStrategy = require('passport-local').Strategy;
// const jwt = require("jsonwebtoken");
// const verifyPassword = require("./middleware/verifyPassword");
// Database
const db = require("./data/models");
const UsersDb = require("./data/connection");
// Routes
// const auth0Routes = require("./api/auth0-routes");
const authApi = require("./api/auth");
const thoughtsApi = require("./api/thoughts");
const profileApi = require("./api/profile");
const skillsApi = require("./api/skills");

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

    // 4 - Alternate configuring Passport
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser((user, done) => {
        done(null, user.id);
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


    // const findById = (id, cb) => {
    //     process.nextTick(() => {
    //         let idx = id - 1;
    //         if (records[idx]) {
    //             cb(null, records[idx]);
    //         } else {
    //             cb(new Error("User " + id + " does not exist"));
    //         }
    //     });
    // };
    

    // 3 - Alternate local strategy
    // The local strategy require a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    // passport.use(new LocalStrategy(
    //     (username, password, done) => {
    //         db.users.findByUsername(username, (err, user) => {
    //             if (err) { return done(err); }
    //             if (!user) { return done(null, false); }
    //             if (user.password != password) { return done(null, false); }
    //             return done(null, user);
    //         });
    //     }
    // ));
    const checkUserExists = async (username) => {
        const findById = await UsersDb("users")
            .where({ username: username })
            .first();
        if(findById) {
            return findById
        } else {
            return { message: "No user exists" }
        }
    }
    passport.use(new LocalStrategy(
        (username, password, done) => {
            checkUserExists(username)
            .then(user => {
                if (!user || user.password != password) {
                    done(null, false, { message: "Invalid username/password" });
                } else {
                    done(null, user);
                }
            })
            .catch(e => done(e));
        })
    )


    // Routes
    // server.use(auth0Routes);
    server.use(authApi);
    server.use(thoughtsApi);
    server.use(profileApi);
    server.use(skillsApi);

    // 6 - you are restricting access to some routes
    const restrictAccess = (req, res, next) => {
        // if (!req.isAuthenticated()) return res.redirect("/login");  // Auth0
        if (!connectEnsureLogin.ensureLoggedIn()) return res.redirect("/login");
        next();
    };

    server.use("/thoughts", restrictAccess);
    server.use("/share-thought", restrictAccess);

    // handling everything else with Next.js
    server.get("*", handle);

    http.createServer(server).listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
});
