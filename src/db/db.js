import mongoose from "mongoose";



const db=mongoose.createConnection("mongodb://localhost:27017/Users_data");
db.once('open',()=>console.log("db successfully connnneted") );
db.on('error',(err)=>console.log(`db not connect ${err.message}`));

export default db;