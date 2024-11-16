import express from 'express';
import {usersignin } from '../controllers/authuser/usersignin.js';
import {as, usersignup } from '../controllers/authuser/usersignup.js';
import { adduser, deleteUser, getuser, updateUser } from '../controllers/authadduser/user.js';


const userauthRoute=express.Router();
userauthRoute.post('/apiusersignin',usersignin)
userauthRoute.post('/apiusersignup',usersignup)
userauthRoute.post('/apiadduser',adduser)
userauthRoute.get('/apigetuser',getuser)
userauthRoute.put('/apiupdatetuser',updateUser)
userauthRoute.post('/apideleteuser',deleteUser)

userauthRoute.get('/asd',as)
export default userauthRoute;