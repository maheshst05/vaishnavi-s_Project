const express = require("express")
const app = express()
var cors = require('cors')
app.use(express.json())
 
app.use(cors())
const{userroutes} = require("./routs/userRouts")
const{connection} = require("./db")
const{projectRoutes} = require("./routs/projetRutes")

app.use("/",userroutes)
app.use("/proj",projectRoutes)
//create server
app.listen(9090,async()=>{
    await connection
    console.log("connect to db")
console.log("server is runing...")
})
