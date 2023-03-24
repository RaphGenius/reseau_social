import mongoose from "mongoose";

export const connectMongoDb = async (url) => {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};
