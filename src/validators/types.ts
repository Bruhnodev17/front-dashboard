import {z} from "zod"

import {createTransactionSchema, createcategorySchema, transactionsFilterSchema} from "./schemas"

export type CreateCategoryData = z.infer<typeof createcategorySchema>

export type CreateTransactionData = z.infer<typeof createTransactionSchema>

export type TransactionsFilterData = z.infer<typeof transactionsFilterSchema>