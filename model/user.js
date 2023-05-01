const mongoose = require("mongoose")

const userchema = mongoose.Schema({
  email:{type:String},
    password:{type:String}
})

const userModel =  mongoose.model("user",userchema)

module.exports={
    userModel
}