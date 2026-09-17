import { Star } from 'lucide-react'

type ReviewCardProps = {
  name: string
  rating: number
  text: string
}

export function ReviewCard({ name, rating, text }: ReviewCardProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < rating ? 'h-4 w-4 fill-primary text-primary' : 'h-4 w-4 text-secondary/20'}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="flex-1 font-serif text-lg italic leading-relaxed text-secondary">"{text}"</p>
      <p className="text-sm text-muted">{name} — Reseña de Google</p>
    </div>
  )
}
