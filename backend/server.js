const express = require("express")

const app = express();

app.get("/contactsapp",function(req,res){
    res.send("hello contacts app backend is in progress")
})

app.listen(7000,()=>{
    console.log("server is running on 7000")
})