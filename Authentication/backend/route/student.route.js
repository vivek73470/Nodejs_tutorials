const express = require("express")
const StudentModal = require('../model/student.modal')

const studentRoute = express.Router();

studentRoute.get('/', (req, res) => {
    return res.send("welcome student")
})

studentRoute.post("/add", async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        const hero = new StudentModal(data)
        await hero.save()
        return res.send("added student")
    }
    catch (err) {
        console.log(err)
        return res.send("error while adding student")
    }
})

studentRoute.patch('/update/:id', async (req, res) => {
    const Id = req.params.id;
    const payload = req.body
    console.log(Id)
    console.log(payload)
    try {
        await StudentModal.findByIdAndUpdate(Id, payload)
        return res.send(`updated student data ${Id}`)
    } catch (err) {
        console.log(err)
        return res.send("error while updating student")
    }

})

studentRoute.delete('/delete/:id', async (req, res) => {
    const Id = req.params.id;
    console.log(Id)
  
    try {
        await StudentModal.findByIdAndDelete(Id)
        return res.send(`deleted student data ${Id}`)
    } catch (err) {
        console.log(err)
        return res.send("error while deleted student")
    }

})


module.exports = studentRoute