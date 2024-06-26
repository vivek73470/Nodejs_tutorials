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
        res.send({ "msg": "something went wrong" })
    }
});

noteRoute.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id
    const note =await NoteModel.findOne({_id:id})
    const userID_in_note=note.userID
    const userID_making_req =req.body.userID;
    console.log("note",note)
    console.log("request man",userID_making_req)
    console.log("note id",userID_in_note)
    try {
       if(userID_making_req !== userID_in_note){
        return res.status(403).send({ "msg": "You are not authorized to update this note" });
       }else{
           await NoteModel.findByIdAndUpdate({"_id": id }, payload)
           return res.send("Updated note successfully");
       }

    } catch (err) {
        console.log(err)
       return res.status(500).send({ "msg": "Something went wrong" });
    }
});

// const existingAchiever = await Achievers.findById(
//     req.params.achieverId,
//   );

//   if (!existingAchiever) {
//     return res.json({ status: false, msg: 'Achiever not found' });
//   }
//   Object.assign(existingAchiever, req.body);
//   await existingAchiever.save();

noteRoute.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    const note =await NoteModel.findOne({"_id":id})
    const userID_in_note=note.userID
    const userID_making_req = req.body.userID
    try {
        if(userID_making_req!==userID_in_note){
         res.send({"msg":"you are not authorize"})
        }else{
            await NoteModel.findByIdAndDelete({"_id": id })
            res.send("Deleted note")
        }
 
     } catch (err) {
         console.log(err)
         res.send({ "msg": "something went wron" })
     }
});

module.exports = noteRoute