const mongooose = require("mongoose")

const student = new mongooose.Schema({
    name:{type:String, default:null},
    city:{type:String, default:null}
})

const StudentModal = mongooose.model("Student",student)

module.exports = StudentModal;