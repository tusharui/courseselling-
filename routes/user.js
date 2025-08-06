const {Router} = require("express");
const useRouter =Router();

useRouter.post('/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


useRouter.post('/signin',function(req,res){
   res.json({
        message: "signin endpoint"
    });
})

useRouter.post('/purchases',function(req,res){
     res.json({
        message: "user purchases"
    });
})

module.exports = {
    useRouter
}
