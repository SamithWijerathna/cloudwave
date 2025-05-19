"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LogoProps {
  src: string
  fallbackSrc: string
  alt: string
  width: number
  height: number
}

export default function LogoWithFallback({ src, fallbackSrc, alt, width, height }: LogoProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Reset state when src changes
    setImgSrc(src)
    setLoading(true)
  }, [src])

  return (
    <div className="relative">
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-orange-100 dark:bg-slate-800 rounded"
          style={{ width, height }}
        >
          <span className="text-orange-500 font-bold text-xl">CloudWave</span>
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority
        onLoad={() => setLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
      />
    </div>
  )
}
