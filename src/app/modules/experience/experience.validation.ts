import { z } from "zod";

export const experienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string({ required_error: "Company name is required!" }),
    location: z.string({ required_error: "Location is required!" }),
    startDate: z.string({ required_error: "Start Date is required!" }),
    endDate: z.string({ required_error: "End Date is required!" }),
    duration: z.string({ required_error: "Duration is required!" }),
  }),
});
