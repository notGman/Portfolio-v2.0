import "./Portfolio.css";
import { PiArrowSquareOutBold } from "react-icons/pi";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="bg-[var(--clr-bg-light2)] dark:bg-[var(--clr-bg-dark2)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] flex justify-center items-center p-5 md:p-0">
      <div className="lg:w-7/12 lg:h-2/3 py-10 lg:py-28 md:px-5">
        <div className="uppercase text-xl font-bold text-[#147efb] mb-3"id="projects">
          Projects
        </div>
        <div className="text-2xl font-bold mb-3">
          Each project is a unique piece of development 🧩
        </div>
        {Projects.map((project) => {
          return (
            <div
              key={project.id}
              className={
                `bg-[var(--clr-bg-light1)] dark:bg-[var(--clr-bg-dark1)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] w-full h-fit lg:h-[25em] rounded-xl mt-16 flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]` +
                ` ` +
                `${project.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} `
              }
            >
              <div className=" lg:w-3/5 p-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                {project.image}
              </div>
              <div className="lg:w-2/5 p-5 text-center my-auto px-10">
                <div className="mb-5 text-lg md:text-xl font-bold">{project.title}</div>
                <div className="text-sm md:text-md text-[var(--clr-text-light2)] dark:text-[var(--clr-text-dark2)]">
                  {project.description}
                </div>
                <div className="flex gap-8 justify-center mt-5">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="py-2 px-3 dark:shadow-blue-600 dark:shadow-[0px_0px_11px_0px_#bee3f8] shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center mt-6 text-md md:text-lg gap-1 w-fit mx-auto text-[var(--clr-text-light3)] font-bold"
                  >
                    visit
                    <PiArrowSquareOutBold />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
