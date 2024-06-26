const jwt = require("jsonwebtoken")
const { use } = require("../routes/note.route")

const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        const decoded = jwt.verify(token, "masai")
        if (decoded) {
            const userID = decoded.userID
            console.log("decoded",decoded)
            req.body.userID = userID
            next()
        } else {
            res.send("please login first")
        }
    } else{
        res.send("please login first")
    }
}

module.exports = authenticate