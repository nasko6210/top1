const express=require("express");
const router=express.Router();
const {CarsTable}=require("../models");

router.get("/",async(req,res)=>{
    const listOfCars=await CarsTable.findAll();
    res.json(listOfCars);
})
router.post("/", async(req,res)=>{
    const car=req.body;
    await CarsTable.create(car);
    res.json(car)
})
module.exports=router;


//const express=require("express");
//const router=express.Router();
//const {JobsTable}=require("../models");
//
//router.get("/",async(req,res)=>{
//    const listOfJobs=await JobsTable.findAll();
//    res.json(listOfJobs)
//})
//router.post("/",async(req,res)=>{
//    const job=req.body;
//    await JobsTable.create(job);
//    res.json(job)
//})
//module.exports=router
//