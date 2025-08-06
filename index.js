const express = require("express");
const app = express();
const {useRouter} = require("./routes/user");
const jsonwebtoken =require("jsonwebtoken");
const { useRouter } = require("./routes/user");
const {adminRouter} = require("./routes/admin");
const JWT_SECRET ="jhgvcfghkjh"

app.use("/api/v1/user",useRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin",adminRouter);



app.listen(3000);