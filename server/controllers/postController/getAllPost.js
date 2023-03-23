import { Post } from "../../models/postModel.js";
const getAllPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export default getAllPost;
