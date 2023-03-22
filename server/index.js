import * as dotenv from "dotenv";
import express from "express";
import { connectMongoDb } from "./mongo/connectDb.js";
import router from "./Routes/postRoute.js";

const routerPost = router;
const app = express();

dotenv.config();
app.use(express.json({ limit: "50mb" }));

/*
Route for CRUD POST
*/
app.use("/post", routerPost);

const launchServer = async () => {
  connectMongoDb(process.env.MONGODB_LINK);
  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
};
launchServer();
