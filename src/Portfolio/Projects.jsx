const Projects = [
  {
    id: 1,
    image: <div className={`bg-[url('/ks.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Kuruksastra 2023",
    description: "This is a description of Project 1",
    link: "https://kuruksastra.in",
    techStack: ["React", "Node"],
    orientation: "left",
  },
  {
    id: 2,
    image: <div className={`bg-[url('/Carpe.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Carpediem 2023",
    description: "This is a description of Project 1",
    link: "https://carpediem.kuruksastra.in",
    techStack: ["React", "Node"],
    orientation: "right",
  },
  {
    id: 3,
    image: <div className={`bg-[url('/dcs.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Team DCS",
    description: "This is a description of Project 1",
    link: "https://teamdcs.in",
    techStack: ["React", "Firebase"],
    orientation: "left",
  },
];

export default Projects;
