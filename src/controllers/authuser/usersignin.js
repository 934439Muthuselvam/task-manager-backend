import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
// import User from "../../models/usermodel.js";
import AddUser from "../../Models/adduserModel.js";

export const usersignin=async(req,res)=>{
    try{
        const{email,password}=req.body
        const resdata=await AddUser.findOne({email});
        if(resdata){
            const token=jwt.sign({email:resdata.email,name:resdata.name,role:resdata.role},"Muthu123")
            res.send({message:"successfully signin",token});
        }
        else{
            res.send({message:"Invalid email or password"});

        }
       
    }
    catch(err){
       console.log(err); 
       res.send(err)

    }
}

