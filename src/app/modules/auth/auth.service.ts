import { StatusCodes } from "http-status-codes";
import prisma from "../../shared/prisma";
import { TLogin } from "../../types/auth.type";

export const LoginDB = async (payload: TLogin) => {
  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: { email: payload.email },
  });

  if (isUserExist && isUserExist.password !== payload.password) {
    return new customError(
      StatusCodes.NOT_ACCEPTABLE,
      "Password doesn't matched!"
    );
  }
};
