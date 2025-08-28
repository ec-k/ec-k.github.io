import ProfileIcon from "../components/ProfileIcon";
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <div className="h-screen w-full mt-20 gap-4">
      <h1 className="flex justify-center text-4xl">ABOUT</h1>
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center">
          <ProfileIcon src={"/images/author_image.jpg"} size={128} />
        </div>
        <div className="gap-4">
          <div>
            <p className="text-sm">Ishi Kei</p>
            <p className="text-lg">石射 彗</p>
          </div>
          <div>
            <p>怠惰．</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
