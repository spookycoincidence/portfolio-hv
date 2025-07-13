export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-mono text-accent leading-tight"> Huilén Vilches</h1>
      <p className="mt-4 text-xl text-textPrimary max-w-lg">
        Fullstack Developer — Golang | React | AWS
      </p>
      <nav className="mt-8 space-x-8">
        <a
          href="mailto:huilenvilches@gmail.com"
          className="text-accent hover:underline"
          aria-label="Enviar email a Huilén"
        >
          Email
        </a>
        <a
          href="https://github.com/tuusuario"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir GitHub de Huilén"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir LinkedIn de Huilén"
        >
          LinkedIn
        </a>
      </nav>
    </section>
  )
}
