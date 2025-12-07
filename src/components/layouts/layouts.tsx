import { Footer } from './footer'

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
