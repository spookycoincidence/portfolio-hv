export default function ContactPage() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-mono text-accent mb-6">Contacto</h2>
      <p className="text-lg mb-4">
        ¿Querés trabajar conmigo o tenés un proyecto en mente? Me podés contactar por:
      </p>

      <ul className="space-y-2">
        <li>
          <a href="mailto:huilenvilches@gmail.com" className="text-accent underline">
            huilenvilches@gmail.com
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/spookycoincidence" className="text-accent underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/spookycoincidence" className="text-accent underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}
