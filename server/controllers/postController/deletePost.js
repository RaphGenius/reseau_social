import { Post } from "../../models/postModel.js";

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export default deletePost;
