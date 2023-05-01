const express = require("express")
const{ projModel } =  require("../model/projectModel")
const projectRoutes = express.Router()



//get project list from Db..
projectRoutes.get("/list",async(req,res)=>{
try {
 
    const projlist =await
  projModel.find()
    res.send(projlist)

} catch (error) {
    res.send({"msg":error.messahe})
}

})



//add project to the Db
projectRoutes.post("/add",async(req,res)=>{
const payload = req.body
    try {
        const newProj = new projModel(payload)
        await newProj.save()
        res.send({"msg":"new project add to the DataBase"})
    } catch (error) {
        res.send({"msg":error.messahe})
    }
    
    })

    
    //get by status
    
    projectRoutes.get("/status",async(req,res)=>{
        const status = req.query.status
            try {
                const Proj = await projModel.find({Status:status})
                res.send(Proj)
                
            } catch (error) {
                res.send({"msg":error.messahe})
            }
            
            })
            
    
//update

projectRoutes.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload = req.body
        try {
            const Proj = await projModel.findOneAndUpdate({_id:id},payload)
            res.send("udate")
            
        } catch (error) {
            res.send({"msg":error.messahe})
        }
        
        })


        projectRoutes.get("/search",async(req,res)=>{
            const search = req.query.title
            const projsearch = await projModel.find({
                Projecttheme: { $regex: `${search}`, $options: "i" },
            });
            res.send(projsearch);
          
          })


          //sort
        //   find({ priority: 'high' }).sort({ createdAt: -1 })


        projectRoutes.get("/sort",async(req,res)=>{
            const sort = req.query.Priorty
            const sorted = await projModel.find({ Priorty: sort }).sort({ createdAt: -1 })
            res.send(sorted);
          
          })

    module.exports={
        projectRoutes
    }

    

