import Socials from '../socials'
import { Section } from './section'

export function Footer() {
  return (
    <Section className="p-6 py-10 text-center space-y-6 text-xs text-gray-500 border-b">
      <Socials />
      <div>© 2025 Kalkidan Betre</div>
    </Section>
  )
}
