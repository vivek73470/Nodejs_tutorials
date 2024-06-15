const mongoose = require("mongoose")

// this is not constructor so h is small
const heroSchema= mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villian:String,
    language:String,
    is_active:Boolean
    })
    
    // my modal is constructor fn and hero is collection
    //  and i need schema to create modal
    const HeroModal = mongoose.model("hero",heroSchema)

    module.exports={
        HeroModal
    }