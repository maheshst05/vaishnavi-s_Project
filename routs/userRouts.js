const express = require("express")
const userroutes = express.Router()
const{userModel} = require("../model/user")

userroutes.post("/login",async(req,res)=>{
const{email,password} = req.body;
try {
    
const user = await userModel.find({email,password})
if(user.length>0){
res.send({"msg":"LOGIN SUCCESFULLY"})
}else{
    res.send({"msg":"invalid Details"})
}
} catch (error) {
    res.send({"msg":error.message})
}
})


userroutes.post("/reg",async(req,res)=>{
    const payload = req.body
    try {
        
const newuser = new userModel(payload)
await newuser.save()
res.send("new user has been registered")

    } catch (error) {
        res.send({"msg":error.message})
    }
})


module.exports={
    userroutes
}