import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: "نام کاربری نمی تواند خالی باشد !" }),
  otp: z
    .string()
    .trim()
    .min(1, { message: "رمز موقت نمی تواند خالی باشد !" })
    .length(4, { message: "رمز موقت نامعتبر است !" }),
});

export type LoginType = z.infer<typeof LoginSchema>;
