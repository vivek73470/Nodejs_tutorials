const mongoose = require("mongoose")

// this is not constructor so h is small
const heroSchema= new mongoose.Schema({
    name:{type:String, default:null},
    city:{type:String, default:null},
    language:{type:String, default:null},
    is_active:{type:Boolean, default:null},
    })
    
    // my modal is constructor fn and hero is collection
    //  and i need schema to create modal
    const HeroModal = mongoose.model("hero",heroSchema)

    module.exports= HeroModal