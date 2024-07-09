import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateSingleProject,
} from "./projects.controller";
import { projectValidationSchema } from "./projects.validation";
import dataValidation from "../../middleware/dataValidation";
import auth from "../../middleware/auth";
import { deleteBlog } from "../blogs/blogs.controller";
const router = express.Router();

router.get("/", getAllProjects);
router.post(
  "/create",
  auth(),
  dataValidation(projectValidationSchema),
  createProject
);
router.get("/:projectId", getSingleProject);
router.put("/update", updateSingleProject);
router.delete("/:projectsId", deleteProject);

const ProjectRoutes = router;
export default ProjectRoutes;
