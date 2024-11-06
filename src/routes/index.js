import express from 'express';
import userauthRoute from './userauthRoute.js';

// import couierRoute from './couierRoute.js';


const router=express.Router()

router.use('/authuser',userauthRoute)



export default router;