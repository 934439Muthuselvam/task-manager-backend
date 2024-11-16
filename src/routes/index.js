import express from 'express';
import userauthRoute from 'userauthRoute.js';
import taskauthRoute from 'taskauthRoute.js';

// import couierRoute from './couierRoute.js';


const router=express.Router()

router.use('/authuser',userauthRoute)
router.use('/authtask',taskauthRoute)



export default router;