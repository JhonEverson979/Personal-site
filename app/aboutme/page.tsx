import Image from "next/image";
import Link from "next/link";
import mePick from "../../public/images/mePick/mePick.jpeg";

const AboutMe = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center text-white">
      <div className=" w-[70%] m-auto flex flex-col-reverse md:flex-row md:gap- sm:justify-between sm:items-center">
        <div className=" md:max-w-[70%] lg:max-w-[50%] space-y-1 lg:space-y-3">
          <div className="w-full rounded-xl ">
            <div className="h-full max-w-[100%] p-[19px] space-y-4 text-lg lg:text-xl lg:space-y-2">
              <div className="flex gap-3 ">
                <h2 className="text-3xl lg:4xl sm:text-4xl lg:4xl md:text-4xl">
                  Hello,
                </h2>
                <h2 className="text-3xl lg:4xl sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  I am Jhon!
                </h2>
              </div>
              <p>
                I am a front-end web developer. I have a passion for creating
                attractive and functional graphical interfaces for websites,
                using technologies such as React | NextJS | Redux | typescript |
                Javascript | Tailwind.
              </p>
              <p>
                I have web development experience working at{" "}
                <Link className="text-blue-700" href="https://keelworks.org/">
                  KeelWorks
                </Link>{" "}
                and I help with some things at{" "}
                <Link
                  className="text-blue-700"
                  href="https://www.democracylab.org/"
                >
                  DemocracyLab
                </Link>{" "}
                as a volunteer. any challenge is not a problem because with
                persistence we can solve anyone.
              </p>
              <p>
                I am always looking to update myself and learn new tools and
                methodologies to improve myself as a professional.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto pb-16">
          <Image
            className="h-48 w-48 lg:h-48 lg:w-48 md:h-40 md:w-40 rounded-full bg-white border-indigo-900 border-2 z-10 "
            src={mePick}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
