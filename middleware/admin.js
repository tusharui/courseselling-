const JWT_ADMIN_PASSWORD =("qwer1234");
const jwt = require("jsonwebtoken");

function adminMiddleware(req,res,next){
     const token = req.headers.token;
     const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);
    if (decoded){
        req.adminId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message:"you are not signed in "
        })
    }
}

module.exports =  {
 adminMiddleware : adminMiddleware
}