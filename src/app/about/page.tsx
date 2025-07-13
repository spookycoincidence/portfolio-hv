
const experience = [
  {
    year: 'Enero 2020 –  Julio 2022',
    title: 'Software Engineer – Mercado Libre',
    description:
      'Desarrollo en el equipo de KYC y Prevención de Fraude: validación de identidad, manejo de datos biométricos y protección de información sensible. Implementación de middleware en Golang que conectaba frontend y backend para procesos críticos. Migración de servicios de Java a Golang. Automatización de pipelines DevSecOps, logrando un incremento del 50% en productividad del equipo. Monitoreo y detección de loops de fraude mediante métricas personalizadas (Datadog)',
  },
  {
    year: ' August 2021 - October 2021',
    title: 'Full Stack Developer – Andreani',
    description:
      'Desarrollo de sistemas de trazabilidad y monitoreo logístico para la distribución de vacunas COVID-19. Refactor del sitio institucional y la plataforma de envíos. Implementación de herramientas de monitoreo que mejoraron la estabilidad y redujeron tiempos de respuesta ante fallas.',
  },
  {
    year: 'Octubre 2021 - Diciembre 2022',
    title: 'Software Engineer – UALA',
    description:
      'Desarrollo backend para la solución de cobros Ualá Bis: links de pago, QR, acreditación inmediata. Automatización del flujo de validación de identidad durante el onboarding, reduciendo el tiempo en un 50% y mejorando la experiencia de más de 1 millón de usuarios. Implementación y optimización de APIs REST para medios de pago. Se abordó una deuda técnica significativa y se optimizó el código no funcional. Participación en la expansión regional de la billetera virtual.',
  },
  {
    year: 'Enero 2023 – Actualidad',
    title: 'Golang & React Developer – Freelancer',
    description:
      'Desarrollo de aplicaciones web y APIs REST con arquitectura hexagonal y principios SOLID. Implementación de lógica de negocio, interfaces accesibles y experiencias de usuario optimizadas.Creación de e-commerce, landings y backoffice administrativo para ONGs y marcas. Automatización de procesos, integración con servicios de terceros, y despliegue en Vercel y AWS. Asesoramiento integral en branding, identidad digital y diseño gráfico.',
  },
]

  
export default function AboutPage() {

  return (
    <section className="py-16">
      <h2 className="text-3xl font-mono text-accent mb-6">Sobre mí</h2>
      <p className="text-lg max-w-xl leading-relaxed">
        Desarrolladora fullstack con más de 4 años de experiencia en fintechs, e-commerce y logística, especializada en Golang y tecnologías cloud. Con conocimientos en React. Participé en proyectos de alto impacto como validación de identidad (KYC), prevención de fraude, y desarrollo de pasarelas de pago. Trabajo con arquitecturas limpias, microservicios y prácticas modernas de testing y CI/CD. Me motiva contribuir a soluciones con impacto social y ser parte de equipos que priorizan la innovación, la mejora continua y el aprendizaje colaborativo.
      </p>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-accent">{item.year}</p>
            <p className="mt-2 text-textPrimary">{item.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl mt-12 font-mono text-accent">Stack</h3>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {['Golang', 'React', 'TypeScript', 'Next.js', 'MySQL', 'AWS', 'Docker', 'Tailwind', 'Postman'].map((tech) => (
          <span key={tech} className="bg-card px-3 py-1 rounded-full font-mono text-accent">
            {tech}
          </span>
        ))}
      </div>

      <a
        href="/CV-HuilenVilches.pdf"
        target="_blank"
        className="inline-block mt-8 text-accent underline"
      >
        Descargar CV
      </a>
    </section>
  )
}
