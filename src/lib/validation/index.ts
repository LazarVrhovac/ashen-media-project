import { z } from 'zod';

export const signupValidation = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  username: z.string().min(2, { message: 'Username is too short' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password should have 8 characthers' }),
});

export const signinValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password should have 8 characthers' }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(85),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  username: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  bio: z.string(),
});
