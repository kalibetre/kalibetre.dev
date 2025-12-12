import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { allBlogs } from 'content-collections'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { ExternalLink, Lock, Sparkles } from 'lucide-react'
import Giscus from '@giscus/react'
import { seo } from '@/utils/seo'
import Author from '@/components/author'
import { Page } from '@/components/layouts/layouts'
import { Navigation } from '@/components/layouts/navigation'
import { Section } from '@/components/layouts/section'
import { useTheme } from '@/providers/theme-provider'
import { MarkdownViewer } from '@/components/markdown/markdown-viewer'
import OpenSource from '@/components/open-source'

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
      openSource: blog.openSource,
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
    openSource,
  } = Route.useLoaderData()

  const { theme } = useTheme()

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
          <div className="px-6 py-4">
            <div className="border border-(--border-color) rounded-lg p-4 space-y-3 flex gap-2">
              <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-1" />
              <div className="flex flex-1 flex-col gap-2">
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {`This blog post is available exclusively to ${restrictedToCompany} team members. However, you can read the AI summary below.`}
                </span>
                {externalLink && (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 transition-colors hover:text-sky-900 hover:underline"
                  >
                    Access via Company Portal
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {aiSummary && (
            <Section className="px-6 pt-5">
              <div className="mb-4 prose-stone prose dark:prose-invert max-w-none bg-(--hover-color) p-4 rounded-lg border border-(--border-color)">
                <h2 className="flex gap-2 items-center text-lg font-semibold mb-2">
                  <Sparkles className="h-4 w-4" />
                  AI Summary
                </h2>
                <MarkdownViewer content={aiSummary} />
              </div>
            </Section>
          )}
        </>
      ) : (
        <Section className="prose-stone prose sm:prose-md md:prose-lg dark:prose-invert max-w-none p-6">
          <MarkdownViewer content={content} />
        </Section>
      )}

      {openSource && openSource.length > 0 && (
        <OpenSource projects={openSource} />
      )}

      <Section className="p-4">
        <Giscus
          id="comments"
          repo="kalibetre/kalibetre.dev"
          repoId="R_kgDOQS1GQQ="
          category="Announcements"
          categoryId="DIC_kwDOQS1GQc4Czgdp"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={theme}
          lang="en"
          loading="lazy"
        />
      </Section>
    </Page>
  )
}
