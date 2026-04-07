import Image from 'next/image'

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function FlagImage({ src, alt, className, priority }: Props) {
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
