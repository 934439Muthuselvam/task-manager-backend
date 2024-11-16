import AddUser from "../../models/adduserModel.js";

export const adduser=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const resdata=await new AddUser(req.body).save();
            
        console.log(resdata)
    res.send({message:"successfully saved"});

    }
    catch(err){
       console.log(err); 

    }
}

export const getuser=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const resdata=await AddUser.find({});
            
        console.log(resdata)
    res.send(resdata);

    }
    catch(err){
       console.log(err); 

    }
}

export const updateUser=async(req,res)=>{
    try{
        
        console.log(req.body,"user")
        const resdata=await AddUser.findOneAndUpdate({_id:req?.body?._id},{$set:req.body},{new:true});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}


export const deleteUser=async(req,res)=>{
    try{
        
        
        const{_id}=req.body
        console.log(_id,"delete")
        const resdata=await AddUser.deleteOne({_id:_id});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}