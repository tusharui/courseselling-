const express = require("express");
const app = express();
const jsonwebtoken =("jsonwebtoken");
const JWT_SECRET ="jhgvcfghkjh"

app.post('/user/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


app.post('/user/signup',function(req,res){
    res.json({
        message:"signin endpoint "
    })
})

app.get('/user/purchases',function(req,res){
    
})


app.get('/courses/purchase',function(req,res){

})

app.get('/coureses',function(req,res){

})


app.listen(3000);