const express = require("express");
const router = express.Router();
const { Poster } = require("../models")

router.get("/", async (req, res) => {
    const listOfPosters = await Poster.findAll();
    res.json(listOfPosters)

})
router.post("/", async (req, res) => {
    const poster= req.body;
    await Poster.create(poster);
    res.json(poster)
})
module.exports = router