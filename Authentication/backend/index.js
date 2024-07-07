const express = require("express");
const studentRoute = require("./route/student.route")
const userRoute = require("./route/user.route")
const noteRoute = require("./route/note.route")
const authenticate = require('./middleware/authenticate.middleware')
const connection = require('./config/db')
const cors = require("cors")


require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/student", studentRoute)
app.use("/user", userRoute)

app.use(authenticate)
app.use("/note", noteRoute)



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log(`running at port ${process.env.port}`)
})