import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { ImageWithCaption } from './image-with-caption'

export function MarkdownViewer({ content }: { content: string }) {
  return (
    <Markdown
      remarkPlugins={[
        remarkGfm,
        [remarkToc, { heading: 'Contents', maxDepth: 3 }],
      ]}
      rehypePlugins={[rehypeHighlight, rehypeSlug]}
      components={{
        img: ({ src, alt, title }) => (
          <ImageWithCaption src={src!} alt={alt || ''} title={title} />
        ),
      }}
    >
      {content}
    </Markdown>
  )
}
