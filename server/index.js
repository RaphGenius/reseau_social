import * as dotenv from "dotenv";
import express from "express";
import { connectMongoDb } from "./mongo/connectDb.js";
import { routerPost } from "./Routes/postRoute.js";
import { routerUser } from "./Routes/userRoute.js";

const app = express();

dotenv.config();
app.use(express.json({ limit: "50mb" }));

// ROAD FOR CRUD POST \\
app.use("/post", routerPost);
// ROAD FOR CRUD POST \\

app.use("/user", routerUser);

const launchServer = async () => {
  connectMongoDb(process.env.MONGODB_LINK);
  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
};

launchServer();
