import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center bg-black">
      <div className="w-full flex justify-start gap-6 ml-20 items-center">
        <Image
          src="/icon-192x192.png"
          alt="Icon of author"
          width={46}
          height={46}
        />
        <p className="text-2xl ">EC-K</p>
      </div>
      <div className="w-full flex justify-end gap-5 text-lg mr-20">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/works">WORKS</Link>
        <Link href="/blog">BLOG</Link>
      </div>
    </header>
  );
}
