const {Router}= require("express");

const student = Router();

student.post("/create",(req,res)=>{
    res.send("create")
});

student.put("/update",(req,res)=>{
    res.send("update")
});

student.get("/get",(req,res)=>{
    res.send("get")
});

student.delete("/delete",(req,res)=>{
    res.send("delete")
});

module.exports=student;