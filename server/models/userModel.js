import mongoose from "mongoose";

const userShema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pseudo: { type: String, required: true, unique: true },
    admin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userShema);
