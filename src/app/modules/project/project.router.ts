import express from "express";
const app = express.Router();

app.get("/", (req, res) => {
  res.send("Hello Projects");
});

export const projectRoute = app;
