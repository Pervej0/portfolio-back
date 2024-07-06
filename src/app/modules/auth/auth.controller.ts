import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { LoginDB } from "./auth.service";

export const login: RequestHandler = asyncCatch(async (req, res) => {
  const result = await LoginDB(req.body);

  res.cookie("accessToken", { accessToken: result });
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Successfully logged in!",
    data: {
      accessToken: result,
    },
  });
});
