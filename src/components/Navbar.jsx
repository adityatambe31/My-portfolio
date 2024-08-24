import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/at.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-4xl">
        <a href="https://www.linkedin.com/in/adityatambee/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/adityatambee?igsh=MWNxajA0cWM3bHBmbQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/adityatambe31" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
