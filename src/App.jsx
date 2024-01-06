import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div id="mainapp" className="font-Poppins">
      <div className="fixed">
        <Navbar />
      </div>
      <Home />
      <About />
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;
