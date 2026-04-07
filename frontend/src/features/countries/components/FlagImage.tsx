import Image from 'next/image'

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  fill?: boolean
}

export function FlagImage({ src, alt, className, priority, fill }: Props) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className ?? ''}`.trim()}
        priority={priority}
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={240}
      className={className}
      priority={priority}
    />
  )
}
