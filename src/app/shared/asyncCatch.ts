import { NextFunction, RequestHandler, Request, Response } from "express";

const asyncCatch = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};

export default asyncCatch;
