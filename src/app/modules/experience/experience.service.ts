import prisma from "../../shared/prisma";

export const createBExperienceDB = async (payload: any) => {
  const result = await prisma.blog.create({
    data: payload,
  });

  return result;
};
