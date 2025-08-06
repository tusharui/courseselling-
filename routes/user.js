const {Router} = require("router");
const courseRouter =Router();

courseRouter.post('/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


courseRouter.post('/signin ',function(req,res){
   res.json({
        message: "signin endpoint"
    });
})

userouter.post('/purchases',function(req,res){
     res.json({
        message: "user purchases"
    });
})

module.exports = {
    useRouter : useRouter
}
