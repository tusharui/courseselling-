const express = require("express");
const app = express();
const {useRouter} = require("./routes/user");
const jsonwebtoken =require("jsonwebtoken");
const { useRouter } = require("./routes/user");
const JWT_SECRET ="jhgvcfghkjh"

app.use("/user",useRouter);
app.use("/course", courseRouter);



app.listen(3000);