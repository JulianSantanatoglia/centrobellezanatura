import { motion } from 'framer-motion'
import { useState } from 'react'
import { business } from '../config/business'
import { Lightbox } from './Lightbox'
import { SectionTitle } from './SectionTitle'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const images = business.images.gallery

  return (
    <section id="galeria" className="w-full bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Galería"
            title="Trabajos reales, hechos aquí"
            description="Una muestra de nuestros diseños de uñas — cada foto es un trabajo real hecho en el salón."
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden"
              aria-label={`Ampliar foto: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
