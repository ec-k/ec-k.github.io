import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPixiv } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex justify-end gap-5">
          <a href="https://www.pixiv.net/users/14838049">
            <FontAwesomeIcon
              icon={faPixiv}
              className="h-[32px]"
              color="white"
            />
          </a>
          <a href="https://github.com/ec-k">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-[32px]"
              color="white"
            />
          </a>
          <a href="https://note.com/ec_k">
            <Image
              src="/images/note_icon.svg"
              alt="note icon"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
