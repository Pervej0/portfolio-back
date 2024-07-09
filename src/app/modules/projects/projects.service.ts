import prisma from "../../shared/prisma";
import { TProjects } from "../../types";

export const createProjectDB = async (payload: any) => {
  const result = await prisma.project.create({
    data: payload,
  });

  return result;
};

export const getAllProjectsDB = async () => {
  const projects = await prisma.project.findMany({});
  return projects;
};

export const getSingleProjectDB = async (id: number) => {
  const projects = await prisma.project.findUniqueOrThrow({
    where: { id: id },
  });
  return projects;
};

export const updateSingleProjectDB = async (
  id: number,
  payload: Partial<TProjects>
) => {
  const projects = await prisma.project.update({
    where: { id: id },
    data: payload,
  });
  return projects;
};

export const deleteProjectDB = async (id: number) => {
  const result = await prisma.project.update({
    where: { id: id },
    data: {
      isDeleted: true,
    },
  });

  return result;
};
