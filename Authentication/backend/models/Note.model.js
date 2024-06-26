const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    note:String,
    category:String,
    userID:String
    // userID:{type: mongoose.Schema.Types.ObjectId}
})

const NoteModel = mongoose.model("note",noteSchema)

module.exports = NoteModel