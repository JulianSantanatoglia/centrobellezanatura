import type { Service } from '../config/business'

type ServiceItemProps = {
  service: Service
  index: number
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  return (
    <div className="flex items-start gap-6 border-b border-secondary/10 py-8 first:pt-0 last:border-b-0">
      <span className="mt-1 font-serif text-2xl text-primary" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-2xl text-secondary">{service.name}</h3>
          <p className="max-w-md text-sm text-muted sm:text-base">{service.description}</p>
        </div>
        {service.price !== null && (
          <span className="whitespace-nowrap font-serif text-xl text-secondary">Desde {service.price} €</span>
        )}
      </div>
    </div>
  )
}
