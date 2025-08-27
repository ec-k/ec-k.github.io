import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid-rows-[min-content_1fr_min-content] min-h-screen p-8 pb-20 gap-16 sm:p-20 mx-auto">
      <header className="w-full max-w-7xl">
        <div className="grid grid-cols-4 content-start gap-4">
          <p>link</p>
          <a href="https://www.pixiv.net/users/14838049">Pixiv</a>
          <a href="https://github.com/ec-k">GitHub</a>
          <a href="https://note.com/ec_k">note</a>
        </div>
        <div className="grid grid-cols-3 content-start gap-4">
          <Link href="/">home</Link>
          <Link href="/blog">blog</Link>
        </div>
      </header>
      <main className="w-full max-w-7xl">
        <div className="relative h-120 mb-12 w-full overflow-hidden">
          <Image
            src="/images/my_t_pose.png"
            alt="Picture of the author"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
            className="absolute inset-0"
          />
          <div className="absolute bottom-0 left-0 z-10 p-10 text-white">
            <p className="text-6xl mb-5">怠惰．</p>
            <p className="text-xl ml-1">石射 彗 / Ishi Kei</p>
          </div>
        </div>
      </main>
    </div>
  );
}
