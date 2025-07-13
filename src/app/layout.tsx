import './globals.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/fira-code/400.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-background text-textPrimary font-sans">
        <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  )
}
