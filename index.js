const express = require("express");
const app = express();
const jsonwebtoken =require("jsonwebtoken");
const JWT_SECRET ="jhgvcfghkjh"

app.post('/user/signup',function(req,res){
    res.json({
        message :"signupendpoint"
    })
})


app.post('/user/signin ',function(req,res){
   res.json({
        message: "signin endpoint"
    });
})

app.get('/user/purchases',function(req,res){
     res.json({
        message: "user purchases"
    });
})


app.get('/courses/purchase',function(req,res){
    res.json({
        message: "purchase a course"
    });
})

app.get('/courses',function(req,res){
    res.json({
        message: "all courses"
    });
})


app.listen(3000);