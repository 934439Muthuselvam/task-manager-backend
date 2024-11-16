import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.js';



const app=express();
app.use(express.json())

app.use(morgan('tiny'))
app.use(cors({
  origin:["https://task-manager-frontend-ivory-delta.vercel.app/"],
  credentials:true
}));
app.use(router);

app.get('/',(req,res)=> res.send("server is running"));
export default app;
