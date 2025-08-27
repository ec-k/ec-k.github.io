import Link from "next/link";
import PortfolioHome from "./portfolio/PortfolioHome";

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
        <PortfolioHome />
      </header>
    </div>
  );
}
