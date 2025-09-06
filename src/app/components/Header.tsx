import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="w-full h-full z-10 relative flex items-end px-20">
        <Link href="/" className="flex justify-start gap-6 items-center">
          <Image
            src="/icon-192x192.png"
            alt="Icon of author"
            width={46}
            height={46}
          />
          <p className="text-2xl ">EC-K</p>
        </Link>
        <div className="flex flex-grow"></div>
        <nav className="flex flex-grow justify-end gap-5 text-lg items-center">
          <Link href="/#hero-section" className="hover:underline">
            HOME
          </Link>
          <Link href="/#about-section" className="hover:underline">
            ABOUT
          </Link>
          <Link href="/#works-section" className="hover:underline">
            WORKS
          </Link>
        </nav>
      </div>
    </header>
  );
}
