import { Post } from "../models/postModel.js";

const isAuthorized = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ _id: id });
  if (!post) {
    res.status(404).json({ message: "post not found!" });
    return;
  }

  if (post.useridCreator !== req.auth.userid || !req.auth.admin) {
    res.status(403).json({ mesage: "You aren't authorized to make changes" });
    return;
  } else {
    next();
  }
};

export default isAuthorized;
