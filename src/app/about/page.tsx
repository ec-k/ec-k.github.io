import ProfileIcon from "../components/ProfileIcon";
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <div className="h-screen w-full mt-20 gap-4">
      <div className="px-20 pt-30 grid grid-template-rows gap-10">
        <h1 className="flex justify-center text-4xl">ABOUT</h1>
        <div className="h-rf1 w-full flex justify-center items-center gap-10">
          <div className="flex items-center">
            <ProfileIcon src={"/images/author_image.jpg"} size={128} />
          </div>
          <div className="grid gap-4">
            <div>
              <p className="text-2xl">石射 彗 / ISHI Kei</p>
            </div>
            <div>
              <p className="">怠惰．</p>
            </div>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
