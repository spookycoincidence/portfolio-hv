import './globals.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/fira-code/400.css'
import { Nav } from '@/components/Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-background text-textPrimary font-sans">
        <main className="max-w-3xl mx-auto px-6 py-10">
          <Nav />
          {children}
          <footer className="mt-12 border-t border-card pt-6 text-sm text-textPrimary/80">
            <p>© {new Date().getFullYear()} Huilén Vilches</p>
            <p>
              Contacto: {' '}
              <a href="mailto:huilenvilches@gmail.com" className="text-accent underline">
                huilenvilches@gmail.com
              </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  )
}
