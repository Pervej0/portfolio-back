import express from "express";
import { createProject } from "./projects.controller";
import { projectValidationSchema } from "./projects.validation";
import dataValidation from "../../middleware/dataValidation";
const router = express.Router();

router.post("/create", dataValidation(projectValidationSchema), createProject);

const ProjectRoutes = router;
export default ProjectRoutes;
