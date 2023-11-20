import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(255)
    .max(65535)
    .transform((value) => value.replace(/\b\w/g, (char) => char.toUpperCase())),
  description: z.string().min(1, "Description is required."),
});
export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  // .transform((value) => value.replace(/\b\w/g, (char) => char.toUpperCase())),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserID: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
