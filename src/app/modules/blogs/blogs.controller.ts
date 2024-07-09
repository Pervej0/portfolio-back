import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createBlogDB,
  deleteBlogDB,
  getAllBlogsDB,
  getSingleBlogDB,
  updateSingleBlogDB,
} from "./blogs.service";

export const createBlog: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createBlogDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: result,
  });
});

export const getAllBlogs: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllBlogsDB();

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blogs Retrieved Successfully!",
    data: result,
  });
});

export const getSingleBlog: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.projectId);
  const result = await getSingleBlogDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blog Retrieved Successfully!",
    data: result,
  });
});

export const updateSingleBlog: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.projectId);
  const result = await updateSingleBlogDB(id, req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blog Updated Successfully!",
    data: result,
  });
});

export const deleteBlog: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.projectId);
  const result = await deleteBlogDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blog Deleted Successfully!",
    data: result,
  });
});
