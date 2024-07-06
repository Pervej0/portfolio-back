import express from "express";
import generateToken from "../../shared/generateToken";
import { login } from "./auth.controller";
const app = express.Router();

app.post("/login", login);

const AuthRoutes = app;
export default AuthRoutes;
