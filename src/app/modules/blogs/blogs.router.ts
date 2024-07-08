import express from "express";
import { createBlog } from "./blogs.controller";
const app = express.Router();

app.post("/", createBlog);

const BlogRoutes = app;
export default BlogRoutes;
