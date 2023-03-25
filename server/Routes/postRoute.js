import express from "express";
const router = express.Router();
import { auth, checkUserId } from "../middlewares/index.js";
import {
  createPost,
  deletePost,
  getAllPost,
  getOnePost,
  updatePost,
} from "../controllers/index.js";

//Create a new post
router.post("/", auth, createPost);

// get all posts
router.get("/", getAllPost);

//Get only one post
router.get("/:id", getOnePost);

// Delete one post
router.delete("/:id", auth, checkUserId, deletePost);

//Modify one post
router.put("/:id", auth, checkUserId, updatePost);

export const routerPost = router;
