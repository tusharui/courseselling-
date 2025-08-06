const {Router} = require("express");
const useRouter =  Router()
useRouter.get('/purchase',function(req,res){
    res.json({
        message: "purchase a course"
    });
})

useRouter.get('/preview',function(req,res){
    res.json({
        message: " courses preview endpoint"
    });
})

module.exports = {
    useRouter : useRouter
}

