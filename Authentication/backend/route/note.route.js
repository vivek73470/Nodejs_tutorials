const express = require("express")
const NoteModal = require("../model/note.model")
const noteRoute = express.Router();

noteRoute.get('/', async (req, res) => {
    try {
        const notes = await NoteModal.find();
        return res.status(200).json(notes)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching notes", error: err.message });
    }
})

// single get details note 
noteRoute.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const note = await NoteModal.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        return res.status(200).json(note);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching note", error: err.message });
    }
});


noteRoute.post('/create', async (req, res) => {
    const payload = req.body
    try {
        const new_note = new NoteModal(payload)
        await new_note.save()
        return res.status(200).json({ message: "Note created successfully" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error creating note", error: err.message });
    }
})

noteRoute.patch('/update/:id', async (req, res) => {
    const payload = req.body
    const id = req.params.id
    try {
        await NoteModal.findByIdAndUpdate({ _id: id }, payload)
        return res.status(200).json({ message: "Note updated successfully" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Failed to update note", error: err.message });
    }
})

noteRoute.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        await NoteModal.findByIdAndDelete({ _id: id })
        return res.status(200).json({ message: "Note deleted successfully" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Failed to update note", error: err.message });
    }

})

module.exports = noteRoute;