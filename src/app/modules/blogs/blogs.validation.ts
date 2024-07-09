import { z } from "zod";

export const blogsValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required!" }),
    intro: z.string({ required_error: "Intro is required!" }),
    desc1: z.string({ required_error: "desc1 is required!" }),
    desc2: z.string({ required_error: "desc2 is required!" }),
    desc3: z.string({ required_error: "desc3 is required!" }),
    conclusion: z.string({ required_error: "conclusion is required!" }),
    mainImage: z.string({ required_error: "mainImage is required!" }),
    images: z.string({ required_error: "images is required!" }).array(),
    isDeleted: z.boolean({ required_error: "IsDeleted is required!" }),
  }),
});
