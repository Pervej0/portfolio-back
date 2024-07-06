import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const GlobalErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const success = false;
  const statusCode = StatusCodes.BAD_REQUEST;

  res.status(statusCode).json({
    success,
    statusCode,
    message: error.message || "Something went wrong!",
    error: error,
  });
  next();
};

export default GlobalErrorHandler;
