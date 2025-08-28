import Image from "next/image";

type Props = {
  src: string;
  size: number;
};

export default function ProfileIcon({ src, size = 128 }: Props) {
  return (
    <Image
      src={src}
      alt="Image of author"
      width={size}
      height={size}
      className="rounded-full"
    />
  );
}
