import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('border-t border-(--border-color)', className)}>
      {children}
    </div>
  )
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-3">
      <h2 className="text-xl text-center">{title}</h2>
      {subtitle && <p className="text-sm text-center">{subtitle}</p>}
    </div>
  )
}
