import express from "express";
const router = express.Router();
import { signup, login, getProfil } from "../controllers/index.js";
import { auth } from "../middlewares/index.js";

/*
SIGNUP
Creat new user */
router.post("/signup", signup);

/*LOGGIN */
/**********/
router.post("/login", auth, login);

/*Get self informations */
router.get("/profil/:id", auth, getProfil);

export const routerUser = router;
