import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="h-screen bg-[var(--clr-bg-light2)] dark:bg-[var(--clr-bg-dark2)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] flex justify-center items-center"
      id="home"
    >
      <div className="md:pt-0 md:h-1/2 md:w-full md:px-10 lg:px-0 ">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row text-center md:text-start px-5 md:p-0">
          <div className="md:px-5">
            <div className="text-3xl md:text-5xl lg:text-7xl font-bold mb-5 md:mb-10">
              <div>
                Full-Stack <span className="dark:text-[var(--clr-text-light3)]">Web</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <div>Developer</div>
                <img src="/hello.png" alt="" className="w-10 md:w-16" />
              </div>
            </div>
            <div className="my-5 md:my-10 lg:text-lg text-[var(--clr-text-light2)] dark:text-[var(--clr-text-dark2)]">A passionate Full Stack Web Developer based in India.📍</div>
            <div className="flex flex-col md:flex-row text-2xl gap-5 justify-center items-center md:justify-start font-bold">
              <a href="https://drive.google.com/file/d/1c6NOmxgP84oPQHrPNS_TYOuQ4RqbeQGv/view?usp=sharing" className="z-50" target="_blank" rel="noreferrer" id="resume">
                <div className="border-2 border-[var(--clr-text-light3)] text-sm md:text-[20px] text-[var(--clr-text-light3)] py-2 px-3 rounded-full cursor-pointer hover:bg-[var(--clr-text-light3)] hover:text-white transition duration-200">
                  Resume
                </div>
              </a>
              <div className="flex gap-5">
                <a href="https://github.com/notGman" target="_blank" rel="noreferrer" className="hover:text-[var(--clr-text-light3)]">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/gowthamanu/" target="_blank" rel="noreferrer" className="hover:text-[var(--clr-text-light3)]">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/not._.gman/" target="_blank" rel="noreferrer" className="hover:text-[var(--clr-text-light3)]">
                  <BsInstagram />
                </a>
              </div>
            </div>
            <div className="pt-10 mb-28 md:mt-5 md:px- lg:text-lg flex flex-col md:flex-row items-center gap-5 md:gap-10">
              <div className="flex flex-col">
                <div className="text-sm md:text-base">Tech Stack {window.screen.width > 500 && "|"}</div>
                {window.screen.width < 760 && <div className="w-full bg-black h-[2px]" />}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <img src="https://skillicons.dev/icons?i=html,css" alt="" className="w-20 md:w-28 lg:32 transition duration-200 hover:-translate-y-2" title="HTML & CSS" />
                <img
                  src="https://skillicons.dev/icons?i=js,ts"
                  alt=""
                  className="w-20 md:w-28 lg:32 transition duration-200 hover:-translate-y-2"
                  title="JavaScript & TypeScript"
                />
                <img
                  src="https://skillicons.dev/icons?i=react,next"
                  alt=""
                  className="w-20 md:w-28 lg:32 transition duration-200 hover:-translate-y-2"
                  title="React.Js & Next.Js"
                />
                <img src="https://skillicons.dev/icons?i=nodejs,flask" alt="" className="w-20 md:w-28 lg:32 transition duration-200 hover:-translate-y-2" title="Node.Js & Flask" />
              </div>
            </div>
          </div>
          <div className="p-5 mt-20 md:mt-0 md:mb-auto">
            <div className="w-52 h-52 lg:w-80 lg:h-80 border-2 border-black dark:border-[var(--clr-text-light3)] overflow-hidden shape mt-10 md:mt-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
