import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateSingleBlog,
} from "./blogs.controller";
import auth from "../../middleware/auth";
import { blogsValidationSchema } from "./blogs.validation";
import dataValidation from "../../middleware/dataValidation";
const router = express.Router();

router.get("/", getAllBlogs);
router.post(
  "/create",
  auth(),
  dataValidation(blogsValidationSchema),
  createBlog
);
router.get("/:projectId", getSingleBlog);
router.put("/update", updateSingleBlog);
router.delete("/:projectsId", deleteBlog);

const BlogRoutes = router;
export default BlogRoutes;
