import { Home, Moon, Sun } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { Section } from './section'
import type {
  RegisteredRouter,
  ValidateLinkOptions,
} from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { useTheme } from '@/providers/theme-provider'

export interface NavigationItem<
  TRouter extends RegisteredRouter = RegisteredRouter,
  TOptions = unknown,
> {
  title: string
  linkOptions: ValidateLinkOptions<TRouter, TOptions>
}

export interface NavigationProps {
  items: Array<NavigationItem>
}

export function Navigation({ items }: { items: Array<NavigationItem> }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <Section className="p-0 h-12 z-100 flex items-center justify-between px-6 sticky top-0 bg-background border-b">
      <div className="flex gap-1 items-center h-8">
        <Link
          to="/"
          className={cn(
            'flex group items-center justify-center gap-2 h-full transition-all ease-in-out w-10 relative ',
            items.length > 0 && 'border-r border-(--border-color)',
          )}
        >
          <Home className="absolute left-0 group-hover:text-slate-500 dark:group-hover:text-slate-500" />
        </Link>
        {items.map((item, idx) => (
          <Link
            key={idx}
            {...item.linkOptions}
            className={cn(
              'flex group items-center justify-center gap-2 h-full w-24 transition-all ease-in-out',
            )}
          >
            <div className="group-hover:text-slate-500 dark:group-hover:text-slate-300 text-sm uppercase">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
      <Button onClick={toggleTheme} size="icon-sm" variant="ghost">
        {theme == 'dark' ? <Sun /> : <Moon />}
      </Button>
    </Section>
  )
}
