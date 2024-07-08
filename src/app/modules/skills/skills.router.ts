import express from "express";
import { createSkills } from "./skills.controller";
const app = express.Router();

app.post("/", createSkills);

const SkillRoutes = app;
export default SkillRoutes;
