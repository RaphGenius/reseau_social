import { Post } from "../../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      useridCreator: req.auth.userid,
    });
    if (!post) {
      res.status(400).json({ message: "Erreur dans la création du poste" });
      return;
    }
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default createPost;
