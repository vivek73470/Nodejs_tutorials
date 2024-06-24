const express = require("express")
const connection = require("./config/db")
const userRoute = require("./routes/user.route")
const noteRoute = require("./routes/note.route")
const authenticate = require("./middlewares/authenticate.middleware")

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use("/users",userRoute)
app.use(authenticate)
app.use("/notes",noteRoute)


// app.get("/data", (req, res) => {
//     const token = req.headers.authorization
//     jwt.verify(token, 'masai', (err, decoded) => {
//         if (err) {
//             res.send("invalid token")
//             console.log(err)
//         } else {
//             res.send("data..")
//         }
//     });

// })

// app.get("/cart", (req, res) => {
//     const token = req.query.token
//     if (token === "abc123") {
//         res.send("data..")

//     } else {
//         res.send("login first")
//     }
// })


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
