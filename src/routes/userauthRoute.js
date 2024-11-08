import express from 'express';
import {usersignin } from '../controllers/authuser/usersignin.js';
import {as, usersignup } from '../controllers/authuser/usersignup.js';


const userauthRoute=express.Router();
userauthRoute.post('/apiusersignin',usersignin)
userauthRoute.post('/apiusersignup',usersignup)

userauthRoute.get('/asd',as)
export default userauthRoute;