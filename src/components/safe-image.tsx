'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

type SafeImageProps = Omit<ImageProps, 'src'> & {
  src: string
  fallbackSrc?: string
  fallbackSrcs?: string[]
}

export default function SafeImage({ src, alt, fallbackSrc, fallbackSrcs, width, height, ...rest }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [attempt, setAttempt] = useState(0)

  const fallbacks = [
    fallbackSrc || (typeof width === 'number' && typeof height === 'number'
      ? `https://source.unsplash.com/${width}x${height}/?stock-market,chart`
      : 'https://source.unsplash.com/1200x675/?stock-market,chart'),
    (typeof width === 'number' && typeof height === 'number')
      ? `https://picsum.photos/${width}/${height}`
      : 'https://picsum.photos/1200/675',
    ...(fallbackSrcs || [])
  ]

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      onError={() => {
        if (attempt < fallbacks.length) {
          setCurrentSrc(fallbacks[attempt])
          setAttempt(attempt + 1)
        }
      }}
    />
  )
}