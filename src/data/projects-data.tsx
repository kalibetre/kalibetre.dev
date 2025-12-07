import {
  Cloud,
  Code,
  Container,
  Database,
  FileCode,
  Globe,
  Layers,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react'

export interface ProjectTech {
  label: string
  icon: React.ComponentType<{ className?: string }>
  categories: Array<string>
}

export interface Project {
  company: string
  title: string
  period: string
  description: string
  type: string
  tech: Array<ProjectTech>
  companyUrl?: string
}

export const projects: Array<Project> = [
  {
    company: 'AAI Labs',
    title: 'Export Discovery - Autonomous Caller Agent',
    period: 'Feb 2025 - To-Date',
    description:
      'Leading development as Team Lead and Full-Stack Engineer, architecting complete product infrastructure from inception. Implementing core enterprise features including call management systems, AI service integration, billing platforms, and third-party API integrations.',
    type: '',
    companyUrl: 'https://www.aai-labs.com/en/home',
    tech: [
      {
        label: 'FastAPI',
        icon: Zap,
        categories: ['backend', 'api'],
      },
      {
        label: 'NextJS',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'PostgreSQL',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'GCP',
        icon: Cloud,
        categories: ['devops', 'cloud'],
      },
      {
        label: 'AI',
        icon: Sparkles,
        categories: ['ai'],
      },
    ],
  },
  {
    company: 'AAI Labs',
    title: 'GovTech NMA — Duplicate Funding Application Analysis and Detection',
    period: 'Sep 2024 – Feb 2025',
    description:
      'Architected and developed end-to-end product solution, seamlessly integrating advanced duplicate detection algorithms. Delivered measurable impact by reducing client review cycles from weeks to minutes, resulting in successful deployment and active client utilization.',
    type: '',
    companyUrl: 'https://www.aai-labs.com/en/home',
    tech: [
      {
        label: 'FastAPI',
        icon: Zap,
        categories: ['backend', 'api'],
      },
      {
        label: 'NextJS',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'PostgreSQL',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Redis',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
      },
      {
        label: 'AI',
        icon: Sparkles,
        categories: ['ai'],
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
        label: 'FastAPI',
        icon: Zap,
        categories: ['backend', 'api'],
      },
      {
        label: 'NextJS',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Postgres',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Redis',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
      },
      {
        label: 'k8s',
        icon: Layers,
        categories: ['devops', 'tooling'],
      },
      {
        label: 'AI',
        icon: Sparkles,
        categories: ['ai'],
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
        categories: ['language', 'backend'],
      },
      {
        label: 'Tanstack Start',
        icon: Rocket,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Postgres',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Redis',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
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
        categories: ['language', 'backend'],
      },
      {
        label: 'Maui DotNet Mobile',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Postgres',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Redis',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
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
        categories: ['language', 'backend'],
      },
      {
        label: 'React (Tanstack Router)',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Postgres',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Redis',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
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
        categories: ['backend', 'api'],
      },
      {
        label: 'NextJS',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Docker',
        icon: Container,
        categories: ['devops', 'tooling'],
      },
      {
        label: 'AI',
        icon: Sparkles,
        categories: ['ai'],
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
        label: 'Python',
        icon: Code,
        categories: ['language', 'backend'],
      },
      {
        label: 'TypeScript',
        icon: FileCode,
        categories: ['language', 'frontend', 'backend'],
      },
      {
        label: 'AI',
        icon: Sparkles,
        categories: ['ai'],
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
      { label: 'C#', icon: Code, categories: ['language'] },
      {
        label: 'Desktop Application',
        icon: Globe,
        categories: ['frontend'],
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
        categories: ['language', 'backend'],
      },
      { label: 'C#', icon: Code, categories: ['language'] },
      { label: 'Java', icon: Code, categories: ['language'] },
      {
        label: 'React',
        icon: Globe,
        categories: ['frontend', 'framework'],
      },
      {
        label: 'Postgres',
        icon: Database,
        categories: ['backend', 'database'],
      },
      {
        label: 'MySQL',
        icon: Database,
        categories: ['backend', 'database'],
      },
    ],
  },
]
