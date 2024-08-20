import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().min(1, { message: 'ID Pengguna tidak boleh kosong'}),
    password: z.string().min(1, { message: 'Password tidak boleh kosong'}),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>;