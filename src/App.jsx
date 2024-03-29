import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { useState } from "react";
import ScrollUp from "./ScrollUp/ScrollUp";
import { useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setScroll(window.scrollY);
      if (window.scrollY > 500) {
        document.getElementById("scrollbutton").classList.remove("hidden");
      } else {
        document.getElementById("scrollbutton").classList.add("hidden");
      }
    });
  });

  return (
    <div id="mainapp" className="font-Poppins">
      <div className="fixed z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {/* {window.screen.width > 748 && (
        <div
          style={{ width: (100 * scroll) / 200 }}
          className="h-1 bg-[#147efb] fixed top-20 z-50"
        />
      )} */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
      {window.screen.width > 748 && (
        <div id="scrollbutton" className="hidden transition duration-200" onClick={() => window.scrollTo(0, 0)}>
          <ScrollUp />
        </div>
      )}
    </div>
  );
};

export default App;
