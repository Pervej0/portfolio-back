import express from "express";
import { createProject } from "./projects.controller";
import { projectValidation } from "./projects.validation";
import dataValidation from "../../middleware/dataValidation";
const app = express.Router();

app.post("/create", dataValidation(projectValidation), createProject);

const ProjectRoutes = app;
export default ProjectRoutes;
