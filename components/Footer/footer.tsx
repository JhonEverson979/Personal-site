import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faEnvelopeSquare,
  faMugHot,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full h-14 bg-transparent backdrop-filter backdrop-blur-sm text-white/70 mt-4 border-t border-gray-500/25"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-center lg:justify-between items-center h-full w-[70%] m-auto">
        <div className="flex">
          <p className="text-sm md:text-base flex gap-2">
            <span>developed with lots of</span>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>and</span>
            <span>
              <FontAwesomeIcon icon={faMugHot} />
            </span>
          </p>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-4 text-lg">
            <li className="scale-100 hover:scale-110">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jhon-everson-30409725b/"
                aria-label="footer link"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </Link>
            </li>
            <li className="scale-100 hover:scale-110">
              <Link
                target="_blank"
                href="https://github.com/JhonEverson979"
                aria-label="footer link"
              >
                <FontAwesomeIcon icon={faGithubSquare} className="w-6 h-6" />
              </Link>
            </li>
            <li className="scale-100 hover:scale-110">
              <Link
                target="_blank"
                href="mailto:jhoneverson979@gmail.com"
                aria-label="footer link"
              >
                <FontAwesomeIcon icon={faEnvelopeSquare} className="w-6 h-6" />
              </Link>
            </li>
            <li className="scale-100 hover:scale-110">
              <Link
                target="_blank"
                href={"/resume/jhon-everson-resume.pdf"}
                aria-label="footer link"
              >
                <FontAwesomeIcon icon={faFile} className=" w-[22px] h-[22px]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
