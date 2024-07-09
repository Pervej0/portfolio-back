import { z } from "zod";

export const projectValidation = z.object({
  body: z.object({
    name: z.number({ required_error: "Number" }),
  }),
});
