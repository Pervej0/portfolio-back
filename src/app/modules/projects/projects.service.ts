import prisma from "../../shared/prisma";

export const createProjectDB = async (payload: any) => {
  const result = await prisma.project.create({
    data: payload,
  });

  return result;
};
