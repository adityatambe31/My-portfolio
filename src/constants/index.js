import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import award1 from "../assets/award1.pdf";
import award2 from "../assets/award2.pdf";
import award3 from "../assets/award3.pdf";

export const HERO_CONTENT = `I am a dedicated web developer with a strong foundation in full stack development. My experience spans across front-end and back-end technologies, allowing me to craft efficient and scalable applications. I am passionate about solving real-world problems through innovative digital solutions, always striving to create user-friendly and impactful experiences.`;
export const ABOUT_TEXT = (
  <>
    <p>
      Hi, I'm Aditya Tambe, a passionate Full Stack Developer with a strong
      foundation in web development and software engineering.
    </p>{" "}
    <br />
    <p>
      My journey started with a curiosity for technology, leading me to explore
      various programming languages like C++, Python, and JavaScript. Over the
      years, I’ve honed my skills through hands-on projects, including cloning
      popular websites and developing robust applications.
    </p>
    <br />
    <p>
      Currently, I'm pursuing an Advanced Diploma in Computer Programming &
      Analysis at Seneca College, where I’m deepening & strengthening my
      knowledge in areas like React, Tailwind CSS, and more. I’ve also had the
      opportunity to lead sales teams, where I discovered my knack for strategic
      planning and leadership.
    </p>
    <br />
    <p>
      Beyond coding, I thrive on teamwork, innovation, and the thrill of turning
      ideas into reality. Whether it's a hackathon or a collaborative project, I
      love being part of the creative process. When I'm not coding, you can find
      me exploring the latest tech trends or brainstorming new ideas.
    </p>
    <br />
  </>
);

export const EXPERIENCES = [
  {
    year: "2023 - 2026 (Exp Grad)",
    role: "Adv Diploma (CPA)",
    company: "Seneca Polytechnic College",
    description: `I studied software development, database management, and web technologies, gaining a strong understanding of programming languages, software design, and system analysis. I also worked on hands-on projects that mirrored real-world software development.`,
    technologies: ["C++", "React.js", "Node.js", "MySQL"],
  },
  {
    year: "2023 - 2024 ",
    role: "Apprenticeship",
    company: "Seneca Housing Hackathon",
    description: `Our project aimed to address the housing crisis by extending Seneca College's shuttle bus service to new regions with high housing demand. The shuttle bus currently operates between the King, Markham, Newnham, and Seneca@York campuses, providing convenient transportation for students.`,
    technologies: ["Project Management", "Teamwork", "Communication"],
  },
  {
    year: "2022 - 2023",
    role: "Software Developer",
    company: "Disha Computer Institute - India",
    description: `Before joining Seneca College, I learned the basics of coding at an institute, where I gained foundational skills and earned a certificate. With this knowledge, I started my journey as a programmer, focusing on improving my skills and gaining practical experience. My goal is to deepen my coding knowledge, sharpen my technical abilities, and prepare for a successful career in programming.`,
    technologies: ["C", "C++", "Python", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "Seneca Housing Hackathon",
    href: "https://github.com/adityatambe31/Seneca-Housing-Hackathon",
    image: project1,
    description:
      "Our project aimed to address the housing crisis by extending Seneca College's shuttle bus service to new regions with high housing demand. The shuttle bus currently operates between the King, Markham, Newnham, and Seneca@York campuses, providing convenient transportation for students.",
    technologies: ["Project Management", "Teamwork", "Communication"],
  },

  {
    title: "Netflix Clone",
    href:
      "https://github.com/adityatambe31/JourneyToFullStackDev/tree/main/06.Projects/10.netflix-clone",
    image: project3,
    description:
      "A fully responsive clone of Netflix, featuring user authentication, movie browsing, and streaming functionalities.",
    technologies: ["HTML", "CSS", "JS", "Node.js"],
  },

  {
    title: "Academic Project - Library-Application-Seneca",
    href: "https://github.com/adityatambe31/OOP244-Library-Application-Seneca",
    image: project2,
    description:
      "Built a C++ object-oriented library management system with features like adding, removing, checking out, and returning publications. The system includes robust error handling, dynamic memory management, and follows object-oriented principles for modularity and maintainability.",
    technologies: ["C++"],
  },
  {
    title: "Academic Project - Truck Delivery System",
    href: "https://github.com/adityatambe31/SFT221-Truck-Delivery-System",
    image: project4,
    description:
      "A logistics application for managing truck deliveries. The system allows for real-time tracking, route optimization, and delivery status updates.",
    technologies: ["C++", "Jira", "Git", "Teams"],
  },
  {
    title: "Academic Project - Patient Management System",
    href: "https://github.com/adityatambe31/IPC-144-Patient-Management-System",
    image: project5,
    description:
      "A system designed to streamline patient management processes in healthcare facilities. It includes features like patient registration, appointment scheduling, and medical records management.",
    technologies: ["C", "Git", "VS-Code"],
  },
];

export const CONTACT = {
  address: "Seneca Polytechnic College, Toronto, ON",
  phoneNo: "+1 (437)-366-7154",
  email: "aditya.tambe.professional31@gmail.com",
};

export const AWARDS = [
  {
    id: 1,
    title: "Hackathon-Finalist",
    file: award2,
  },

  {
    id: 2,
    title: "Language Certificate Credentials",
    file: award1,
  },
  {
    id: 3,
    title: "Experience Letter KIA Motors",
    file: award3,
  },
];
