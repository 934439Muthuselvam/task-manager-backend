import mongoose from "mongoose";



const db=mongoose.createConnection("mongodb+srv://muthuselvam73bitf:1234@cluster0.0jr7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
db.once('open',()=>console.log("db successfully connnneted") );
db.on('error',(err)=>console.log(`db not connect ${err.message}`));

export default db;

// muthuselvam73bitasd
// CxGkwV4qMVU7RvDc