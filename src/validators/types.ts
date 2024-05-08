import {z} from "zod"

import {createcategorySchema} from "./schemas"

export type CreateCategoryData = z.infer<typeof createcategorySchema>