import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
import User from "../../models/usermodel.js";

export const usersignin=async(req,res)=>{
    try{
        const{email,password}=req.body
        const resdata=await User.findOne({email});
        if(resdata){
            const checkpassword=bcrypt.compare(password,resdata.password)
            if(checkpassword){
            const token=jwt.sign({email:resdata.email,name:resdata.name,role:resdata.role},"Muthu123")
            res.send({message:"successfully signin",token});
            }
            else{
                res.send({message:"Invalid email or password"});

            }
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

