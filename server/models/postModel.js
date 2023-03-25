import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    useridCreator: { type: String, required: true },
    pseudo: { type: String, required: false },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
