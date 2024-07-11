import express from "express";
import {
  createExperience,
  deleteExperience,
  getAllExperience,
  getSingleExperience,
  updateSingleExperience,
} from "./experience.controller";
import auth from "../../middleware/auth";
import dataValidation from "../../middleware/dataValidation";
import { experienceValidationSchema } from "./experience.validation";
const router = express.Router();

router.get("/", getAllExperience);
router.post(
  "/create",
  auth(),
  dataValidation(experienceValidationSchema),
  createExperience
);
router.get("/:experienceId", getSingleExperience);
router.put("/update", updateSingleExperience);
router.delete("/:experienceId", deleteExperience);

const ExperienceRoutes = router;
export default ExperienceRoutes;
