export function Button({
  children,
  href,
  className = '',
  ...props
}: {
  children: React.ReactNode
  href: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-5 py-2 font-mono text-sm text-white bg-accent hover:bg-accentHover transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
