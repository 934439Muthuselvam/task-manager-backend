import Addtask from "../../Models/addtaskModel.js";


export const addtask=async(req,res)=>{
    try{
        
        console.log(req.body,"user","add")
        const{data}=req.body
        data.assignedUser=data?.assignedUser.includes(",")?data?.assignedUser?.split(","):[data?.assignedUser]
        console.log(data)
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
        if(userdata!="admin"&&filterData=="dashboard"){
            const totaltask=await Addtask.find({assignedUser:{$in:[userdata]}});
            const completed=await Addtask.find({taskStage:"Complete",assignedUser:{$in:[userdata]}});
            const inprogress=await Addtask.find({taskStage:"In Progress",assignedUser:{$in:[userdata]}});
        res.send({totaltask:totaltask.length,completed:completed.length,inprogress:inprogress.length});
        }
        else if(filterData=="dashboard"&&userdata=="admin"){
            const totaltask=await Addtask.find({});
            const completed=await Addtask.find({taskStage:"Complete"});
            const inprogress=await Addtask.find({taskStage:"In Progress"});
            res.send({totaltask:totaltask.length,completed:completed.length,inprogress:inprogress.length});
        }
        else if(userdata=="admin"){
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
        
        console.log(req.body,"user")
        const{_id,...data}=req.body
        const resdata=await Addtask.findOneAndUpdate({_id},{$set:req.body},{new:true});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}

