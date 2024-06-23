const mongoose = require("mongoose")

const userSchem = mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:Number
})

const UserModel = mongoose.model("user",userSchem)

module.exports = UserModel