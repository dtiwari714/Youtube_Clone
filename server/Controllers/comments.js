import mongoose from "mongoose";
import comment from "../Models/comments.js";

export const postComment = async (req, res) => {
  const commentData = req.body;
  const postcomment = new comment(commentData);
  try {
    await postcomment.save();
    res.status(200).json("posted the comment");
    //   console.log("DOne");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getComment = async (req, res) => {
  try {
    const commentList = await comment.find();
    res.status(200).send(commentList);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
