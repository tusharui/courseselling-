const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../congif");
const { adminMiddleware } = require("../middleware/admin");

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


adminRouter.post('/course', adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    const {title ,description , imageUrl , price } = req.body;

    const course = await courseModel.create({
        title: title  ,
        description: description , 
        imageUrl :imageUrl, 
        price: price ,
        creatorId : adminId
    })
    
    res.json({
        message: "course created ",
        courseId: course._id 
    });
});

adminRouter.put('/course',adminMiddleware,async function (req, res) {

    const adminId = req.userId;
    const {title ,description , imageUrl , price , courseId } = req.body;

    const course = await courseModel.updateOne({
    _id:courseId
    },{
        title: title  ,
        description: description , 
        imageUrl :imageUrl, 
        price: price 
    })
    
    res.json({
        message: "course updated",
        courseId : course._id
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
