import Addtask from "../../models/addtaskModel.js";


export const addtask=async(req,res)=>{
    try{
        
        console.log(req.body,"user","add")
        const{data}=req.body
        const resdata=await new Addtask(data).save();
            
        console.log(resdata)
    res.send({message:"successfully saved"});

    }
    catch(err){
       console.log(err); 

    }
}

export const gettask=async(req,res)=>{
    try{
        const {filterData,userdata}=req?.query
        console.log(filterData,userdata)
        if(userdata!="admin@gmail.com"&&filterData=="dashboard"){
            const totaltask=await Addtask.find({assignedUser:{$in:[userdata]}});
            const assignedtask=await Addtask.find({taskStage:"Assigned",assignedUser:{$in:[userdata]}});
            const completed=await Addtask.find({taskStage:"Complete",assignedUser:{$in:[userdata]}});
            const inprogress=await Addtask.find({taskStage:"In Progress",assignedUser:{$in:[userdata]}});
            const problem=await Addtask.find({taskStage:"Blocked",assignedUser:{$in:[userdata]}});
            res.send({assignedtask:assignedtask?.length,totaltask:totaltask?.length,completed:completed?.length,inprogress:inprogress?.length,problem:problem?.length});
        }
        else if(userdata=="admin@gmail.com"&&filterData=="dashboard"){
            const totaltask=await Addtask.find({});
            const assignedtask=await Addtask.find({taskStage:"Assigned"});
            const completed=await Addtask.find({taskStage:"Complete"});
            const inprogress=await Addtask.find({taskStage:"In Progress"});
            const problem=await Addtask.find({taskStage:"Blocked"});
            res.send({assignedtask:assignedtask?.length,totaltask:totaltask?.length,completed:completed?.length,inprogress:inprogress?.length,problem:problem?.length});
        }
        else if(userdata=="admin@gmail.com"){
            const resdata=await Addtask.find(
                filterData?{
                    taskStage:filterData}:{});
        res.send(resdata);
        }
        else{
            const resdata=await Addtask.find(
                filterData?{
                    taskStage:filterData,assignedUser:{$in:[userdata]}}:{assignedUser:{$in:[userdata]}});
                
            console.log(resdata,"resdata")
        res.send(resdata);
        }
        

    }
    catch(err){
       console.log(err); 

    }
}
export const updatetask=async(req,res)=>{
    try{
        const{_id,...data}=req?.body?.taskdata
        const resdata=await Addtask.findOneAndUpdate({_id},{$set:data},{new:true});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}

