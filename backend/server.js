const express = require("express")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser")

const AuthRoutes = require("./routes/auth")
const ContactRoutes = require("./routes/contact")

mongoose.connect("mongodb://127.0.0.1:27017/fsd8_contacts_app")
app.use(cors())
app.use(bodyParser.json())
app.use("/auth",AuthRoutes)
app.use("/contact",ContactRoutes)
app.listen(7000,()=>{
    console.log("server is running on 7000")
})