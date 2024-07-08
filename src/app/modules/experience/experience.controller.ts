import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { createBExperienceDB } from "./experience.service";

export const createExperience: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createBExperienceDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: result,
  });
});
