import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="mainapp" className="font-Poppins">
      <div className="fixed z-50">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <Home />
      <About />
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;
