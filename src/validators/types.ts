import {z} from "zod"

import {createTransactionSchema, createcategorySchema} from "./schemas"

export type CreateCategoryData = z.infer<typeof createcategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>