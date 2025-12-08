import {
  Code,
  Container,
  FileCode,
  Flame,
  Globe,
  Layers,
  Palette,
  RefreshCw,
  Zap,
} from 'lucide-react'

export enum TechCategory {
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

export interface TechLibrary {
  label: string
  icon: React.ComponentType<{ className?: string }>
  categories: Array<TechCategory>
}

export const techLibraries: Array<TechLibrary> = [
  {
    label: 'Python',
    icon: Code,
    categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
  },
  {
    label: 'JavaScript & TypeScript',
    icon: FileCode,
    categories: [TechCategory.LANGUAGE],
  },

  {
    label: 'Go',
    icon: Code,
    categories: [TechCategory.LANGUAGE, TechCategory.BACKEND, TechCategory.API],
  },
  {
    label: 'FastAPI',
    icon: Zap,
    categories: [TechCategory.BACKEND, TechCategory.API],
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
    label: 'Bun',
    icon: Flame,
    categories: [TechCategory.TOOLING],
  },
  {
    label: 'CI/CD',
    icon: RefreshCw,
    categories: [TechCategory.DEVOPS, TechCategory.CICD],
  },
  {
    label: 'Agile Development',
    icon: RefreshCw,
    categories: [TechCategory.SKILL],
  },
]
