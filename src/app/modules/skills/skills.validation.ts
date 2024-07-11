import { skillLevel } from "@prisma/client";
import { z } from "zod";

export const skillsValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Skill Name is required!" }),
    rate: z.number({ required_error: "Ratings is required!" }),
    icon: z.string({ required_error: "Icon is required!" }),
    level: z.enum([
      skillLevel.Advance,
      skillLevel.Intermediate,
      skillLevel.Comfortable,
      skillLevel.Beginner,
      skillLevel.Novice,
    ]),
  }),
});
