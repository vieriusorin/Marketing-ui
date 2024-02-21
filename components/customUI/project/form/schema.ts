import { z } from 'zod'

export const ProjectSchema = z.object({
  title: z.string().nonempty('Title is required.').optional(),
  description: z.string().nonempty('Description is required.').optional(),
  status: z.enum(['IN_BACKLOG', 'IN_PROGRESS', 'IN_REVIEW', 'DONE']).optional(),
  client: z.string().optional(),
  startProject: z.date().optional(),
  endProject: z.date().optional(),
})

export type ProjectSchemaType = z.infer<typeof ProjectSchema>