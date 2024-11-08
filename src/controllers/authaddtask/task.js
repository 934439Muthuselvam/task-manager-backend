import Addtask from "../../Models/addtaskModel.js";


export const addtask=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const resdata=await new Addtask(req.body).save();
            
        console.log(resdata)
    res.send({message:"successfully saved"});

    }
    catch(err){
       console.log(err); 

    }
}

export const gettask=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const resdata=await Addtask.find({});
            
        console.log(resdata)
    res.send(resdata);

    }
    catch(err){
       console.log(err); 

    }
}
export const updatetask=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const{_id,...data}=req.body
        const resdata=await Addtask.findOneAndUpdate({_id},{$set:req.body},{new:true});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}