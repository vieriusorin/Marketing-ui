import { z } from 'zod'

export const ProjectFormSchema = z.object({
  id: z.string(),
  title: z.string().nonempty('Title is required.'),
})