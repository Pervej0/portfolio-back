import express from "express";
import cors from "cors";
import Router from "./app/router";
const app = express();

app.use(express.json());
app.use(cors());

app.use(Router);

app.get("/", (req, res) => {
  res.json({
    status: "Active",
    message: "Server is running successfully",
  });
});

export default app;
