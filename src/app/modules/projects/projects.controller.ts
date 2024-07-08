import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

export const createProject: RequestHandler = asyncCatch(async (req, res) => {
  // const result = await LoginDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: {},
  });
});
