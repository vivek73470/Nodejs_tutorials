const express = require("express")
const connection = require("./config/db")
const UserModel = require("./models/user.model")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome")
})

app.post("/register", async (req, res) => {
    const payload = req.body
    try {
        const user = new UserModel(payload)
        await user.save();
        res.send("registerd")
    } catch (err) {
        console.log("error in the user")
        console.log(err)
    }
})

app.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.find({ email, pass })
        const token = jwt.sign({ course: 'backend' }, 'masai');
        if (user.length > 0) {
            res.send({ "msg": "login successfully", "token": token })

        }
        else {
            res.send("wrong credentials")
        }
    } catch (err) {
        res.send("something wrong")
        console.log(err)

    }
})

app.get("/data", (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded) => {
        if(err){
            res.send("invalid token")
            console.log(err) 
        }else{
            res.send("data..")
        }
      });

})

app.get("/cart", (req, res) => {
    const token = req.query.token
    if (token === "abc123") {
        res.send("data..")

    } else {
        res.send("login first")
    }
})


app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log("trouble connecting to db")
        console.log(err)
    }
    console.log("running at 4500")
})
