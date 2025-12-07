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
    comingSoon: z.boolean().optional(),
    aiSummary: z.string().optional(),
    restricted: z.boolean().optional(),
    restrictedToCompany: z.string().optional(),
    externalLink: z.string().optional(),
  }),
  transform: ({ content, ...blog }) => {
    return {
      slug: blog._meta.path,
      title: blog.title,
      description: blog.description,
      published: blog.published,
      comingSoon: blog.comingSoon,
      aiSummary: blog.aiSummary,
      restricted: blog.restricted,
      restrictedToCompany: blog.restrictedToCompany,
      externalLink: blog.externalLink,
      content,
    }
  },
})

export default defineConfig({
  collections: [blogs],
})
