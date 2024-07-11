import { RequestHandler } from "express";
import asyncCatch from "../../shared/asyncCatch";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import {
  createSkillsDB,
  deleteSkillDB,
  getAllSkillsDB,
  getSingleSkillDB,
  updateSingleSkillDB,
} from "./skills.service";

export const createSkills: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createSkillsDB(req.body);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Skill Created Successfully!",
    data: result,
  });
});

export const getAllSkills: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllSkillsDB();

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Skills Retrieved Successfully!",
    data: result,
  });
});

export const getSingleSkill: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.skillId);
  const result = await getSingleSkillDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Skill Retrieved Successfully!",
    data: result,
  });
});

export const updateSingleSkill: RequestHandler = asyncCatch(
  async (req, res) => {
    const id = Number(req.params.skillId);
    const result = await updateSingleSkillDB(id, req.body);

    return sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Skill Updated Successfully!",
      data: result,
    });
  }
);

export const deleteSkill: RequestHandler = asyncCatch(async (req, res) => {
  const id = Number(req.params.skillId);
  const result = await deleteSkillDB(id);

  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Skill Deleted Successfully!",
    data: result,
  });
});
