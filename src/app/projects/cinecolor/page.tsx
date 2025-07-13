export default function ONGProjectPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-mono text-accent mb-4">Plataforma educativa para ONG</h1>
      <p className="mb-4">
        Proyecto freelance de gran escala realizado para una ONG con aval estatal. Incluye funcionalidades como:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Login con validación y verificación</li>
        <li>Clases híbridas (presencial + virtual)</li>
        <li>Subida y descarga de material</li>
        <li>Control de asistencia</li>
      </ul>
      <p>
        Backend desarrollado con Golang y MySQL. Frontend en React + Tailwind. Infraestructura en AWS con buenas prácticas de seguridad.
      </p>
    </section>
  )
}
