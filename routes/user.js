const {Router} = require("express");
const useRouter =Router();
userouter.post('/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


userouter.post('/signin ',function(req,res){
   res.json({
        message: "signin endpoint"
    });
})

userouter.get('/purchases',function(req,res){
     res.json({
        message: "user purchases"
    });
})

module.exports = {
    useRouter : useRouter
}
