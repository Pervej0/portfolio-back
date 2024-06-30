import { UserRole } from "@prisma/client";
import prisma from "../src/app/shared/prisma";

const authorEmail = "admin0@gmail.com";

const createMe = async () => {
  try {
    // check author already created or not
    const isExist = await prisma.user.findFirst({
      where: {
        email: authorEmail,
      },
    });
    // create author
    let author;
    if (!isExist) {
      author = await prisma.user.create({
        data: {
          name: "Md Pervej Hossain",
          email: authorEmail,
          role: UserRole.Author,
          password: "135790",
        },
      });
    }

    console.log("Author created successfully!", author);
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

createMe();
