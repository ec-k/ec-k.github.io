import Image from "next/image";

export default function PortfolioHome() {
  return (
    <main className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
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
  );
}
