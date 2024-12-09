import mongoose from 'mongoose';
import db from '../db/db.js';


const addtaskSchema = new mongoose.Schema({
   
    taskTitle:String,
    assignedUser:Array,
    taskStage: String ,enum: ["Complete", "In Progress", "Testing" , "Review" ] ,
    taskDate: Date,
    taskinfo:{ type: String, default: '' },
    taskstatus:{ type: String, default: '' },
    link: { type: String, default: '' }, 
  },{timestamps:true}
  );
  
  const Addtask =db.model('addtasks', addtaskSchema);
  export default Addtask
