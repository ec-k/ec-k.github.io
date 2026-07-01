import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full" id="hero-section">
      <Image
        src="/images/hero_tmp.png"
        alt="Picture of the author"
        width={1920}
        height={1080}
        style={{ width: "100%", height: "auto" }}
        priority
        quality={80}
      />
      {/* <div className="absolute bottom-0 left-0 z-10 p-10 text-white">
        <p className="text-6xl mb-5">怠惰．</p>
        <p className="text-xl ml-1">石射 彗 / Ishi Kei</p>
      </div> */}
    </section>
  );
}
