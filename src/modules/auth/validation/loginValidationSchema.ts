import { emailRegex, passwordRegex } from '@/constants/regexes';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Az email cím megadása kötelező')
    .refine(value => emailRegex.test(value), 'Érvénytelen email cím'),

  password: z
    .string()
    .trim()
    .min(1, 'A jelszó megadása kötelező')
    .regex(passwordRegex, 'A jelszónak legalább 8 karakter hosszúnak kell lennie, és tartalmaznia kell egy nagybetűt, egy kisbetűt, egy számot és egy speciális karaktert'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
