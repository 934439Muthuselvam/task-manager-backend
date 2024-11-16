import mongoose from 'mongoose';
import db from 'db/db.js';

const adduserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
  },{timestamps:true}
  );
  
  const AddUser =db.model('addusers', adduserSchema);
  export default AddUser