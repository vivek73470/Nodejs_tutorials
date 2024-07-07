const mongooose = require("mongoose")

const note = new mongooose.Schema({
    title:{type:String, default:null},
    note:{type:String, default:null},
    category:{type:String, default:null}
})

const NoteModal = mongooose.model("Note",note)

module.exports = NoteModal;