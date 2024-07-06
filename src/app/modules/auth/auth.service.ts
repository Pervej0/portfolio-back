import { StatusCodes } from "http-status-codes";
import prisma from "../../shared/prisma";
import { TLogin } from "../../types/auth.type";
import customError from "../../errors/customError";
import { UserRole } from "@prisma/client";
import generateToken from "../../shared/generateToken";

export const LoginDB = async (payload: TLogin) => {
  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: { email: payload.email },
  });

  if (isUserExist && isUserExist.password !== payload.password) {
    new customError(StatusCodes.NOT_ACCEPTABLE, "Password doesn't matched!");
  }

  const jwtPayload = {
    email: isUserExist.email,
    role: UserRole.Author,
  };

  const token = generateToken(jwtPayload);
  return token;
};
