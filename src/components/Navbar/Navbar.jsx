import { Modal } from "./Modal";
import logo from "../../assets/gsLogo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { useState } from "react";

const Navbar = ({ translate }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-9">
      <Modal isOpen={openModal} setModalOpen={setOpenModal} translate={translate} />

      <div className="flex flex-shrink-0 items-center">
        <a href="#">
          <img width={75} src={logo} alt="Logo" />
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-auto"
      >
        <span className="sr-only">{translate ? "Abrir menu principal" : "Open main menu"}</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
        <ul className="flex gap-10">
          <li>
            <a
              href="#about"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform hover:scale-105 transition-transform scroll-smooth"
              aria-current="page"
            >
              {translate ? "Sobre" : "About"}
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform hover:scale-105 transition-transform scroll-smooth"
            >
              {translate ? "Tecnologias" : "Tecnologies"}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform hover:scale-105 transition-transform scroll-smooth"
            >
              {translate ? "Experiência" : "Experience"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform hover:scale-105 transition-transform scroll-smooth"
            >
              {translate ? "Projetos" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-300 md:p-0 dark:text-white md:dark:hover:text-violet-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform hover:scale-105 transition-transform scroll-smooth"
            >
              {translate ? "Contato" : "Contact"}
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/souzinhaaz/">
          <FaLinkedin className="text-white hover:text-violet-300 transition transform hover:scale-105" />
        </a>
        <a target="_blank" href="https://github.com/Souzinhaaz">
          <FaGithub className="text-white hover:text-violet-300 transition transform hover:scale-105" />
        </a>
        <a target="_blank" href="https://www.instagram.com/souzalzx/">
          <FaInstagram className="text-white hover:text-violet-300 transition transform hover:scale-105" />
        </a>
        <a target="_blank" href="https://x.com/souzinhaaz">
          <FaSquareXTwitter className="text-white hover:text-violet-300 transition transform hover:scale-105" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
