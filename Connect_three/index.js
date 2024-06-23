const express = require("express")
const { connection} = require("./config/db")
const{heroRouter} = require("./routes/Hero.route")
const{villianRoute} = require("./routes/Villian.route")


require('dotenv').config()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use("/heroes",heroRouter)
app.use("/villian",villianRoute)



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to db")
    }
    catch (err) {
        console.log("error while connecting to db")
        console.log(err)
    }
    console.log(`server is running at port  ${process.env.port}`)
})