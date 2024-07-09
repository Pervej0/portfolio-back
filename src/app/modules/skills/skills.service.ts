import prisma from "../../shared/prisma";

export const createSkillsDB = async (payload: any) => {
  const result = await prisma.skill.create({
    data: payload,
  });

  return result;
};
