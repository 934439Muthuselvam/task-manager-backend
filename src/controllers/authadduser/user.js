import AddUser from "../../Models/adduserModel.js";

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
        const{_id,...data}=req.body
        const resdata=await AddUser.findOneAndUpdate({_id},{$set:req.body},{new:true});
        res.send("updated");

    }
    catch(err){
       console.log(err); 

    }
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await AddUser.findByIdAndDelete(id);
        
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.json({ message: "User successfully deleted" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ message: "Failed to delete user" });
    }
};
