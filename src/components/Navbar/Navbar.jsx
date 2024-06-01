import { Modal } from "./Modal";
import logo from "../../assets/gsLogo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-9">
      <div className="flex flex-shrink-0 items-center">
        <a href="#">
          <img width={75} src={logo} alt="Logo" />
        </a>
      </div>

      <button type="button" onClick={() => setOpenModal(true)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-auto">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
        <ul className="flex gap-10">
          <li>
            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition transform hover:scale-105 transition-transform scroll-smooth" aria-current="page">About</a>
          </li>
          <li>
            <a href="#technologies" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition transform hover:scale-105 transition-transform scroll-smooth">Technologies</a>
          </li>
          <li>
            <a href="#experience" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition transform hover:scale-105 transition-transform scroll-smooth">Experience</a>
          </li>
          <li>
            <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition transform hover:scale-105 transition-transform scroll-smooth">Projects</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition transform hover:scale-105 transition-transform scroll-smooth">Contact</a>
          </li>
        </ul>
      </div>

      <Modal isOpen={openModal} setModalOpen={setOpenModal} />

      <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/souza-undefined-706174280/"
        >
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
