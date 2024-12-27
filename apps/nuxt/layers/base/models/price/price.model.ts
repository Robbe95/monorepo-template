import { z } from 'zod'

export const priceSchema = z.number().min(0).brand('price')

export type Price = z.infer<typeof priceSchema>
