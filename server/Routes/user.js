import express from "express";
import {login} from '../Controllers/auth.js'
// import { updateChannelData } from "";
import {updateChannelData} from '../Controllers/channel.js'


const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChannelData)


export default routes;
