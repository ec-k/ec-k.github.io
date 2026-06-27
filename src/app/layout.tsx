import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lato, Zen_Kaku_Gothic_New, Kiwi_Maru } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const lato = Lato({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
});

const kiwiMaru = Kiwi_Maru({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-kiwi-maru",
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
    <html>
      <body
        className={`${lato.variable}  ${zenKaku.variable}  ${kiwiMaru.variable} antialiased`}
      >
        <div className="font-sans grid grid-rows-[1fr_min-content] min-h-screen">
          {/* <Header /> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
