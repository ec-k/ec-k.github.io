import Image from "next/image";

type Props = {
  size: number;
  categoryName: string;
  imageSrc: string;
};

export default function ContentCard({ size, categoryName, imageSrc }: Props) {
  const cardHeight = size + 10;
  const pixelSizeApprox = size * 3.5;
  return (
    <div className={`h-${cardHeight} w-${size} flex flex-col justify-center`}>
      <h2 className="">{categoryName}</h2>
      <div
        className={`h-${size} w-${size} overflow-hidden flex justify-center items-center`}
      >
        <Image
          src={imageSrc}
          alt={`Image of ${categoryName}`}
          height={pixelSizeApprox}
          width={pixelSizeApprox}
        />
      </div>
    </div>
  );
}
