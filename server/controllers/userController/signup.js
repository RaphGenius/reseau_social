import { User } from "../../models/userModel.js";
import CryptoJS from "crypto-js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
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
};

export default signup;
