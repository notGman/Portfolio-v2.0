import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWebsite } from "react-icons/cg";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <div
      className="bg-[var(--clr-bg-light1)] dark:bg-[var(--clr-bg-dark1)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] flex flex-col justify-center items-center p-5 md:p-0"
      id="about"
    >
      <div className="lg:w-7/12 lg:h-2/3 flex flex-col lg:flex-row lg:gap-8 justify-center items-center py-10 lg:py-28">
        <img
          src="/about.webp"
          alt=""
          className="h-full rounded-xl overflow-hidden w-[30em]"
        />
        <div className="lg:w-1/2 md:w-2/3 text-center lg:text-left mt-5 lg:mt-0">
          <div className="uppercase text-xl font-bold text-[#147efb] mb-3">
            about me
          </div>
          <div className="text-lg md:text-2xl font-bold mb-3">
            Hi there! I&apos;m Gowthaman, a passionate Full-stack web developer
            based in India. 📍
          </div>
          <div className="text-sm md:text-md text-[var(--clr-text-light2)] dark:text-[var(--clr-text-dark2)]">
            My expertise spans both front-end and back-end technologies,
            ensuring websites that not only look great but also work flawlessly.
            I thrive on turning ideas into impactful digital experiences.
            I&apos;m dedicated to staying updated with the latest trends,
            enabling me to deliver cutting-edge solutions that meet evolving
            industry standards. Let&apos;s collaborate and build something
            remarkable together!
          </div>
        </div>
      </div>

      <div className="lg:w-7/12 lg:h-2/3 flex flex-col lg:flex-col lg:gap-8 md:p-5">
        <div className="uppercase text-xl font-bold text-[#147efb] mb-3 mx-auto md:mx-0 lg:pl-14">
          experience
        </div>
        <div>
          <VerticalTimeline animate={false} lineColor="#147efb">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff",border:'none',boxShadow:'none' }}
              dateClassName="text-black dark:text-white"
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              date="Aug 2023 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CgWebsite />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-md md:text-xl">
                Lead
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm md:text-lg">
                Developer Community Sastra
              </h4>
              <p className="text-md">
                Managing a cross-functional team of designers, developers, and
                content creators to build projects that help the student
                community. Strategically plan and execute technical events and
                workshops attracting a diverse audience.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Nov 2023 - Aug 2023"
              dateClassName="text-black dark:text-white"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentStyle={{ background: "#f9f9f9", color: "#000",border:'none',boxShadow:'none' }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-md md:text-xl">
                Core team member
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm md:text-lg">
                Developer Community Sastra
              </h4>
              <p>
                Core team member and web developer at Developer Community
                Sastra.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff",border:'none',boxShadow:'none' }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              dateClassName="text-black dark:text-white"
              date="Aug 2023 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaPython />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-md md:text-xl">
                Core team member
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm md:text-lg">
                GDSC Sastra
              </h4>
              <p>
                Collaborated with Developer Community SASTRA and Team 1nf1n1ty
                to conduct a series of workshops called DevDays with 600+
                attendees.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2023 - present"
              dateClassName="text-black dark:text-white"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentStyle={{ background: "#f9f9f9", color: "#000",border:'none',boxShadow:'none' }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              icon={<SiJavascript />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-md md:text-xl">
                Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm md:text-lg">
                300dpi
              </h4>
              <p>Web developer at 300dpi</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
