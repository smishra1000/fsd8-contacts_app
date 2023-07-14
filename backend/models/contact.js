const mongoose = require("mongoose");

let conatctShema = mongoose.Schema({
    name:String,
    email:String,
    Phone:String,
    address:String
})

module.exports = mongoose.model("contact",conatctShema)