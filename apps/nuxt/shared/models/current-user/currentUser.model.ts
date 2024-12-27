import { z } from 'zod'

export const userIdSchema = z.string().brand('userId')
export const currentUserSchema = z.object({
  id: userIdSchema,
  email: z.string(),
  role: z.string(),
})

export type CurrentUser = z.infer<typeof currentUserSchema>
export type UserId = z.infer<typeof userIdSchema>
