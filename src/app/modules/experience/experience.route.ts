import express from "express";
import { createExperience } from "./experience.controller";
const app = express.Router();

app.post("/", createExperience);

const ExperienceRoutes = app;
export default ExperienceRoutes;
