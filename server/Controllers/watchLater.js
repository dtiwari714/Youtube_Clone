import watchLater from "../Models/watchLater.js";
import mongoose from "mongoose";

export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;

  // console.log(watchLaterData);
  const addTowatchLater = new watchLater(watchLaterData);

  try {
    await addTowatchLater.save();
    res.status(200).json("added to watchLater");
    // console.log("DOne");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllwatchLaterController = async (req, res) => {
  try {
    const files = await watchLater.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};