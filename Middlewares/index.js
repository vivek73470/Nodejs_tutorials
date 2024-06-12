const express = require("express")
const fs = require("fs")

// const{timeLogger} = require("./middleware/timeLogger.middleware")
// const{watchMan} = require("./middleware/watchMan.middleware")


// const{logger}= require("./middleware/logger.middleware")
// const{addRoll}=require("./middleware/addRoll.middleware")

const{studentRouter}=require("./routes/student.route")
const{teacherRouter}=require("./routes/teacher.route")



const app = express();

app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)

// app.use(timeLogger)

app.use(express.json()) // inbuilt middleware
// app.use(logger)
// app.use(addRoll)

// app.use((req, res, next) => {
//     console.log("hello from middleware")
//     next();
//     console.log("bye from middlewares")
// })


// middlewares can access response object 
// app.use((req, res, next) => {
//   if("aman"==="aman"){
//     res.send("Aman is here ")
//   }else{
//       next();
//   }
// })


// manipulate request object 
// app.use((req, res, next) => {
//   if(req.url==="/contacts"){
//     next()
//   }else{
//     res.send("can't access route")
// }
// })



app.get("/", (req, res) => {
    console.log("welcome page")
    res.end("Home")
})

// app.get("/contacts", (req, res) => {
//     console.log("welcome page")
//     res.end("contact")
// })

// app.get("/about", (req, res) => {
//     console.log("welcome page")
//     res.end("About")
// })

// app.post("/newstudent",(req,res)=>{
//     console.log(req.body)
//     res.send("new student has been ended")
// })

// // app.use(timeLogger)
// app.get("/data", (req, res) => {
//    const data = fs.readFileSync("./dummy.txt","utf-8")
//     res.end(data)
// })

app.listen(3500, () => {
    console.log("port at 3500")
})