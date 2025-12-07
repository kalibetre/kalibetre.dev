import {
  Bot,
  Calendar,
  Code2,
  Cpu,
  FileText,
  Key,
  Monitor,
  Terminal,
} from 'lucide-react'

export enum DevToolCategory {
  IDE = 'IDE',
  TERMINAL = 'Terminal',
  PRODUCTIVITY = 'Productivity',
  AI = 'AI',
  SSH = 'SSH Client',
}

export interface DevTool {
  label: string
  icon: React.ComponentType<{ className?: string }>
  category: DevToolCategory
  url: string
}

export const devTools: Array<DevTool> = [
  {
    label: 'Zed',
    icon: Code2,
    category: DevToolCategory.IDE,
    url: 'https://zed.dev/',
  },
  {
    label: 'Ghostty',
    icon: Terminal,
    category: DevToolCategory.TERMINAL,
    url: 'https://ghostty.org/',
  },
  {
    label: 'Tmux',
    icon: Monitor,
    category: DevToolCategory.TERMINAL,
    url: 'https://github.com/tmux/tmux/wiki',
  },
  {
    label: 'Obsidian',
    icon: FileText,
    category: DevToolCategory.PRODUCTIVITY,
    url: 'https://obsidian.md/',
  },
  {
    label: 'Fizzy',
    icon: Calendar,
    category: DevToolCategory.PRODUCTIVITY,
    url: 'https://www.fizzy.do/',
  },
  {
    label: 'Rider',
    icon: Cpu,
    category: DevToolCategory.IDE,
    url: 'https://www.jetbrains.com/rider/',
  },
  {
    label: 'OpenCode',
    icon: Bot,
    category: DevToolCategory.AI,
    url: 'https://opencode.ai/',
  },
  {
    label: 'Termius',
    icon: Key,
    category: DevToolCategory.SSH,
    url: 'https://termius.com/',
  },
]
