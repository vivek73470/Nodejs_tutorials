// for connecting we can do these without schema and modal

const mongoose = require("mongoose")
require('dotenv').config()

// const connection = mongoose.connect("mongodb+srv://vivek:yadav@cluster0.qknq6ri.mongodb.net/superheroes?retryWrites=true&w=majority&appName=Cluster0")
const connection = mongoose.connect(process.env.mongoURL)



module.exports={
    connection,
}