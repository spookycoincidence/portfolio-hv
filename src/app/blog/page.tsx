import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-mono text-accent mb-6">Blog</h2>
      <div className="space-y-4">
        <Link href="/blog/transicion-freelance">
          <article className="bg-card p-6 rounded hover:scale-[1.01] transition">
            <h3 className="text-xl font-bold text-textPrimary">
              De trabajar en un unicornio a la independencia freelance
            </h3>
            <p className="text-sm mt-2 text-textPrimary">
              Una reflexión sobre la libertad, los desafíos y aprendizajes de dejar la relación de dependencia.
            </p>
          </article>
        </Link>
      </div>
    </section>
  )
}


