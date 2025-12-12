import { ExternalLink, Github } from 'lucide-react'
import { Section } from './layouts/section'

interface GitHubProject {
  url: string
  label: string
}

interface OpenSourceProps {
  projects: Array<GitHubProject>
}

export default function OpenSource({ projects }: OpenSourceProps) {
  return (
    <Section className="mt-20 p-0">
      <div className="flex items-center gap-3 p-4">
        <div className="p-2 bg-slate-900 dark:bg-slate-100 rounded-lg">
          <Github className="h-5 w-5 text-white dark:text-slate-900" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Open Source
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Explore the code and contribute to the project
          </p>
        </div>
      </div>

      <Section className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-(--border-color) overflow-hidden">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-background hover:bg-(--hover-color) transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <div className="flex-1">
                <h3 className="font-medium text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  github.com
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </Section>
    </Section>
  )
}
