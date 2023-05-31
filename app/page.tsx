export default function Home() {
  // const mePick = require("../../public/images/mePick/mePick.jpeg");

  return (
    <div className=" h-[100vh] w-full flex flex-col justify-center items-center">
      <div className=" w-[80%]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gold animate-lloop font-serif">
          JHON EVERSON
        </h1>
      </div>

      <h3 className=" font-serif text-xl sm:text-2xl lg:text-4xl md:text-3xl bg-gradient-to-r text-transparent from-gray-200 to-gray-400 bg-clip-text">
        Web Developer
      </h3>
    </div>
  );
}
