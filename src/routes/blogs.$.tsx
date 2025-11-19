import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { allBlogs } from 'content-collections'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { seo } from '@/utils/seo'
import Author from '@/components/author'
import { Footer, Navigation, Section } from '@/components/layouts'

const fetchBlogPost = createServerFn({ method: 'GET' })
  .inputValidator(z.string().optional())
  .handler(({ data: slug }) => {
    const blog = allBlogs.find((b) => b.slug === slug)

    if (!blog) {
      throw notFound()
    }

    return {
      title: blog.title,
      description: blog.description,
      published: blog.published,
      content: blog.content,
    }
  })

export const Route = createFileRoute('/blogs/$')({
  loader: ({ params }) => fetchBlogPost({ data: params._splat }),
  head: ({ loaderData }) => {
    return {
      meta: loaderData
        ? [
            ...seo({
              title: `${loaderData.title} | Kalkidan Betre Blog`,
              description: loaderData.description,
            }),
            {
              name: 'author',
              content: 'Kalkidan Betre',
            },
          ]
        : [],
    }
  },
  notFoundComponent: () => <div>Blog Not Found</div>,
  component: Blog,
})

function Blog() {
  const { title, description, published, content } = Route.useLoaderData()

  return (
    <div className="square-bg">
      <div className="max-w-4xl mx-auto border-l border-r border-(--border-color)">
        <Navigation />
        <div className="space-y-1 p-6">
          <div className="text-3xl md:text-5xl">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
        <Section className="px-6">
          <Author publishedOn={published} />
        </Section>
        <div className="prose-stone prose sm:prose-md md:prose-lg dark:prose-invert max-w-none p-6 mx-3">
          <Markdown
            remarkPlugins={[
              remarkGfm,
              [remarkToc, { heading: 'Contents', maxDepth: 3 }],
            ]}
            rehypePlugins={[rehypeHighlight, rehypeSlug]}
          >
            {content}
          </Markdown>
        </div>
        <Footer />
      </div>
    </div>
  )
}
