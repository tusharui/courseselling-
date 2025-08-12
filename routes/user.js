const { Router } = require("express");
const { userModel } = require("../db");
const useRouter = Router();

useRouter.post('/signup', async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    try {
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });

        res.json({
            message: "signup success"
        });
    } catch (e) {
        console.error("Error during signup:", e);
        res.status(500).json({
            message: "signup failed",
            error: e.message
        });
    }
});

useRouter.post('/signin', async function (req, res) {
    try {
        // Example placeholder logic
        res.json({
            message: "signin endpoint"
        });
    } catch (e) {
        console.error("Error during signin:", e);
        res.status(500).json({
            message: "signin failed",
            error: e.message
        });
    }
});

useRouter.post('/purchases', async function (req, res) {
    try {
        // Example placeholder logic
        res.json({
            message: "user purchases"
        });
    } catch (e) {
        console.error("Error fetching purchases:", e);
        res.status(500).json({
            message: "failed to get purchases",
            error: e.message
        });
    }
});

module.exports = {
    useRouter
};
