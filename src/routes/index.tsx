import { createFileRoute } from '@tanstack/react-router'
import { Construction } from 'lucide-react'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Navigation, Page } from '@/components/layouts'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Socials from '@/components/socials'

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
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-5xl">Kalkidan Betre</p>
            <Socials />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Construction className="w-12 h-12 mx-auto mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold mb-4 text-gray-400">
          Coming soon, brewing ...
        </h1>
      </div>

      <div className="flex items-center justify-center mb-60">
        <div className="flex space-x-2">
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </Page>
  )
}
