const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, "masai");
            if (decoded) {
                next();
            } else {
                res.status(401).send("Invalid token");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Token verification failed");
        }
    } else {
        res.status(401).send("Authentication token is required");
    }
};
module.exports = authenticate