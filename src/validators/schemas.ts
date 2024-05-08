import z from "zod"

export const createcategorySchema = z.object({
    title: z
    .string()
    .min(1, {message: "eve conter pelo menos 1 caractere."})
    .max(255),
    color: z
    .string()
})