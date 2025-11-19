import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const blogs = defineCollection({
  name: 'blogs',
  directory: 'src/blogs',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.string().date(),
    content: z.string(),
  }),
  transform: ({ content, ...blog }) => {
    return {
      slug: blog._meta.path,
      title: blog.title,
      description: blog.description,
      published: blog.published,
      content,
    }
  },
})

export default defineConfig({
  collections: [blogs],
})
