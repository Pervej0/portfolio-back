import express from "express";
import {
  createSkills,
  deleteSkill,
  getAllSkills,
  getSingleSkill,
  updateSingleSkill,
} from "./skills.controller";
import auth from "../../middleware/auth";
import dataValidation from "../../middleware/dataValidation";
import { updateSingleSkillDB } from "./skills.service";
import { skillsValidationSchema } from "./skills.validation";
const router = express.Router();

router.get("/", getAllSkills);
router.post(
  "/create",
  auth(),
  dataValidation(skillsValidationSchema),
  createSkills
);
router.get("/:skillId", getSingleSkill);
router.put("/update/:skillId", updateSingleSkill);
router.delete("/:projectsId", deleteSkill);

const SkillRoutes = router;
export default SkillRoutes;
