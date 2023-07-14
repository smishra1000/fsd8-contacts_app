const express = require("express");

const AuthModel = require("../models/auth")

const router = express.Router();

router.post("/signup",function(req,res){
    const {email,password} = req.body;
    // to check email alredy exist or not 

    AuthModel.findOne({email:email}).then(function(user){
        console.log(user)
        if(user && user.email){
            return res.send({msg:"user already exist"})
        }
        const newUser = new AuthModel({email:email,password:password})
        newUser.save().then(function(user){
            res.send("signup succesfully")
        }).catch(function(err){
            res.send({err})
        })
    }).catch(function(err){
        res.send({err})
    })
})

router.post("/login",function(req,res){
    const {email,password} = req.body;
    AuthModel.findOne({email:email}).then(function(user){
        if(!user){
            return  res.send({msg:"user not exist"})
        }
        if(user){
            if(password===user.password){
                res.send({msg:"login successfully"})
            }else{
                res.send({msg:"wrong credentials"})
            }
        }
    }).catch(function(err){
        res.send({err})
    })
})

module.exports=router