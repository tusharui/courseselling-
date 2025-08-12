const {Router} = require("express");
const courseRouter =  Router()


courseRouter.get('/purchase',function(req,res){
    res.json({
        message: "purchase a course"
    });
})

courseRouter.get('/preview',function(req,res){
    res.json({
        message: " courses preview endpoint"
    });
})

module.exports = {
    courseRouter : courseRouter
}

