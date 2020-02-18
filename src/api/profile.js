const bodyParser = require("body-parser");
const express = require("express");
const db = require("../data/connection");

const router = express.Router();

router.use(bodyParser.json());

router.get("/api/profile", async (req, res) => {
    const allProfile = await db("profile");
    const allskills = await db("skills");

    if (allProfile && allskills) {
        try {
            if (allProfile.length === 0 || allskills.length === 0) {
                return res.status(200).json({ message:"No skills or profile found" });
            }
            res.status(200).json({ profile: allProfile, skills: allskills });
        } 
        catch (error) {
            res.status(500).json({ message: "No skills or profile could be retrieved.", error });
        }
    }
})


module.exports = router;
