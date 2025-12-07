import {
  Code,
  Container,
  Database,
  FileCode,
  Flame,
  Globe,
  Layers,
  Palette,
  RefreshCw,
  Rocket,
  Users,
  Zap,
} from 'lucide-react'
import { Section, SectionHeader } from './layouts/section'

enum TechCategory {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  FRAMEWORK = 'framework',
  API = 'api',
  TOOLING = 'tooling',
  DEVOPS = 'devops',
  CICD = 'ci/cd',
  DATABASE = 'database',
  LANGUAGE = 'language',
  STYLING = 'styling',
  SKILL = 'skill',
}

interface TechLibrary {
  label: string
  icon: React.ComponentType<{ className?: string }>
  categories: Array<TechCategory>
}

export function TechLibrary({ library }: { library: TechLibrary }) {
  const Icon = library.icon
  return (
    <div className="p-4 bg-background">
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
  const libraries: Array<TechLibrary> = [
    {
      label: 'Python',
      icon: Code,
      categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
    },
    {
      label: 'JavaScript',
      icon: FileCode,
      categories: [TechCategory.LANGUAGE, TechCategory.FRONTEND],
    },
    {
      label: 'TypeScript',
      icon: FileCode,
      categories: [
        TechCategory.LANGUAGE,
        TechCategory.FRONTEND,
        TechCategory.BACKEND,
      ],
    },
    {
      label: 'Go',
      icon: Code,
      categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
    },
    {
      label: 'FastAPI',
      icon: Zap,
      categories: [TechCategory.BACKEND, TechCategory.API],
    },
    {
      label: 'PostgreSQL',
      icon: Database,
      categories: [TechCategory.BACKEND, TechCategory.DATABASE],
    },
    {
      label: 'React',
      icon: Globe,
      categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
    },
    {
      label: 'NextJS',
      icon: Globe,
      categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
    },
    {
      label: 'TanStack',
      icon: Layers,
      categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
    },
    {
      label: 'TailwindCSS',
      icon: Palette,
      categories: [TechCategory.FRONTEND, TechCategory.STYLING],
    },
    {
      label: 'Docker',
      icon: Container,
      categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
    },
    {
      label: 'Vite',
      icon: Rocket,
      categories: [TechCategory.TOOLING, TechCategory.FRONTEND],
    },
    {
      label: 'Bun',
      icon: Flame,
      categories: [TechCategory.TOOLING, TechCategory.BACKEND],
    },
    {
      label: 'CI/CD',
      icon: RefreshCw,
      categories: [TechCategory.DEVOPS, TechCategory.CICD],
    },
    {
      label: 'Team Lead',
      icon: Users,
      categories: [TechCategory.SKILL],
    },
    {
      label: 'Agile Development',
      icon: RefreshCw,
      categories: [TechCategory.SKILL],
    },
  ]

  return (
    <div>
      <SectionHeader
        title="Technical Expertise"
        subtitle="Core technologies, frameworks, and skills I work with daily"
      />
      <Section className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--border-color)">
        {libraries.map((library, idx) => (
          <TechLibrary key={idx} library={library} />
        ))}
      </Section>
    </div>
  )
}
