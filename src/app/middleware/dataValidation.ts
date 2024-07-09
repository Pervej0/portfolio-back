import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import customError from "../errors/customError";
import { StatusCodes } from "http-status-codes";
import useAsyncCatch from "../utils/useAsyncCatch";

const dataValidation = (zodValidation: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    useAsyncCatch(async () => {
      const data = {
        body: req.body,
      };
      await zodValidation.parseAsync(data);
    });
    next();
  };
};

export default dataValidation;
