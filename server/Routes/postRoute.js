import express from "express";
const router = express.Router();
import { Post } from "../models/postModel.js";
import {
  createPost,
  deletePost,
  getAllPost,
  getOnePost,
  updatePost,
} from "../controllers/index.js";

//Create a new post
router.post("/", createPost);

// get all posts
router.get("/", getAllPost);

//Get only one post
router.get("/:id", getOnePost);

// Delete one post
router.delete("/:id", deletePost);

//Modify one post
router.put("/:id", updatePost);

export default router;
