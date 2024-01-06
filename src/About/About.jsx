const About = () => {
  return (
    <div
      className="bg-[var(--clr-bg-light1)] dark:bg-[var(--clr-bg-dark1)] text-[var(--clr-text-light1)] dark:text-[var(--clr-text-dark1)] flex justify-center items-center p-5 md:p-0"
      id="about"
    >
      <div className="lg:w-7/12 lg:h-2/3 flex flex-col lg:flex-row lg:gap-8 justify-center items-center py-10 lg:py-28">
        <img
          src="/about.webp"
          alt=""
          className="h-full rounded-xl overflow-hidden w-[30em]"
        />
        <div className="lg:w-1/2 md:w-2/3 text-center lg:text-left mt-5 lg:mt-0">
          <div className="uppercase text-md font-bold text-[#147efb] mb-3">
            about me
          </div>
          <div className="text-lg md:text-2xl font-bold mb-3">
            Hi there! I'm Gowthaman, a passionate Full-stack web developer based
            in India. 📍
          </div>
          <div className="text-sm md:text-md text-[var(--clr-text-light2)] dark:text-[var(--clr-text-dark2)]">
            My expertise spans both front-end and back-end technologies,
            ensuring websites that not only look great but also work flawlessly.
            Collaborating closely with clients, I thrive on turning ideas into
            impactful digital experiences. I'm dedicated to staying updated with
            the latest trends, enabling me to deliver cutting-edge solutions
            that meet evolving industry standards. Let's collaborate and build
            something remarkable together!"
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
