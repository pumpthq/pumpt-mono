import * as z from "zod";
export const SignupInput = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
  role: z.string()
});
export const LoginInput = z.object({
  email: z.string().email(),
  password: z.string()
});