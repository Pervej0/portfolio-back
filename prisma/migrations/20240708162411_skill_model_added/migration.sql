-- CreateEnum
CREATE TYPE "skillLevel" AS ENUM ('Advance', 'Intermediate', 'Comfortable', 'Beginner', 'Novice');

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "icon" TEXT NOT NULL,
    "level" "skillLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);
