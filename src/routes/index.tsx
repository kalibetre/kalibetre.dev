import { createFileRoute } from '@tanstack/react-router'
import { Construction, Github, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Construction className="w-24 h-24 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Under Construction
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Hi, I'm Kalkidan Betre!
          </p>
          <p className="text-lg text-gray-400 mb-8">
            My personal website is currently being built.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-2">
              <div
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              ></div>
              <div
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              ></div>
              <div
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              ></div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Working hard to bring you something special
          </p>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full animate-pulse"
              style={{ width: '65%' }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">65% Complete</p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:kalbetre@icloud.com"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://github.com/kalibetre"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/kalibetre"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-8">© 2025 Kalibetre.</p>
      </div>
    </div>
  )
}
