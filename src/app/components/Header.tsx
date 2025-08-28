import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex justify-start gap-4">
          <Link href="/">home</Link>
          <Link href="/blog">blog</Link>
        </div>
        <div className="flex justify-end gap-4">
          <a href="https://www.pixiv.net/users/14838049">Pixiv</a>
          <a href="https://github.com/ec-k">GitHub</a>
          <a href="https://note.com/ec_k">note</a>
        </div>
      </div>
    </header>
  );
}
