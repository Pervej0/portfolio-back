import { skillLevel } from "@prisma/client";

export type TSkill = {
  name: string;
  rate: number;
  icon: string;
  level: skillLevel;
  isDeleted: boolean;
};
