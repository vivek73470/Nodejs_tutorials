const express = require("express")
const teachersRoutes=require("./routes/teacher.route");
const studentRoutes=require("./routes/student.route");

const app = express();

app.use((req,res,next)=>{
    console.log("got request",req.query);
    if(!req.query.apiKey){
        return res. status(401).send("no API Key")
    }
    next();
})
app.get("/get",(req,res)=>{
    res.send("hello")
})

// app.use("/teachers", teachersRoutes)
// app.use("/student", studentRoutes)

app.listen(4000,()=>{
    console.log("running at port 4000")
})