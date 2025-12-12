import { Github } from 'lucide-react'

interface GitHubProject {
  url: string
  label: string
}

interface OpenSourceProps {
  projects: Array<GitHubProject>
}

export default function OpenSource({ projects }: OpenSourceProps) {
  return (
    <div className="mt-8 p-4 bg-(--hover-color) rounded-lg border border-(--border-color)">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Github className="h-5 w-5" />
        Open Source
      </h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 transition-colors hover:text-sky-900 hover:underline"
          >
            <Github className="h-4 w-4" />
            {project.label}
          </a>
        ))}
      </div>
    </div>
  )
}
