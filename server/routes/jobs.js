const express=require("express");
const router=express.Router();
const {JobsTable}=require("../models");

router.get("/",async(req,res)=>{
    const listOfJobs=await JobsTable.findAll();
    res.json(listOfJobs)
})
router.post("/",async(req,res)=>{
    const job=req.body;
    await JobsTable.create(job);
    res.json(job)
})
module.exports=router

//const express = require("express");
//const router = express.Router();
//const { Poster } = require("../models")
//
//router.get("/", async (req, res) => {
//    const listOfPosters = await Poster.findAll();
//    res.json(listOfPosters)
//
//})
//router.post("/", async (req, res) => {
//    const poster= req.body;
//    await Poster.create(poster);
//    res.json(poster)
//})
//module.exports = router