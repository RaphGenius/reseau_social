import { Post } from "../../models/postModel.js";

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    post.content = req.body.content;
    await Post.updateOne({ id, post });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default updatePost;
//Utiliser promesse apres le find
