import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: false },
    pseudo: { type: String, required: true },
    content: { type: String, required: false },
    imageUrl: { type: String, required: false },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
