import * as dotenv from "dotenv";
import { connectMongoDb } from "./mongo/connectDb.js";

import express from "express";
const app = express();

dotenv.config();
app.use(express.json());

const launchServer = async () => {
  connectMongoDb(process.env.MONGODB_LINK);
  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
};
launchServer();
