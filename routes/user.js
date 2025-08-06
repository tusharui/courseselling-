const {Router} = require("router");
const courseRouter =Router();

courseRouter.post('/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


courseRouter.get('/signin ',function(req,res){
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
