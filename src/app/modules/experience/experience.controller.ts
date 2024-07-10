import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createExperienceDB,
  deleteExperienceDB,
  getAllExperienceDB,
  getSingleExperienceDB,
  updateSingleExperienceDB,
} from "./experience.service";

export const createExperience: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createExperienceDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Experience Created Successfully!",
    data: result,
  });
});

export const getAllExperience: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllExperienceDB();

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Blogs Retrieved Successfully!",
    data: result,
  });
});

export const getSingleExperience: RequestHandler = asyncCatch(
  async (req, res) => {
    const id = Number(req.params.experienceId);
    const result = await getSingleExperienceDB(id);

    return sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Experience Retrieved Successfully!",
      data: result,
    });
  }
);

export const updateSingleExperience: RequestHandler = asyncCatch(
  async (req, res) => {
    const id = Number(req.params.experienceId);
    const result = await updateSingleExperienceDB(id, req.body);

    return sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Experience Updated Successfully!",
      data: result,
    });
  }
);

export const deleteExperience: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.experienceId);
  const result = await deleteExperienceDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Experience Deleted Successfully!",
    data: result,
  });
});
