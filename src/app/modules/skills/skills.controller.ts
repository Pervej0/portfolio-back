import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { createSkillsDB } from "./skills.service";

export const createSkills: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createSkillsDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: result,
  });
});
