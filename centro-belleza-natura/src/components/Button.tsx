import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

// "primary"/"secondary" son para fondos claros (background/surface).
// "light"/"lightOutline" son su equivalente para fondos oscuros (hero, secciones bg-secondary).
type Variant = 'primary' | 'secondary' | 'light' | 'lightOutline'
type Size = 'md' | 'sm'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-secondary text-background hover:bg-primary hover:text-secondary',
  secondary: 'bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-background',
  light: 'bg-background text-secondary hover:bg-primary hover:text-secondary',
  lightOutline: 'bg-transparent text-background border border-background/60 hover:bg-background hover:text-secondary',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-8 py-4',
  sm: 'px-6 py-3',
}

// leading-none evita que el line-height por defecto del texto descentre la línea de base
// respecto al ícono adyacente (el icono se centra por su altura fija, el texto por su caja de línea).
const baseClasses =
  'inline-flex items-center justify-center gap-3 text-xs font-medium uppercase leading-none tracking-widest transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&_svg]:shrink-0'

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
