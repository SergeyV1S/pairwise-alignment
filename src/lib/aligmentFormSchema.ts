import { z } from "zod";

export const aligmentFormSchema = z
  .object({
    firstSequence: z
      .string()
      .trim()
      .toUpperCase()
      .regex(/^[ARNDCEQGHILKMFPSTWYV-]*$/, {
        message:
          "Допустимы только буквы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V, -"
      }),
    secondSequence: z
      .string()
      .trim()
      .toUpperCase()
      .regex(/^[ARNDCEQGHILKMFPSTWYV-]*$/, {
        message:
          "Допустимы только буквы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V, -"
      })
  })
  .superRefine(({ firstSequence, secondSequence }, ctx) => {
    if (firstSequence.length !== secondSequence.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Последовательности должны быть одинаковой длинны",
        path: ["secondSequence"]
      });
    }
  });

export type TAligmentFormData = z.infer<typeof aligmentFormSchema>;
