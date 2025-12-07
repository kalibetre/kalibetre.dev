import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects-data'
import { Section, SectionHeader } from './layouts/section'
import type { Project } from '../data/projects-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 bg-background hover:bg-(--hover-color)">
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
