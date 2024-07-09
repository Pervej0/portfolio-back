import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createProjectDB,
  deleteProjectDB,
  getAllProjectsDB,
  getSingleProjectDB,
  updateSingleProjectDB,
} from "./projects.service";

export const createProject: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createProjectDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Project Created Successfully!",
    data: result,
  });
});

export const getAllProjects: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllProjectsDB();

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Projects Retrieved Successfully!",
    data: result,
  });
});

export const getSingleProject: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.projectId);
  const result = await getSingleProjectDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Project Retrieved Successfully!",
    data: result,
  });
});

export const updateSingleProject: RequestHandler = asyncCatch(
  async (req, res) => {
    const id = Number(req.params.projectId);
    const result = await updateSingleProjectDB(id, req.body);

    return sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Project Updated Successfully!",
      data: result,
    });
  }
);

export const deleteProject: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.projectId);
  const result = await deleteProjectDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Project Deleted Successfully!",
    data: result,
  });
});
