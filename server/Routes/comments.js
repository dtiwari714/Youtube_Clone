import express from "express";

import auth from "../Middleware/auth.js";
import {
  deleteComment,
  editComment,
  getComment,
  postComment,
} from "../Controllers/comments.js";
const router = express.Router();

router.post("/post", auth, postComment);
router.get("/get", getComment);
router.delete("/delete/:id", auth, deleteComment);
router.patch("/edit/:id", auth, editComment);

export default router;
