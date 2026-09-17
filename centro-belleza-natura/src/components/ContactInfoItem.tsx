import type { AnchorHTMLAttributes, ComponentType } from 'react'

type ContactInfoItemProps = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  href?: string
  light?: boolean
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel' | 'aria-label'>

export function ContactInfoItem({ icon: Icon, label, value, href, light = false, ...anchorProps }: ContactInfoItemProps) {
  const textColor = light ? 'text-background' : 'text-secondary'
  const mutedColor = light ? 'text-background/70' : 'text-muted'

  const content = (
    <>
      <Icon className={`h-5 w-5 shrink-0 ${light ? 'text-background' : 'text-primary'}`} aria-hidden="true" strokeWidth={1.5} />
      <span className="flex flex-col">
        <span className={`text-xs uppercase tracking-wide ${mutedColor}`}>{label}</span>
        <span className={`text-sm sm:text-base ${textColor}`}>{value}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 transition-opacity hover:opacity-75" {...anchorProps}>
        {content}
      </a>
    )
  }

  return <div className="flex items-start gap-3">{content}</div>
}
