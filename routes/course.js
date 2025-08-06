app.get('/courses/purchase',function(req,res){
    res.json({
        message: "purchase a course"
    });
})

app.get('/courses   ',function(req,res){
    res.json({
        message: "all courses"
    });
})

