import express from "express";
const router = express.Router();
import { Post } from "../models/postModel.js";
//Creer un poste

//Create a new post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    if (!post) {
      res.status(400).json({ message: "Erreur dans la création du poste" });
      return;
    }
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// get all posts
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//Get only one post
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

// Delete one post
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    res.status(200).json({ message: `post n°${id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//Modify one post
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    const updatedPost = await Post.findById(id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
