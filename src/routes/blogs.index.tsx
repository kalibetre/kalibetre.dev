import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { allBlogs } from 'content-collections'
import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'
import { Navigation, Page } from '@/components/layouts'
import { formatDateToReadable } from '@/utils/utils'
import Author from '@/components/author'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const fetchBlogPosts = createServerFn({ method: 'GET' })
  .inputValidator(z.string().optional())
  .handler(() => {
    return allBlogs.sort((a, b) => {
      if (a.comingSoon && !b.comingSoon) return 1
      if (!a.comingSoon && b.comingSoon) return -1

      return new Date(b.published).getTime() - new Date(a.published).getTime()
    })
  })

export const Route = createFileRoute('/blogs/')({
  loader: () => fetchBlogPosts(),
  head: ({ loaderData }) => {
    return {
      meta: loaderData
        ? [
            ...seo({
              title: 'Kalkidan Betre Blogs',
              description: 'Blogs by Kalkidan Betre',
            }),
            {
              name: 'author',
              content: 'Kalkidan Betre',
            },
          ]
        : [],
    }
  },
  component: BlogsPage,
})

function BlogsPage() {
  const blogs = Route.useLoaderData()

  return (
    <Page>
      <Navigation items={[]} />
      <div className="space-y-1">
        <div className="flex p-6 flex-col sm:flex-row gap-5 sm:justify-between mt-5">
          <div className="space-y-2">
            <div className="text-3xl md:text-5xl">Blogs</div>
            <div className="text-sm">Blogs about tech, life, and stuff</div>
          </div>
          <Author />
        </div>

        <div className="mt-10">
          {blogs.map((blog, idx) => (
            <div
              className={cn(
                'relative group space-y-2 p-6 border-l-0 border-background',
                !blog.comingSoon &&
                  'hover:border-slate-500/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/50',
              )}
              key={idx}
            >
              {blog.comingSoon ? (
                <div className="text-xl space-y-2">
                  <p>{blog.title}</p>
                  <div className="text-sm text-gray-500 dark:text-slate-400">
                    {blog.description}
                  </div>
                  <Badge variant="outline">Write-up coming soon</Badge>
                </div>
              ) : (
                <>
                  <div className="absolute bg-slate-500/50 w-1 top-0 -left-0.5 h-full scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>
                  <Link
                    key={idx}
                    to="/blogs/$slug"
                    params={{ slug: blog.slug }}
                    className="text-xl space-y-2 group-hover:text-slate-500 dark:group-hover:text-slate-300 transition-all ease-in-out"
                  >
                    <p>{blog.title}</p>
                    <div className="text-sm text-gray-500 dark:text-slate-400">
                      {blog.description}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-slate-400">
                      {formatDateToReadable(new Date(blog.published))}
                    </div>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}
