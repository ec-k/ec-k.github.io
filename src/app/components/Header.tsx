import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 h-16 text-white">
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      <div className="w-full h-full z-10 relative flex items-center px-20">
        <div className="w-full h-full flex justify-start gap-6 items-center">
          <Image
            src="/icon-192x192.png"
            alt="Icon of author"
            width={46}
            height={46}
          />
          <p className="text-2xl ">EC-K</p>
        </div>
        <div className="w-full h-full flex justify-end gap-5 text-lg items-center">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/works">WORKS</Link>
          <Link href="/blog">BLOG</Link>
        </div>
      </div>
    </header>
  );
}
