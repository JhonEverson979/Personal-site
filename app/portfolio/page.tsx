import React from "react";
import Image from "next/image";
import socialMediaPick from "../../public/images/projectPicks/socialproject2.webp";
import memoryPick from "../../public/images/projectPicks/memory-game-photo.webp";
import studentPick from "../../public/images/projectPicks/students-grade-photo.webp";
import PromptopiaPick from "../../public/images/projectPicks/promptopia.webp";
import keelWorksPick from "../../public/images/projectPicks/keelworks.webp";
import mbSocialMedia from "../../public/images/projectPicks/mb-social-media.webp";
import mbPrompt from "../../public/images/projectPicks/mb-prompt.webp";
import mbMemoryGame from "../../public/images/projectPicks/mb-memoryGame.webp";
import mbStudents from "../../public/images/projectPicks/mb-students.webp";
import mbKeelWorks from "../../public/images/projectPicks/mb-keelworks.webp";

const Portfolio = () => {
  return (
    <div className="h-full w-[70%] pt-24 m-auto text-white ">
      <div className=" space-y-5">
        <div className=" h-full mb-10 flex justify-center items-center">
          <h1 className=" text-4xl">PORTFOLIO</h1>
        </div>

        <div className="w-full h-full gap-16 rounded-md border-2 border-indigo-900">
          <div className="text-center pt-3">
            <h2 className="text-xl">KeelWorks Fundation</h2>
          </div>
          <div className=" lg:flex w-full lg:w-[100%] lg:gap-3 lg:h-[90%] h-[100%] p-3 ">
            <div>
              <div className="hidden sm:flex justify-evenly items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="h-[300px] w-[351px] bg-cover bg-[url('/images/projectPicks/computer.png')] bg-center flex items-center justify-center">
                    <Image
                      className=" -translate-y-12 rounded-sm h-[145px] mr-1 border-slate-600 border-2"
                      width={270}
                      height={270}
                      priority
                      src={keelWorksPick}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-40 md:w-64 h-full flex justify-center items-center -translate-x-4 md:-translate-x-0">
                  <div className=" h-[250px] w-[250px] bg-cover bg-[url('/images/projectPicks/mobile.png')] bg-center flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      priority
                      className=" h-52 mb-3 rounded-lg"
                      src={mbKeelWorks}
                      alt="robert pick"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={430}
                height={430}
                className="w-full border-indigo-900 border-2 sm:hidden"
                priority
                src={keelWorksPick}
                alt=""
              />
              <div className="flex justify-center lg:justify-normal max-w-full p-3 gap-3">
                <div className=" w-full">
                  <div className="flex justify-evenly w-full space-x-10">
                    <a
                      className="w-full text-center"
                      href="https://keelworks.org/"
                      target="_blank"
                    >
                      <button className="w-[50%] h-8 text-center rounded-xl p-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:w-[120%] space-y-3">
              <div className=" xl:space-y-2">
                <p className="">description:</p>
                <p className="text-sm lg:text-xs xl:text-sm ">
                  Keelworks is a project that helps people learn and grow.
                  Keelworks teaches skills in many areas such as programming,
                  design, business, arts and others. Keelworks also encourages
                  inclusion, diversity, leadership and community. Keelworks is a
                  movement that wants to change the world through education.
                </p>
              </div>
              <div className="xl:space-y-2">
                <div>
                  <p>made with:</p>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">React</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Redux</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Javascript</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Tailwind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full gap-16 rounded-md border-2 border-indigo-900">
          <div className="text-center pt-3">
            <h2 className="text-xl">Social Media</h2>
          </div>
          <div className=" lg:flex w-full h-full p-3 lg:w-[100%] lg:h-[90%] lg:gap-3">
            <div>
              <div className="hidden sm:flex justify-evenly items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="h-[300px] w-[351px] bg-cover bg-[url('/images/projectPicks/computer.png')] bg-center flex items-center justify-center">
                    <Image
                      className=" -translate-y-12 rounded-sm h-[145px] mr-1 border-slate-600 border-2"
                      width={270}
                      height={270}
                      priority
                      src={socialMediaPick}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-40 md:w-64 h-full flex justify-center items-center -translate-x-4 md:-translate-x-0">
                  <div className=" h-[250px] w-[250px] bg-cover bg-[url('/images/projectPicks/mobile.png')] bg-center flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      priority
                      className=" h-52 mb-3 rounded-lg"
                      src={mbSocialMedia}
                      alt="robert pick"
                    />
                  </div>
                </div>
              </div>
              <Image
                className="border-indigo-900 border-2 sm:hidden object-cover"
                width={430}
                height={430}
                priority
                src={socialMediaPick}
                alt=""
              />
              <div className="flex justify-center lg:justify-normal max-w-full p-3 gap-3">
                <div className=" w-full">
                  <div className="flex justify-evenly w-full space-x-10">
                    <a
                      className="w-full text-center"
                      href="https://jhon-socialmedia.web.app/"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center rounded-xl p-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Website
                      </button>
                    </a>
                    <a
                      className="w-full text-center"
                      href="https://github.com/JhonEverson979/SocialMedia"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center p-1 text-sm rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Repository
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:w-[120%] space-y-3">
              <div className=" xl:space-y-2">
                <p className="">description:</p>
                <p className="text-sm lg:text-xs xl:text-sm ">
                  a social media site totally responsive that allows users to
                  connect and share content of interest to them. You can create
                  posts with text and images, comment on other users posts and
                  like posts you like.
                </p>
              </div>
              <div className="xl:space-y-2">
                <div>
                  <p>made with:</p>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">React</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Typescript</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Firebase</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Tailwind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full gap-16 rounded-md border-2 border-indigo-900">
          <div className="text-center pt-3">
            <h2 className="text-xl">Promptopia</h2>
          </div>
          <div className=" lg:flex w-full lg:w-[100%] lg:gap-3 lg:h-[90%] h-[100%] p-3 ">
            <div>
              <div className="hidden sm:flex justify-evenly items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="h-[300px] w-[351px] bg-cover bg-[url('/images/projectPicks/computer.png')] bg-center flex items-center justify-center">
                    <Image
                      className=" -translate-y-12 rounded-sm h-[145px] mr-1 border-slate-600 border-2"
                      width={270}
                      height={270}
                      priority
                      src={PromptopiaPick}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-40 md:w-64 h-full flex justify-center items-center -translate-x-4 md:-translate-x-0">
                  <div className=" h-[250px] w-[250px] bg-cover bg-[url('/images/projectPicks/mobile.png')] bg-center flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      priority
                      className=" h-52 mb-3 rounded-lg"
                      src={mbPrompt}
                      alt="robert pick"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={430}
                height={430}
                className="w-full border-indigo-900 border-2 sm:hidden"
                priority
                src={PromptopiaPick}
                alt=""
              />
              <div className="flex justify-center lg:justify-normal max-w-full p-3 gap-3">
                <div className=" w-full">
                  <div className="flex justify-evenly w-full space-x-10">
                    <a
                      className="w-full text-center"
                      href="https://promptje.vercel.app/"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center rounded-xl p-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Website
                      </button>
                    </a>
                    <a
                      className="w-full text-center"
                      href="https://github.com/JhonEverson979/Next-promptopia"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center p-1 text-sm rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Repository
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:w-[120%] space-y-3">
              <div className=" xl:space-y-2">
                <p className="">description:</p>
                <p className="text-sm lg:text-xs xl:text-sm ">
                  Chat-GPT is an amazing chatBot where you write prompts and it
                  returns spectacular answers, promptopia is a great place for
                  anyone who wants to save their best prompts and above all
                  share them with everyone.
                </p>
              </div>
              <div className="xl:space-y-2">
                <div>
                  <p>made with:</p>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">NextJS</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Javascript</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">MongoDB</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Tailwind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full gap-16 rounded-md border-2 border-indigo-900">
          <div className="text-center pt-3">
            <h2 className="text-xl">Memory Game</h2>
          </div>
          <div className=" lg:flex w-full lg:w-[100%] lg:gap-3 lg:h-[90%] h-[100%] p-3 ">
            <div>
              <div className="hidden sm:flex justify-evenly items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="h-[300px] w-[351px] bg-cover bg-[url('/images/projectPicks/computer.png')] bg-center flex items-center justify-center">
                    <Image
                      className=" -translate-y-12 rounded-sm h-[145px] mr-1 border-slate-600 border-2"
                      width={270}
                      height={270}
                      priority
                      src={memoryPick}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-40 md:w-64 h-full flex justify-center items-center -translate-x-4 md:-translate-x-0">
                  <div className=" h-[250px] w-[250px] bg-cover bg-[url('/images/projectPicks/mobile.png')] bg-center flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      priority
                      className=" h-52 mb-3 rounded-lg"
                      src={mbMemoryGame}
                      alt="robert pick"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={430}
                height={430}
                className="w-full border-indigo-900 border-2 sm:hidden"
                priority
                src={memoryPick}
                alt=""
              />
              <div className="flex justify-center lg:justify-normal max-w-full p-3 gap-3">
                <div className=" w-full">
                  <div className="flex justify-evenly w-full space-x-10">
                    <a
                      className="w-full text-center"
                      href="https://memory-gameje.web.app/"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center rounded-xl p-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Website
                      </button>
                    </a>
                    <a
                      className="w-full text-center"
                      href="https://github.com/JhonEverson979/Memory-Game"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center p-1 text-sm rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Repository
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:w-[120%] space-y-3">
              <div className=" xl:space-y-2">
                <p className="">description:</p>
                <p className="text-sm lg:text-xs xl:text-sm ">
                  The memory game is a simple and fun game that consists of
                  finding pairs of matching cards on a board. The game helps to
                  develop players attention, concentration and visual memory. so
                  have fun!
                </p>
              </div>
              <div className="xl:space-y-2">
                <div>
                  <p>made with:</p>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Typescript</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Webpack</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">BabelJS</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">HTML</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">CSS</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">host: Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full gap-16 rounded-md border-2 border-indigo-900">
          <div className="text-center pt-3">
            <h2 className="text-xl">Students Grades</h2>
          </div>
          <div className=" lg:flex w-full lg:w-[100%] lg:gap-3 lg:h-[90%] h-[100%] p-3 ">
            <div>
              <div className="hidden sm:flex justify-evenly items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="h-[300px] w-[351px] bg-cover bg-[url('/images/projectPicks/computer.png')] bg-center flex items-center justify-center">
                    <Image
                      className=" -translate-y-12 rounded-sm h-[145px] mr-1 border-slate-600 border-2"
                      width={270}
                      height={270}
                      priority
                      src={studentPick}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" w-40 md:w-64 h-full flex justify-center items-center -translate-x-4 md:-translate-x-0">
                  <div className=" h-[250px] w-[250px] bg-cover bg-[url('/images/projectPicks/mobile.png')] bg-center flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      priority
                      className=" h-52 mb-3 rounded-lg"
                      src={mbStudents}
                      alt="robert pick"
                    />
                  </div>
                </div>
              </div>
              <Image
                width={430}
                height={430}
                className="w-full border-indigo-900 border-2 sm:hidden"
                priority
                src={studentPick}
                alt=""
              />
              <div className="flex justify-center lg:justify-normal max-w-full p-3 gap-3">
                <div className=" w-full">
                  <div className="flex justify-evenly w-full space-x-10">
                    <a
                      className="w-full text-center"
                      href="https://students-gradesje.web.app/index.html"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center rounded-xl p-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Website
                      </button>
                    </a>
                    <a
                      className="w-full text-center"
                      href="https://github.com/JhonEverson979/MVC-Students-Grades"
                      target="_blank"
                    >
                      <button className="w-[100%] h-8 text-center p-1 text-sm rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                        Repository
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:w-[120%] space-y-3">
              <div className=" xl:space-y-2">
                <p className="">description:</p>
                <p className="text-sm lg:text-xs xl:text-sm ">
                  The site has a simple and intuitive design, with a form to
                  enter grades and a table to show averages for each subject.
                  many students? no problem, the site has a fully functional
                  student finder.
                </p>
              </div>
              <div className="xl:space-y-2">
                <div>
                  <p>made with:</p>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">Javascript</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">MVC</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">HTML</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">CSS</p>
                    </div>
                    <div className="flex items-center gap-3 md:w-[40%] w-[50%]">
                      <div className="rounded-full h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <p className="text-sm">host: Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
