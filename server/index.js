const express = require("express");
const app = express();
const cors=require("cors")
app.use(express.json());
app.use(cors())
const path=require('path');
const multer=require("multer");

const storage=multer.diskStorage({
    destination:`${__dirname}/uploads`,
    filename:(req,file,cb)=>{
        const fileName=`${Date.now()}${path.extname(file.originalname)}`;
        cb(null,fileName)
    }
})
const uploadImage=multer({storage}) //middlware
const db = require("./models")

const posterRouter=require("./routes/Poster"); 
app.use('/posters',posterRouter)

const jobsRouter=require("./routes/jobs");
app.use("/jobs",jobsRouter);
const usersRouter=require("./routes/Users");
app.use('/auth',usersRouter)
const carsRouter=require("./routes/cars");
app.use("/cars",carsRouter);
const electronicsRouter=require("./routes/electronics");
app.use("/electronics",electronicsRouter);

app.post("/uploadImage", uploadImage.array("imageToUpload",4),(req,res)=>{
  // console.log(req.files.length) / sended images count
   res.send(req.files) // sends images info
    //   if(req.file) return res.json(req.file.filename)
   
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running port 3001")
    })
})

