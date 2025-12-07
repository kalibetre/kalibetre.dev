import { techLibraries } from '../data/tech-libraries'
import { Section, SectionHeader } from './layouts/section'
import type { TechLibrary } from '../data/tech-libraries'

export function TechLibraryItem({ library }: { library: TechLibrary }) {
  const Icon = library.icon
  return (
    <div className="p-4 bg-background hover:bg-(--hover-color)">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <div className="font-medium text-sm">{library.label}</div>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {library.categories.map((category, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs border border-(--border-color) rounded-sm"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechStacks() {
  return (
    <Section className="border-b border-t-0 mt-20">
      <SectionHeader
        title="Technical Expertise"
        subtitle="Core technologies, frameworks, and skills I work with daily"
      />
      <Section className="grid mt-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--border-color)">
        {techLibraries.map((library, idx) => (
          <TechLibraryItem key={idx} library={library} />
        ))}
      </Section>
    </Section>
  )
}
