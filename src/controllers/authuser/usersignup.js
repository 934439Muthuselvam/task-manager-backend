

import User from "../../models/userModel.js";


export const usersignup=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const finduser=await User.findOne({email});
        if(!finduser){
            console.log("before")
            // const hashpassword=await bcrypt.hash(password,10)
            
            console.log("between")
            const resdata=await new User({...req.body,password:password}).save();
            
            console.log("after")
        res.send({message:"successfully signup"});

        }
        else{
            res.send({message:"Already email exists"});
        }

    }
    catch(err){
       console.log(err); 

    }
}

export const as=async(req,res)=>{
    try{
        res.send({message:"successfully signup"});

    }
    catch(err){
       console.log(err); 

    }
}
