import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business, reviews } from '../config/business'
import { ReviewCard } from './ReviewCard'
import { SectionTitle } from './SectionTitle'

export function Reviews() {
  return (
    <section id="resenas" className="w-full bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <SectionTitle eyebrow="Reseñas" title="Lo que dicen quienes ya nos visitaron" />
          <div className="flex w-fit items-center gap-2 text-sm leading-none text-secondary">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
            {business.googleRating.toString().replace('.', ',')} en Google
          </div>
        </motion.div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:px-0 sm:pb-0">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="w-[85%] shrink-0 snap-start border-secondary/10 sm:w-auto sm:border-l sm:pl-10 sm:first:border-l-0 sm:first:pl-0"
            >
              <ReviewCard name={review.name} rating={review.rating} text={review.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
