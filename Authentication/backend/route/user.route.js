const express = require("express")
const UserModal = require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const userRoute = express.Router();
// bcrypt
userRoute.post("/register", async (req, res) => {
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, secure_password) => {
            if (err) {
                console.log(err)
                return res.send(500).json({ message: "Error hashing password" })
            } else {
                const user = new UserModal({ name, email, pass: secure_password })
                await user.save()
                return res.status(200).json({ message: 'Registered' });
            }
        });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Error while registering user' });
    }
})

// decrypt

userRoute.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModal.find({ email })
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
                    const token = jwt.sign({ course: 'backend' }, 'masai')
                    return res.status(200).json({ message: "Login successfully", token: token });
                } else {
                    return res.status(401).json({ message: "Wrong credentials" });
                }
            });

        } else {
            return res.send("wrong credentials")
        }
    }
    catch (err) {
        console.log(err)
        return res.send("eror while Registered")
    }
})

module.exports = userRoute;