import express from "express";
import {login} from '../Controllers/auth.js'
import {updateChannelData,getAllChanels} from '../Controllers/channel.js'


const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChannelData)
routes.get('/getAllChannels',getAllChanels)


export default routes;
