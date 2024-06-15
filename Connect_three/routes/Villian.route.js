
const express = require("express")
const{VillianModal} = require("../models/Villian.model")

const villianRoute = express.Router()



villianRoute.post("/add", async (req, res) => {
    const data = req.body
    try {
        // creating instance using Constructor 
        const villian = new VillianModal(data)
        await villian.save()
        res.send("Added data")
    }
    catch (err) {
        console.log(err)
        res.send("error while posting")
    }

})

module.exports={
    villianRoute
}