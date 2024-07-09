import { NextFunction, Request, Response } from "express";
import customError from "../errors/customError";
import { StatusCodes } from "http-status-codes";

const auth = (authRoles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token) {
      new customError(
        StatusCodes.BAD_REQUEST,
        "Authorization token is missing!"
      );
    }
    console.log(token, "ccccccc");
    // next();
  };
};

export default auth;
