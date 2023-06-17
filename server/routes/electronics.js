const express=require("express");
const router=express.Router();
const {ElectronicsTable}=require("../models");

router.get("/", async(req,res)=>{
    const listOfElectronics=await ElectronicsTable.findAll();
    res.json(listOfElectronics)
})
router.post("/", async(req,res)=>{
    const electronic=req.body;
    await ElectronicsTable.create(electronic);
    res.json(electronic)
})
module.exports=router;


//const express=require("express");
//const router=express.Router();
//const {CarsTable}=require("../models");
//
//router.get("/",async(req,res)=>{
//    const listOfCars=await CarsTable.findAll();
//    res.json(listOfCars);
//})
//router.post("/", async(req,res)=>{
//    const car=req.body;
//    await CarsTable.create(car);
//    res.json(car)
//})
//module.exports=router;
//