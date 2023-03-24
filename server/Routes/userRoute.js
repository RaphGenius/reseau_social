import express from "express";
const router = express.Router();
import CryptoJS from "crypto-js";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import jsonwebtoken from "jsonwebtoken";
const jwtKey = "123456789";

/*
SIGNUP
Creat new user */

router.post("/signup", async (req, res) => {
  try {
    const { pseudo, email, password } = req.body;
    //Search if user is already taken
    const pseudoUser = await User.findOne({ pseudo });
    if (pseudoUser) {
      res
        .status(403)
        .json({ message: "Pseudo is already taken, choose another one!" });
      return;
    }
    const emailUser = CryptoJS.HmacSHA256(
      email,
      process.env.KEY_CRYPTOJS
    ).toString();
    const passwordUser = await bcrypt.hash(password, 10);
    const user = new User({
      ...req.body,
      email: emailUser,
      password: passwordUser,
    });
    await User.create(user)
      .then((userCreated) => res.status(200).json(userCreated))
      .catch(() =>
        res.status(403).json({ message: "Email adresse is already use" })
      );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

/*LOGGIN */
/**********/
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailUser = CryptoJS.HmacSHA256(
      email,
      process.env.KEY_CRYPTOJS
    ).toString();
    const userExist = await User.findOne({ email: emailUser });

    if (!userExist) {
      res.status(404).json({ message: "Email adress doesn't exist" });
      return;
    }
    await bcrypt.compare(password, userExist.password).then((user) => {
      if (!user) {
        res.status(401).json({ message: "Wrong password" });
      } else {
        res.status(200).json({
          userid: userExist.id,
          token: jsonwebtoken.sign(
            {
              userid: userExist.id,
              admin: userExist.admin,
            },
            process.env.KEY_JWT,
            { expiresIn: "3d" }
          ),
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Récuperer info User

//Modifier info user

// Supprimer user

export const routerUser = router;
// router.post("/", async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const emailUser = CryptoJS.HmacSHA256(email, clé).toString();
//       const passwordUser = await bcrypt.hash(password, 10);
//       const user = User.create("User", {
//         email: emailUser,
//         password: passwordUser,
//         ...req.body,
//       });
//       if (!user) {
//         res.status(401).json({ message: "Erreur" });
//         return;
//       }

//       res.status(200).json(emailUser);
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ message: error.message });
//     }
//   });
