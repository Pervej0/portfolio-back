import prisma from "../../shared/prisma";
import { TExperience } from "../../types";

export const createExperienceDB = async (payload: any) => {
  const result = await prisma.experience.create({
    data: payload,
  });

  return result;
};

export const getAllExperienceDB = async () => {
  const blogs = await prisma.experience.findMany({});
  return blogs;
};

export const getSingleExperienceDB = async (id: number) => {
  const blog = await prisma.experience.findUniqueOrThrow({
    where: { id: id },
  });
  return blog;
};

export const updateSingleExperienceDB = async (
  id: number,
  payload: Partial<TExperience>
) => {
  const result = await prisma.experience.update({
    where: { id: id },
    data: payload,
  });
  return result;
};

export const deleteExperienceDB = async (id: number) => {
  const result = await prisma.experience.update({
    where: { id: id },
    data: {
      isDeleted: true,
    },
  });

  return result;
};
