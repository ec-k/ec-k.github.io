import Image from "next/image";

type Props = {
  size: number;
  categoryName: string;
  imageSrc: string;
};

/**
 * ContentCard Component: Displays a square-cropped image with text, dynamically sized.
 * NOTE: Dynamic Tailwind sizing (`h-${size}`) can fail with `next/image` due to JIT issues, preventing image display.
 * Inline pixel styles are used for parent dimensions to ensure reliable rendering.
 */
export default function ContentCard({ size, categoryName, imageSrc }: Props) {
  const cardHeight = size + 30;

  // Converts 'size' to pixels; 1 Tailwind unit equals 4px by default.
  const imageSizeInPx = size * 4;
  const cardHeightInPx = cardHeight * 4;

  return (
    <div
      style={{ height: `${cardHeightInPx}px`, width: `${imageSizeInPx}px` }}
      className={`flex flex-col justify-center`}
    >
      <h2 className="">{categoryName}</h2>
      <div
        style={{ height: `${imageSizeInPx}px`, width: `${imageSizeInPx}px` }}
        className={`relative overflow-hidden flex justify-center items-center`}
      >
        <Image
          src={imageSrc}
          alt={`Image of ${categoryName}`}
          fill
          className="object-cover"
          sizes={`${size * 4}px`}
        />
      </div>
    </div>
  );
}
