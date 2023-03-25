import { User } from "../../models/userModel.js";

const getProfil = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findOne({ _id: id });
    console.log(user);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default getProfil;
