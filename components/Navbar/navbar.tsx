"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faBars,
  faXmark,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    hidden ? setHidden(false) : setHidden(true);
  };

  const topbarRef = useRef<any>();
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (topbarRef.current && !topbarRef.current.contains(event.target)) {
        setHidden(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();

  return (
    <nav
      className="w-full z-50 h-14 fixed bg-slate-950 backdrop-filter backdrop-blur-sm text-white"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center h-full w-[70%] m-auto">
        <div className="flex">
          <h1 className="text-md text-iron">
            <Link href="/">Jhon Everson</Link>
          </h1>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex gap-5">
            {[
              { name: "HOME", path: "/" },
              { name: "PORTFOLIO", path: "/portfolio" },
              { name: "ABOUT-ME", path: "/aboutme" },
              { name: "CONTACT", path: "/contact" },
            ].map((link) => (
              <li
                key={link.name}
                className="scale-100 group-hover:scale-110 text-iron hover:text-slate-200"
              >
                <Link
                  href={link.path}
                  className={pathname === link.path ? "border-b" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div ref={topbarRef} className="lg:hidden">
          <button
            aria-label="nav button"
            onClick={handleClick}
            className="scale-100 hover:scale-110 text-xl"
          >
            {hidden ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div
            className={`${
              hidden ? "h-56" : "h-0"
            } bg-slate-950 mt-2 backdrop-filter backdrop-blur-sm absolute m-auto left-0 right-0 w-[100%] z-10 transition-height duration-500 ease-in-out overflow-hidden`}
          >
            <div className="flex justify-center mt-4 gap-16">
              <div className="sm:w-[20%] space-y-2 w-[30%]">
                <h2 className=" text-lg text-center">Navigation:</h2>
                <ul className="flex flex-col gap-4 text-lg ">
                  <li
                    className={`scale-100 hover:scale-110 pl-2 text-center  ${
                      pathname === "/" ? "border-b scale-110" : "border-none"
                    }`}
                  >
                    <Link href="/" aria-label="Go to About me section">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`scale-100 hover:scale-110 pl-2 text-center ${
                      pathname === "/portfolio"
                        ? "border-b scale-110"
                        : "border-none"
                    }`}
                  >
                    <Link href="/portfolio" aria-label="Go to Projects section">
                      Portfolio
                    </Link>
                  </li>
                  <li
                    className={`scale-100 hover:scale-110 pl-2 text-center ${
                      pathname === "/aboutme"
                        ? "border-b scale-110"
                        : "border-none"
                    }`}
                  >
                    <Link
                      href="/aboutme"
                      aria-label="Go to Technologies section"
                    >
                      About me
                    </Link>
                  </li>
                  <li
                    className={`scale-100 hover:scale-110 pl-2 text-center ${
                      pathname === "/contact"
                        ? "border-b scale-110"
                        : "border-none"
                    }`}
                  >
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-[20%] space-y-2 w-[30%]">
                <h2 className=" text-lg">Contacts: </h2>
                <ul className="flex flex-col gap-4 text-lg">
                  <li className="hover:bg-slate-900">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/jhon-everson-30409725b/"
                      aria-label="Visit my Linkedin profile"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                      Linkedin
                    </Link>
                  </li>
                  <li className="hover:bg-slate-900">
                    <Link
                      target="_blank"
                      href="https://github.com/JhonEverson979"
                      aria-label="Visit my GitHub profile"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="mr-2" icon={faGithubSquare} />
                      GitHub
                    </Link>
                  </li>
                  <li className="hover:bg-slate-900">
                    <Link
                      target="_blank"
                      href="mailto:jhoneverson979@gmail.com"
                      aria-label="Send me an email"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faEnvelopeSquare}
                      />
                      Email
                    </Link>
                  </li>
                  <li className="hover:bg-slate-900">
                    <Link
                      target="_blank"
                      href={"/resume/jhon-everson-resume.pdf"}
                      aria-label="resume link"
                    >
                      <FontAwesomeIcon icon={faFile} className=" mr-2" />
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
