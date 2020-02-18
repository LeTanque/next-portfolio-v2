const bodyParser = require("body-parser");
const express = require("express");
const db = require("../data/connection");

const router = express.Router();

router.use(bodyParser.json());

router.get("/api/skills", async (req, res) => {
    try {
        const allskills = await db('skills');

        if (allskills.length === 0) {
            return res.status(200).json({ message:"No skills found" });
        }
        res.status(200).json(allskills);
    } 
    catch (error) {
        res.status(500).json({ message: "No skills could be retrieved.", error });
    }
})


module.exports = router;
