import prisma from "../../shared/prisma";

export const createProjectDB = async (payload: any) => {
  return payload;
  return;
  const result = await prisma.project.create({
    data: payload,
  });

  return result;
};
