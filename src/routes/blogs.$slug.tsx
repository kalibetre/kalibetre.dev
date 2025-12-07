import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { allBlogs } from 'content-collections'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { ExternalLink, Lock, Sparkles } from 'lucide-react'
import { seo } from '@/utils/seo'
import Author from '@/components/author'
import { Page } from '@/components/layouts/layouts'
import { Navigation } from '@/components/layouts/navigation'
import { Section } from '@/components/layouts/section'

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
      aiSummary: blog.aiSummary,
      restricted: blog.restricted,
      restrictedToCompany: blog.restrictedToCompany,
      externalLink: blog.externalLink,
    }
  })

export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }) => fetchBlogPost({ data: params.slug }),
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
  component: BlogPage,
})

function BlogPage() {
  const {
    title,
    description,
    published,
    content,
    aiSummary,
    restricted,
    restrictedToCompany,
    externalLink,
  } = Route.useLoaderData()

  return (
    <Page>
      <Navigation
        items={[
          {
            linkOptions: { to: '/blogs' },
            title: 'blogs',
          },
        ]}
      />
      <div className="space-y-1 p-6">
        <div className="text-3xl md:text-5xl">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
      <Section className="px-6 py-4">
        <Author publishedOn={published} />
      </Section>

      {restricted ? (
        <>
          <Section className="px-6 py-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Lock className="h-12 w-12 text-gray-400" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Restricted Content
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  This blog post is available exclusively to{' '}
                  {restrictedToCompany} team members. But you can read the AI
                  summary below
                </p>
              </div>
              {externalLink && (
                <div className="pt-4">
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Access via Company Portal
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </Section>
          {aiSummary && (
            <Section className="px-6 pt-5">
              <div className="mb-4 prose-stone prose-sm dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="flex gap-2 items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  <Sparkles className="h-4 w-4" />
                  AI Summary
                </h2>
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight, rehypeSlug]}
                >
                  {aiSummary}
                </Markdown>
              </div>
            </Section>
          )}
        </>
      ) : (
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
      )}
    </Page>
  )
}
