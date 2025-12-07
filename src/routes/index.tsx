import { createFileRoute } from '@tanstack/react-router'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Page } from '@/components/layouts/layouts'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Socials from '@/components/socials'
import { TechStacks } from '@/components/tech-stacks'
import { Navigation } from '@/components/layouts/navigation'
import { Projects } from '@/components/projects'
import { DevTools } from '@/components/dev-tools'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <Page>
      <Navigation
        items={[
          {
            linkOptions: { to: '/blogs' },
            title: 'Blogs',
          },
        ]}
      />
      <div className="mx-auto flex justify-center items-center my-20">
        <div className="mx-auto gap-4 flex flex-col justify-center items-center">
          <Avatar className="h-28 w-28">
            <AvatarImage src="/kalibetre.jpg" alt="@kalibetre" />
            <AvatarFallback className="text-4xl">KB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-5xl">Kalkidan Betre</p>
            <p className="text-xl">Software Engineer</p>
            <Socials />
          </div>
        </div>
      </div>

      <TechStacks />

      <Projects />

      <DevTools />
    </Page>
  )
}
