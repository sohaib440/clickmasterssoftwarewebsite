import Image from "next/image";

import { cn } from "@/lib/utils";

export type CardImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CardImageProps = CardImageData & {
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
};

export function CardImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  quality = 75,
}: CardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("block w-full object-cover", className)}
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "low"}
    />
  );
}
