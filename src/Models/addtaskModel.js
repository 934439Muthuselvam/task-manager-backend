import mongoose from 'mongoose';
import db from '../db/db.js';

const addtaskSchema = new mongoose.Schema({
   
    taskTitle:String,
    assignedUser:Array,
    taskStage: String ,enum: ["Complete", "In Progress", "Testing"] ,
    taskDate: Date,
  },{timestamps:true}
  );
  
  const Addtask =db.model('addtasks', addtaskSchema);
  export default Addtask