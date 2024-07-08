import express from "express";
import { createBlog } from "./blogs.controller";
const app = express.Router();

app.post("/", createBlog);

const ProjectRoutes = app;
export default ProjectRoutes;
