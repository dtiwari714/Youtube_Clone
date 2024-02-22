import mongoose from "mongoose";
import likedVideo from '../Models/likedVideo.js'

export const likeVideoController = async(req,res)=>{
    const likedVideoData= req.body;

    // console.log(likedVideoData)
    const addToLikedVideo= new likedVideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedVideo')
        // console.log("Done")
    } catch (error) {
        res.status(400).json(error)       
    }
}