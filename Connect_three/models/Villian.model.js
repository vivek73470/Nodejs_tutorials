
const mongoose = require("mongoose")

const villianSchema= new mongoose.Schema({
    name:{type:String, default:null},
    city:{type:String, default:null},
    state:{type:String, default:null},
    })

    const VillianModal = mongoose.model("villian",villianSchema)

    module.exports=VillianModal
    