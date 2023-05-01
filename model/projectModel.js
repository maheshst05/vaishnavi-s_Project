const mongoose = require("mongoose")

const projSchema = mongoose.Schema({
   Projecttheme:{type:String},
    Reason:{type:String},
    Category:{type:String},
    StartDate:{type:String},
    Type: {type:String},
    Priorty:{type:String},
    EndDate:{type:String},
    Division:{type:String},
    Department:{type:String},
    Location:{type:String},
    Status:{type:String,default:"Register"}
})

const projModel = mongoose.model("project",projSchema)

module.exports={
    projModel
}