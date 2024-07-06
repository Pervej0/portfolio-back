import express from "express";
import generateToken from "../../shared/generateToken";
const app = express.Router();

app.get("/login", (req, res) => {
  const payload = {
    email: "hellO@gmail.com",
    role: "author",
  };
  const token = generateToken(payload);
  console.log(token);
  res.json({ Message: "Hello" });
});

const AuthRoutes = app;
export default AuthRoutes;
