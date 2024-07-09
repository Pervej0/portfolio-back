import express from "express";
import {
  createProject,
  getAllProjects,
  getSingleProject,
} from "./projects.controller";
import { projectValidationSchema } from "./projects.validation";
import dataValidation from "../../middleware/dataValidation";
import auth from "../../middleware/auth";
const router = express.Router();

router.post(
  "/create",
  auth(),
  dataValidation(projectValidationSchema),
  createProject
);

router.get("/", getAllProjects);
router.get("/:projectId", getSingleProject);

const ProjectRoutes = router;
export default ProjectRoutes;
