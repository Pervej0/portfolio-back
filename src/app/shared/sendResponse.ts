import { Response } from "express";
import { TJsonData } from "../types/global.type";

const sendResponse = <T>(res: Response, jsonData: TJsonData<T>) => {
  return res.status(res.statusCode).json({
    success: true,
    statusCode: jsonData.statusCode,
    message: jsonData.message,
    data: jsonData?.data,
    meta: jsonData?.meta,
  });
};

export default sendResponse;
