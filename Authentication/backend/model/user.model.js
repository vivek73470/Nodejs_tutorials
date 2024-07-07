const mongooose = require("mongoose")

const user = new mongooose.Schema({
    name:{type:String, default:null},
    email:{type:String, default:null},
    pass:{type:String, default:null}
})

const UserModal = mongooose.model("User",user)

module.exports = UserModal;