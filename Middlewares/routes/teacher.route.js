const express = require("express")
const teacherRouter = express.Router()

teacherRouter.get("/teachers",(req,res)=>{
    res.send("All students")
})

teacherRouter.post("/addteachers",(req,res)=>{
    console.log(req.body)
    res.send("added students")
})

module.exports={teacherRouter}