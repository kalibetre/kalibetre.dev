import { ChevronLeft, Moon, Sun } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import Socials from './socials'
import { Button } from './ui/button'
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

export function Navigation() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Section className="p-0 h-12 flex items-center justify-between px-6">
      <Link
        to="/blogs"
        className="flex group items-center pr-6 gap-2 h-full transition-all ease-in-out"
      >
        <ChevronLeft className="text-slate-200 dark:text-slate-700 group-hover:text-slate-500 dark:group-hover:text-slate-300" />
        <div className="group-hover:text-slate-500 dark:group-hover:text-slate-300 text-sm">
          BLOGS
        </div>
      </Link>
      <Button onClick={toggleTheme} size="icon-sm" variant="ghost">
        {theme == 'dark' ? <Sun /> : <Moon />}
      </Button>
    </Section>
  )
}
