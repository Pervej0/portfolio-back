import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (payload: any) => {
  const token = jwt.sign(payload, config.PRIVATE_KEY as string);
  return token;
};

export default generateToken;
