import { User } from "../../models/userModel.js";
import CryptoJS from "crypto-js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const login = async (req, res) => {
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
};

export default login;
