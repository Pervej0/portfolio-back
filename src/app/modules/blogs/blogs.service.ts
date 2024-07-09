import prisma from "../../shared/prisma";
import { TBlog } from "../../types/blog.type";

export const createBlogDB = async (payload: any) => {
  const result = await prisma.blog.create({
    data: payload,
  });

  return result;
};

export const getAllBlogsDB = async () => {
  const blogs = await prisma.blog.findMany({});
  return blogs;
};

export const getSingleBlogDB = async (id: number) => {
  const blog = await prisma.blog.findUniqueOrThrow({
    where: { id: id },
  });
  return blog;
};
export const updateSingleBlogDB = async (
  id: number,
  payload: Partial<TBlog>
) => {
  const result = await prisma.blog.update({
    where: { id: id },
    data: payload,
  });
  return result;
};

export const deleteBlogDB = async (id: number) => {
  const result = await prisma.blog.update({
    where: { id: id },
    data: {
      isDeleted: true,
    },
  });

  return result;
};
