import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center">
      <div className="w-full gap-5 ml-20">
        <p className="text-2xl ">EC-K</p>
      </div>
      <div className="w-full flex justify-end gap-5 text-lg mr-20">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/blog">BLOG</Link>
      </div>
    </header>
  );
}
