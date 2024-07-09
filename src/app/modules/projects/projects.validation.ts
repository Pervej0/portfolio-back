import { z } from "zod";

export const projectValidationSchema = z.object({
  body: z.object({
    projectTitle: z.string({ required_error: "projectTitle is required!" }),
    desc: z.string({ required_error: "Description is required!" }),
    image: z.string({ required_error: "Image is required!" }),
    overview: z.string({ required_error: "Overview is required!" }),
    live: z.string({ required_error: "Live link is required!" }),
    frontend: z.string({ required_error: "Frontend link is required!" }),
    backend: z.string({ required_error: "Backend link is required!" }),
    technologies: z
      .string({ required_error: "Technologies is required!" })
      .array(),
  }),
});
