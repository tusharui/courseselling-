const { Router } = require("express");
const { userModel } = require("../db");
const useRouter = Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../congif");

useRouter.post('/signup', async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
    });

    res.json({
        message: "signup success"
    });
});

useRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({
        email: email,
        password: password,
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        });
    }
});

useRouter.post('/purchases', async function (req, res) {
    res.json({
        message: "user purchases"
    });
});

module.exports = {
    useRouter
};
