import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { GalleryImage } from '../config/business'

type LightboxProps = {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const total = images.length
  const goPrev = () => onNavigate((index - 1 + total) % total)
  const goNext = () => onNavigate((index + 1) % total)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  })

  const image = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos ampliada"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/95 px-4 py-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="absolute right-4 top-4 p-2 text-background transition-opacity hover:opacity-70 sm:right-8 sm:top-8"
      >
        <X className="h-7 w-7" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goPrev()
        }}
        aria-label="Imagen anterior"
        className="absolute left-2 p-2 text-background transition-opacity hover:opacity-70 sm:left-6"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-full object-contain"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goNext()
        }}
        aria-label="Imagen siguiente"
        className="absolute right-2 p-2 text-background transition-opacity hover:opacity-70 sm:right-6"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-background/70">
        {index + 1} / {total}
      </p>
    </div>
  )
}
