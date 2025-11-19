import { Github, Linkedin, Mail } from 'lucide-react'
import type { ReactNode } from 'react'

function SocialItem({
  href,
  children,
  ariaLabel,
}: {
  href: string
  children?: ReactNode
  ariaLabel: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-0 hover:scale-110 transition-all duration-300 group"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default function Socials() {
  return (
    <div className="flex justify-center space-x-4 [--social-icon-size:20px]">
      <SocialItem href="https://github.com/kalibetre" ariaLabel="GitHub">
        <Github className="text-gray-400 transition-colors h-(--social-icon-size) w-(--social-icon-size)" />
      </SocialItem>
      <SocialItem href="https://linkedin.com/in/kalibetre" ariaLabel="Email">
        <Linkedin className="text-gray-400 transition-colors h-(--social-icon-size) w-(--social-icon-size)" />
      </SocialItem>
      <SocialItem href="mailto:kalbetre@icloud.com" ariaLabel="Email">
        <Mail className="text-gray-400 transition-colors h-(--social-icon-size) w-(--social-icon-size)" />
      </SocialItem>
    </div>
  )
}
