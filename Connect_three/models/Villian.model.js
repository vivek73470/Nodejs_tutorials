
const mongoose = require("mongoose")

const villianSchema= mongoose.Schema({
    name:String,
    city:String
    })

    const VillianModal = mongoose.model("villian",villianSchema)

    module.exports={
       VillianModal
    }