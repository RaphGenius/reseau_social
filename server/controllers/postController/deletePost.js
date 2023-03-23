import { Post } from "../../models/postModel.js";

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    res.status(200).json({ message: `post n°${id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export default deletePost;
