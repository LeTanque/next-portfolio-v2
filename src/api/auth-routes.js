const express = require("express");
const passport = require("passport");

const router = express.Router();


// Define routes
router.post("/login", passport.authenticate("local", { 
        successReturnToOrRedirect: '/',
        failureRedirect: "/login",
        failureFlash: true
    })
);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;
