const express = require("express")
const UserModel = require("../models/user.model")

const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const userRoute = express.Router()

// app.post("/register", async (req, res) => {
//     const payload = req.body
//     try {
//         const user = new UserModel(payload)
//         await user.save();
//         res.send("registerd")
//     } catch (err) {
//         console.log("error in the user")
//         console.log(err)
//     }
// })

// bcrypt
userRoute.post("/register", async (req, res) => {
    const { email, pass, name, age } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, secure_password) => {
            if (err) {
                console.log(err)
                return res.send(500).json({ message: "Error hashing password" })
            } else {
                const user = new UserModel({ email, name, pass: secure_password, age })
                await user.save();
                return res.status(200).json({ message: 'Registered' });
            }
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Error while registering user' });
    }
})

// app.post("/login", async (req, res) => {
//     const { email, pass } = req.body
//     try {
//         const user = await UserModel.find({ email, pass })
//         const token = jwt.sign({ course: 'backend' }, 'masai');
//         if (user.length > 0) {
//             res.send({ "msg": "login successfully", "token": token })

//         }
//         else {
//             res.send("wrong credentials")
//         }
//     } catch (err) {
//         res.send("something wrong")
//         console.log(err)

//     }
// })


// bcrypt during login time
userRoute.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.find({ email })
        if (!user) {
            return res.status(400).json({ message: "Wrong credentials" });
        }
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Internal server error" });
                }
                if (result) {
                    // const token = jwt.sign({ course: 'backend' }, 'masai');
                    const token = jwt.sign({userID:user[0]._id }, 'masai');
                    return res.status(200).json({ message: "Login successfully", token: token });
                }else{
                    return res.status(401).json({ message: "Wrong credentials" });
                }
            });
        }
        else {
            return res.send("wrong credentials")
        }
    } catch (err) {
        res.send("something wrong")
        console.log(err)

    }
})

module.exports=userRoute