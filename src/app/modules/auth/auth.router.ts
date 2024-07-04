import express from "express";
const app = express.Router();

app.get("/login", (req, res) => {
  res.json({ Message: "Hello" });
});

const AuthRoutes = app;
export default AuthRoutes;
