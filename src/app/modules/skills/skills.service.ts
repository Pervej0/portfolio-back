import prisma from "../../shared/prisma";
import { TSkill } from "../../types";

export const createSkillsDB = async (payload: any) => {
  const result = await prisma.skill.create({
    data: payload,
  });

  return result;
};

export const getAllSkillsDB = async () => {
  const blogs = await prisma.skill.findMany({});
  return blogs;
};

export const getSingleSkillDB = async (id: number) => {
  const blog = await prisma.skill.findUniqueOrThrow({
    where: { id: id },
  });
  return blog;
};
export const updateSingleSkillDB = async (
  id: number,
  payload: Partial<TSkill>
) => {
  const result = await prisma.skill.update({
    where: { id: id },
    data: payload,
  });
  return result;
};

export const deleteSkillDB = async (id: number) => {
  const result = await prisma.skill.update({
    where: { id: id },
    data: {
      isDeleted: true,
    },
  });

  return result;
};
