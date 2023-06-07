import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
          <h1 className="text-iron">developed with lots of love and coffee</h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-4 text-lg">
            <li className="scale-100 hover:scale-110">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jhon-everson-30409725b/"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </Link>
            </li>
            <li className="scale-100 hover:scale-110">
              <Link target="_blank" href="https://github.com/JhonEverson979">
                <FontAwesomeIcon icon={faGithubSquare} className="w-6 h-6" />
              </Link>
            </li>
            <li className="scale-100 hover:scale-110">
              <Link target="_blank" href="mailto:jhoneverson979@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
