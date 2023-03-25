import jsonwebtoken from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jsonwebtoken.verify(token, process.env.KEY_JWT);
    const admin = decodedToken.admin;
    const userid = decodedToken.userid;
    req.auth = {
      userid,
      admin: admin,
    };
    next();
  } catch (error) {
    res.status(401).json(error);
  }
};

export default auth;
