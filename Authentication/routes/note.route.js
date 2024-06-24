const express = require("express")
const NoteModel = require("../models/Note.model")
const noteRoute = express.Router()

noteRoute.get("/", (req, res) => {
    res.send("all notes")
})

noteRoute.post("/create", async (req, res) => {
    const payload = req.body
    try {
        const new_note = new NoteModel(payload)
        await new_note.save()
        res.send("created note")
    } catch (err) {
        console.log(err)
        res.send({"msg":"something went wrong"})
    }
    res.send("created note")
})

noteRoute.patch("/update/:id", (req, res) => {
    const payload = req.body
    res.send("updated note")
})

noteRoute.delete("/delete/:id", (req, res) => {
    res.send("deleted note")
})

module.exports = noteRoute