import earth from "../public/images/planets/earth.png";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main className="flex">
      <div className=" h-[89vh] w-full flex flex-col justify-center items-center">
        <div className=" w-[80%]">
          <h1 className="text-3xl z-40 sm:text-5xl md:text-6xl lg:text-7xl text-gold animate-lloop font-serif">
            JHON EVERSON
          </h1>
        </div>

        <h3 className=" font-serif text-xl sm:text-2xl lg:text-4xl md:text-3xl bg-gradient-to-r text-transparent from-gray-200 to-gray-400 bg-clip-text">
          Web Developer
        </h3>
      </div>
    </main>
  );
}
