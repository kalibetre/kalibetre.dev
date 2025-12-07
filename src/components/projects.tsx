import {
  Cloud,
  Code,
  Container,
  Database,
  FileCode,
  Globe,
  Layers,
  Rocket,
  Zap,
  ExternalLink,
  Sparkles,
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
  CLOUD = 'cloud',
  AI = 'ai',
}

interface ProjectTech {
  label: string
  icon: React.ComponentType<{ className?: string }>
  categories: Array<TechCategory>
}

interface Project {
  company: string
  title: string
  period: string
  description: string
  type: string
  tech: Array<ProjectTech>
  companyUrl?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 bg-background">
      <div className="mb-4">
        <div className="font-semibold text-lg">{project.title}</div>
        <div className="text-sm text-gray-600 mt-1">{project.period}</div>
        <div className="mt-2">
          {project.companyUrl ? (
            <a
              href={project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              {project.company}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-xs font-medium text-gray-500">
              {project.company}
            </span>
          )}
        </div>
      </div>

      <div className="text-sm mb-4">{project.description}</div>

      <div className="flex flex-wrap gap-1">
        {project.tech.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 px-2 py-1 text-xs border border-(--border-color) rounded-sm"
          >
            <tech.icon className="w-3 h-3" />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const projects: Array<Project> = [
    {
      company: 'AAI Labs',
      title: 'Export Discovery - Automated Caller Agent',
      period: 'Feb 2025 - To-Date',
      description:
        'Leading development as Team Lead and Full-Stack Engineer, architecting complete product infrastructure from inception. Implementing core enterprise features including call management systems, AI service integration, billing platforms, and third-party API integrations.',
      type: '',
      companyUrl: 'https://www.aai-labs.com/en/home',
      tech: [
        {
          label: 'AI',
          icon: Sparkles,
          categories: [TechCategory.AI],
        },
        {
          label: 'FastAPI',
          icon: Zap,
          categories: [TechCategory.BACKEND, TechCategory.API],
        },
        {
          label: 'NextJS',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'PostgreSQL',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'AAI Labs',
      title: 'GovTech NMA — Duplicate Application Detection',
      period: 'Sep 2024 – Feb 2025',
      description:
        'Architected and developed end-to-end product solution, seamlessly integrating advanced duplicate detection algorithms. Delivered measurable impact by reducing client review cycles from weeks to minutes, resulting in successful deployment and active client utilization.',
      type: '',
      companyUrl: 'https://www.aai-labs.com/en/home',
      tech: [
        {
          label: 'AI',
          icon: Sparkles,
          categories: [TechCategory.AI],
        },
        {
          label: 'FastAPI',
          icon: Zap,
          categories: [TechCategory.BACKEND, TechCategory.API],
        },
        {
          label: 'NextJS',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'PostgreSQL',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'AAI Labs',
      title: 'Paceflow - Developer productivity tracking and analytics',
      period: 'Sep 9 2023 – Sep 2024',
      description:
        'Engineered comprehensive full-stack solutions including data provider integrations, persona-based analytics, and team productivity metrics. Implemented multi-tenant architecture and Kubernetes deployment strategies, significantly enhancing platform scalability and feature set.',
      type: '',
      companyUrl: 'https://www.aai-labs.com/en/home',
      tech: [
        {
          label: 'AI',
          icon: Sparkles,
          categories: [TechCategory.AI],
        },
        {
          label: 'FastAPI',
          icon: Zap,
          categories: [TechCategory.BACKEND, TechCategory.API],
        },
        {
          label: 'NextJS',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Postgres',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
        {
          label: 'k8s',
          icon: Layers,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'ALX Africa',
      title: 'AI Curriculum Development',
      period: 'Nov 2023 - ',
      description:
        'Developing comprehensive AI integration curricula for software engineering teams, focusing on practical AI adoption methodologies and real-world implementation strategies to enhance technical capabilities and innovation.',
      type: 'Private Org Project',
      companyUrl: 'https://www.alxafrica.com/',
      tech: [
        {
          label: 'AI',
          icon: Sparkles,
          categories: [TechCategory.AI],
        },
        {
          label: 'Python',
          icon: Code,
          categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
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
      ],
    },
    {
      company: 'Other Companies',
      title: 'Land Tender Management',
      period: 'Jul 2025 - ',
      description:
        'Serving as Team Lead and Full-Stack Developer for government tender management platform. Enabling digital transformation of procurement processes through online bidding, submission, and comprehensive administrative evaluation and analysis tools.',
      type: 'Gov Project',
      tech: [
        {
          label: 'Go',
          icon: Code,
          categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
        },
        {
          label: 'Tanstack Start',
          icon: Rocket,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Postgres',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'Other Companies',
      title: 'Mini Social Media App',
      period: 'Apr 2025 - ',
      description:
        'Developed comprehensive social platform featuring location sharing, multimedia content, real-time notifications, and social networking capabilities. Engineered both backend REST APIs and mobile application, delivering seamless user experience across platforms.',
      type: 'Private Org Project',
      tech: [
        {
          label: 'Go',
          icon: Code,
          categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
        },
        {
          label: 'Maui DotNet Mobile',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Postgres',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'Other Companies',
      title: 'US SEC 13F Filings Analysis and Investment Prediction',
      period: 'Aug 2024 - March 2025',
      description:
        'Designed and deployed enterprise analytics platform for SEC 13F filing consumption and investment prediction. Engineered data processing pipelines, interactive dashboards, and predictive models to support data-driven investment strategies.',
      type: 'Private Org Project',
      tech: [
        {
          label: 'Go',
          icon: Code,
          categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
        },
        {
          label: 'React (Tanstack Router)',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Postgres',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Redis',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'Other Companies',
      title: 'Virtual Try On',
      period: 'Jan 2024 - Aug 2024',
      description:
        'Engineered innovative virtual try-on solution enabling users to upload photos and digitally model clothing from major retailers. Implemented seamless integration with e-commerce platforms, revolutionizing online shopping experience through augmented reality technology.',
      type: 'Private Org Project',
      tech: [
        {
          label: 'FastAPI',
          icon: Zap,
          categories: [TechCategory.BACKEND, TechCategory.API],
        },
        {
          label: 'NextJS',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Docker',
          icon: Container,
          categories: [TechCategory.DEVOPS, TechCategory.TOOLING],
        },
      ],
    },
    {
      company: 'Other Companies',
      title: 'Structural Integrity Checker',
      period: 'Jan 2023 - Sep 2023',
      description:
        'Sole developer responsible for engineering analysis application enabling structural design validation and integrity assessment. Delivered comprehensive solution with automated design documentation generation for engineering professionals.',
      type: 'Private Org Project',
      tech: [
        { label: 'C#', icon: Code, categories: [TechCategory.LANGUAGE] },
        {
          label: 'Desktop Application',
          icon: Globe,
          categories: [TechCategory.FRONTEND],
        },
      ],
    },
    {
      company: 'Other Companies',
      title: 'Various Mini Applications',
      period: '~ Jan 2023',
      description:
        'Developed portfolio of specialized applications addressing unique client requirements across various domains. Delivered tailored solutions using diverse technology stack to meet specific business objectives and operational needs.',
      type: '',
      tech: [
        {
          label: 'Python',
          icon: Code,
          categories: [TechCategory.LANGUAGE, TechCategory.BACKEND],
        },
        { label: 'C#', icon: Code, categories: [TechCategory.LANGUAGE] },
        { label: 'Java', icon: Code, categories: [TechCategory.LANGUAGE] },
        {
          label: 'React',
          icon: Globe,
          categories: [TechCategory.FRONTEND, TechCategory.FRAMEWORK],
        },
        {
          label: 'Postgres',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
        {
          label: 'MySQL',
          icon: Database,
          categories: [TechCategory.BACKEND, TechCategory.DATABASE],
        },
      ],
    },
  ]

  return (
    <Section className="border-t-0 mt-20 sm:mt-40">
      <SectionHeader
        title="Projects & Experience"
        subtitle="Professional projects I've worked on"
      />
      <Section className="grid mt-12 grid-cols-1 lg:grid-cols-2 gap-px bg-(--border-color)">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </Section>
    </Section>
  )
}
