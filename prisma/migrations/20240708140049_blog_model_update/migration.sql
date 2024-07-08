/*
  Warnings:

  - Added the required column `conclusion` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc1` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc2` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc3` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intro` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "conclusion" TEXT NOT NULL,
ADD COLUMN     "desc1" TEXT NOT NULL,
ADD COLUMN     "desc2" TEXT NOT NULL,
ADD COLUMN     "desc3" TEXT NOT NULL,
ADD COLUMN     "intro" TEXT NOT NULL;
