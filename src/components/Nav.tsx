'use client' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacto' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6 text-sm font-mono text-accent">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:underline ${
            pathname === href ? 'underline' : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
