import { devTools } from '../data/dev-tools'
import { Section, SectionHeader } from './layouts/section'
import { ExternalLink } from 'lucide-react'
import type { DevTool } from '../data/dev-tools'

export function DevToolItem({ tool }: { tool: DevTool }) {
  const Icon = tool.icon
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-background hover:bg-(--hover-color) transition-colors group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          <div className="font-medium text-sm">{tool.label}</div>
        </div>
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 dark:text-gray-400" />
      </div>
      <div className="mt-2">
        <span className="px-2 py-1 text-xs border border-(--border-color) rounded-sm">
          {tool.category}
        </span>
      </div>
    </a>
  )
}

export function DevTools() {
  return (
    <Section className="border-b border-t-0 mt-20">
      <SectionHeader
        title="Daily Drivers"
        subtitle="Development tools and applications I use every day"
      />
      <Section className="grid mt-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--border-color)">
        {devTools.map((tool, idx) => (
          <DevToolItem key={idx} tool={tool} />
        ))}
      </Section>
    </Section>
  )
}
