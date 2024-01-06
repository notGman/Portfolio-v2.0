import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkmode") === "true") {
      setDarkMode(true);
      document.getElementById("mainapp").classList.add("dark");
    }
  }, []);

  const showMobileNav = () => {
    setShowNav(!showNav);
    const nav = document.querySelector(".nav-container");
    nav.classList.toggle("-translate-x-[100%]");
  };
  const darkmode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", !darkMode);
    const nav = document.getElementById("mainapp");
    nav.classList.toggle("dark");
  };

  return (
    <>
      <div className="h-10 md:h-20 bg-opacity-25 backdrop-filter backdrop-blur-lg text-black dark:text-white text-xl w-screen shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="flex justify-between items-center h-full px-10 md:px-20">
          <div className="text-sm md:text-lg lg:text-xl font-bold text-[var(--clr-text-light3)]">
            Gman.Dev
          </div>
          <div className="flex">
            <div className="hidden md:flex gap-6 items-center">
              <div
                onClick={darkmode}
                className="text-3xl mr-5 cursor-pointer p-2"
              >
                {!darkMode ? (
                  <FaToggleOff />
                ) : (
                  <FaToggleOn className="dark:text-[var(--clr-text-light3)]" />
                )}
              </div>
              <a href="#home" className="hover:text-[var(--clr-text-light3)]">
                Home
              </a>
              <a href="#about" className="hover:text-[var(--clr-text-light3)]">
                About
              </a>
              <a
                href="#projects"
                className="hover:text-[var(--clr-text-light3)]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--clr-text-light3)]"
              >
                Contact
              </a>
            </div>
            {!showNav ? (
              <IoMenu onClick={showMobileNav} className="md:hidden text-3xl" />
            ) : (
              <IoClose onClick={showMobileNav} className="md:hidden text-3xl" />
            )}
          </div>
        </div>
      </div>
      <div className="-translate-x-[100%] bg-[var(--clr-bg-light1)] dark:bg-[var(--clr-bg-dark2)] transition duration-700 md:hidden w-full nav-container text-black dark:text-white h-screen overflow-hidden">
        <div
          className="p-8 flex flex-col h-full items-center pt-40 gap-10"
          onClick={showMobileNav}
        >
          <a href="#home" className="hover:text-[var(--clr-text-light3)]">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div
            onClick={darkmode}
            className="text-2xl cursor-pointer flex items-center justify-center gap-2"
          >
            {/* {!darkMode ? <FaToggleOff /> : <FaToggleOn />} */}
            <div className="text-base">
              {!darkMode ? "Darkmode?!" : "Lightmode?!"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
