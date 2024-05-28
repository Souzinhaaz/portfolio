import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="text-4xl">Gs</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/souza-undefined-706174280/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/Souzinhaaz">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.instagram.com/souzalzx/">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://x.com/souzinhaaz">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
