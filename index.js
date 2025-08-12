const express = require("express");
const app = express();
const {useRouter} = require("./routes/user");
const jsonwebtoken =require("jsonwebtoken");
const { courseRouter } = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const JWT_SECRET ="jhgvcfghkjh"
const mongoose = require("mongoose");
app.use(express.json());

app.use("/api/v1/user",useRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin",adminRouter);

async function main(){
    await mongoose.connect("")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()