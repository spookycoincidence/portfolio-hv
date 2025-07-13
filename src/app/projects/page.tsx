const projects = [
  {
    slug: 'ong-platform',
    title: 'Plataforma educativa para ONG',
    description: 'Sitio completo para una ONG social, con login, clases híbridas, asistencia y carga de material educativo.',
    stack: ['Golang', 'React', 'AWS'],
  },
  {
    slug: 'cinecolor',
    title: 'Blog Cinecolor',
    description: 'Blog técnico visual sobre Technicolor y color en el cine. Hecho en Next.js con imágenes optimizadas.',
    stack: ['Next.js', 'Tailwind'],
  },
]

import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-mono text-accent mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="bg-card p-6 rounded-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold text-textPrimary">{project.title}</h3>
            <p className="mt-2 text-sm text-textPrimary">{project.description}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs bg-background text-accent px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
