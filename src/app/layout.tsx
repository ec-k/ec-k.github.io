import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EC-K",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full max-w-7xl">
          <div className="flex justify-start gap-4">
            <Link href="/">home</Link>
            <Link href="/blog">blog</Link>
          </div>
          <div className="flex justify-end gap-4">
            <a href="https://www.pixiv.net/users/14838049">Pixiv</a>
            <a href="https://github.com/ec-k">GitHub</a>
            <a href="https://note.com/ec_k">note</a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
