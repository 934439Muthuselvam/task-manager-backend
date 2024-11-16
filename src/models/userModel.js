import mongoose from 'mongoose';
import db from '../db/db.js';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
  role:{type:String,default:"user"},
},{timestamps:true}
);

const User =db.model('users', userSchema);
export default User
