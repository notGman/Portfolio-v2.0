const Projects = [
  {
    id: 1,
    image: <div className={`bg-[url('/ks.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Kuruksastra 2023",
    description: "A website for the college Cultural event Kuruksastra, it is the cultural extravaganza of SASTRA Deemed University. Top Institutes from all over India turn up to give fierce competition to each other in the race to win the ultimate prize- the title of overall championship at Kuruksastra.",
    link: "https://kuruksastra.in",
    techStack: ["React", "Node"],
    orientation: "left",
  },
  {
    id: 2,
    image: <div className={`bg-[url('/Carpe.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Carpediem 2023",
    description: "Developed a website for the Carpe Diem 2023 event, Carpe Diem is all about the showcase of creativity and talent all present within SASTRA Deemed University. ",
    link: "https://carpediem.kuruksastra.in",
    techStack: ["React", "Node"],
    orientation: "right",
  },
  {
    id: 3,
    image: <div className={`bg-[url('/dcs.png')] h-56 md:w-96 lg:w-auto lg:h-full bg-cover rounded-xl project_image`}></div>,
    title: "Team DCS",
    description: "The official website of Team DCS, a team of students from SASTRA Deemed University who are passionate about developing websites and applications.",
    link: "https://teamdcs.in",
    techStack: ["React", "Firebase"],
    orientation: "left",
  },
];

export default Projects;
