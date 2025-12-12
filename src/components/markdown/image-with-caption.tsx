export const ImageWithCaption = ({
  src,
  alt,
  title,
}: {
  src: string
  alt: string
  title?: string
}) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}
