import { Home, Moon, Sun } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import Socials from './socials'
import { Button } from './ui/button'
import type {
  RegisteredRouter,
  ValidateLinkOptions,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/providers/theme-provider'

export function Section({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn('border-t p-3 border-b border-(--border-color)', className)}
    >
      {children}
    </div>
  )
}

export function Footer() {
  return (
    <Section className="p-6 py-10 text-center space-y-6 text-xs text-gray-500">
      <Socials />
      <div>© 2025 Kalkidan Betre</div>
    </Section>
  )
}

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
    <Section className="p-0 h-12 z-100 flex items-center justify-between px-6 sticky top-0 backdrop-blur-3xl">
      <div className="flex gap-1 items-center h-8">
        <Link
          to="/"
          className={cn(
            'flex group items-center justify-center gap-2 h-full transition-all ease-in-out w-10 relative ',
            items.length > 0 && 'border-r border-slate-300',
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

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="square-bg">
      <div className="max-w-4xl xl:max-w-5xl mx-auto border-l border-r border-(--border-color)">
        {children}
        <Footer />
      </div>
    </div>
  )
}
