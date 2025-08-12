const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const JWT_ADMIN_PASSWORD ="qwer1234";
const jwt = require("jsonwebtoken");

adminRouter.use(adminMiddleware);

adminRouter.post('/signup', async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
    });

    res.json({
        message: "signup success"
    });
});

adminRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email: email,
        password: password,
    });

    if (admin) {
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


adminRouter.post('/course', function (req, res) {
    res.json({
        message: "course endpoint"
    });
});

adminRouter.put('/course', function (req, res) {
    res.json({
        message: "course endpoint"
    });
});

adminRouter.get('/course/bulk', function (req, res) {
    res.json({
        message: "course endpoint"
    });
});

module.exports = {
    adminRouter: adminRouter
};
