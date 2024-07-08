import express from "express";
import { login } from "./auth.controller";
const app = express.Router();

app.post("/login", login);

const AuthRoutes = app;
export default AuthRoutes;
