import Image from "next/image";

type Props = {
  size: number;
  categoryName: string;
  imageSrc: string;
};

export default function ContentCard({ size, categoryName, imageSrc }: Props) {
  const cardHeight = size + 10;
  return (
    <div className={`flex h-${cardHeight} w-${size} flex-col justify-center`}>
      <h2 className="">{categoryName}</h2>
      <div
        className={`relative h-${size} w-${size} overflow-hidden flex justify-center items-center`}
      >
        <Image
          src={imageSrc}
          alt={`Image of ${categoryName}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
