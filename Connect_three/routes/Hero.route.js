const express = require("express")
const{HeroModal} = require("../models/Hero.model")

const heroRouter = express.Router()

heroRouter.get("/", async (req, res) => {
    let query = req.query
    // let language = req.query.language
    // let power = req.query.power
    try {
        // const heroes = await HeroModal.find({ language: language, power: power })
        const heroes = await HeroModal.find(query)

        res.send(heroes)
        console.log(heroes)
    }
    catch (err) {
        console.log(err)
        res.send("error went wrong getting")
    }

})

heroRouter.patch("/edit/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await HeroModal.findByIdAndUpdate({ _id: ID },payload)
        res.send(`updated hero data ${ID}`)
    }
    catch (err) {
        console.log(err)
        res.send("error while getting")
    }
})


heroRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id
    try {
        await HeroModal.findByIdAndDelete({ _id: ID })
        res.send(`deleted hero data ${ID}`)
    }
    catch (err) {
        console.log(err)
        res.send("error while getting")
    }
})



// this route is responsible for posting data
heroRouter.post("/add", async (req, res) => {
    const data = req.body
    try {
        // creating instance using Constructor 
        const hero = new HeroModal(data)
        await hero.save()
        console.log(hero)
        res.send("Added data")
    }
    catch (err) {
        console.log(err)
        res.send("error while posting")
    }

})


module.exports={
    heroRouter
}