type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({ eyebrow, title, description, align = 'left', light = false }: SectionTitleProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const textColor = light ? 'text-background' : 'text-secondary'
  const mutedColor = light ? 'text-background/75' : 'text-muted'

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] ${mutedColor}`}>
          <span className={`h-px w-6 ${light ? 'bg-background/50' : 'bg-primary'}`} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-tight ${textColor}`}>{title}</h2>
      {description && <p className={`max-w-xl text-base sm:text-lg ${mutedColor}`}>{description}</p>}
    </div>
  )
}
