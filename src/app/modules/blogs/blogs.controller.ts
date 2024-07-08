import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { createBlogDB } from "./blogs.service";

export const createBlog: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createBlogDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: result,
  });
});
