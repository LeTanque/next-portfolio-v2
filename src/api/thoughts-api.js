const bodyParser = require("body-parser");
const express = require("express");
const db = require("../data/connection");

const router = express.Router();

router.use(bodyParser.json());

router.get("/api/thoughts", async (req, res) => {
    try {
        const allThoughts = await db('thoughts');
        if (allThoughts.length === 0) {
            return res.status(200).json({ message:"No thoughts found" });
        }
        res.status(200).json(allThoughts);
    } 
    catch (error) {
        res.status(500).json({ message: "No thoughts could be retrieved.", error });
    }
})

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
}

router.post("/api/thoughts", ensureAuthenticated, async (req, res) => {
    if (!req.body.message) return res.status(400).json({ message: "Please include a message" })
    try {
        const post = await db("thoughts")
        .returning([ "id" ])
        .insert({ ...req.body, author: req.user.displayName });
        return res.status(200).json({ message: "Thought created", post }); 
    } catch (error) {
        res.status(500).json({ message: "Think again.", error });
    }
})


module.exports = router;
