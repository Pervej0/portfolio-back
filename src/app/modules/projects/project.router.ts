import express from "express";
import { createProject } from "./projects.controller";
const app = express.Router();

app.post("/", createProject);

const ProjectRoutes = app;
export default ProjectRoutes;
