import ProfileIcon from "./ProfileIcon";
import SocialLinks from "./SocialLinks";

export default function AboutSection() {
  return (
    <section className="h-screen w-full pt-20" id="about-section">
      <div className="h-full px-20 grid grid-rows-[1fr_2fr] gap-10">
        <h1 className="flex justify-center items-center text-4xl">ABOUT</h1>
        <div className="h-full w-full flex justify-center items-center gap-10">
          <div className="flex items-center">
            <ProfileIcon src={"/images/author_image.jpg"} size={128} />
          </div>
          <div className="grid gap-4">
            <div>
              <p className="text-2xl font-heading">石射 彗 / ISHI Kei</p>
            </div>
            <div>
              <p className="font-text-jp">怠惰．</p>
            </div>
            <div className="flex justify-center">
              <SocialLinks gap={"gap-5"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
