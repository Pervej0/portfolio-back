import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { LoginDB } from "./auth.service";

export const login: RequestHandler = asyncCatch(async (req, res) => {
  const result = await LoginDB(req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.ACCEPTED,
    message: "Successfully logged in!",
    data: result,
  });
});
