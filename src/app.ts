import express from "express";
import cors from "cors";
import Router from "./app/router";
import GlobalErrorHandler from "./app/middleware/GlobalErrorHandler";
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

app.use(GlobalErrorHandler);
export default app;
