import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

export const Modal = ({ isOpen, setModalOpen, translate }) => {
  if (!isOpen) {
    return null;
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-container') {
      setModalOpen(false);
    }
  };

  return (
    <>
    <div id='modal-container' onClick={handleOutsideClick} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#0a0a0a] outline-none focus:outline-none p-3">
          {/*body*/}

          <div className="flex justify-end">
            <MdClose onClick={() => setModalOpen(false)} className='cursor-pointer text-white-400 transition transform hover:scale-105' fontSize={40}  />
          </div>

          <div className="relative px-20 py-2 flex-auto">
            <nav className="flex flex-col items-center">
              <ul className="flex flex-col gap-4 text-center">
                <li>
                  <a href="#about" onClick={() => setModalOpen(false)} className="block py-2 px-3 border-b border-white-800 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition transform hover:scale-105">
                    {translate ? "Sobre" : "About"}
                  </a>
                </li>
                <li>
                  <a href="#technologies" onClick={() => setModalOpen(false)} className="block py-2 px-3 border-b border-white-800 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition transform hover:scale-105">
                    {translate ? "Tecnologias" : "Technologies"}
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={() => setModalOpen(false)} className="block py-2 px-3 border-b border-white-800 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition transform hover:scale-105">
                    {translate ? "Experiência" : "Experience"}
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setModalOpen(false)} className="block py-2 px-3 border-b border-white-800 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition transform hover:scale-105">
                    {translate ? "Projetos" : "Projects"}
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setModalOpen(false)} className="block py-2 px-3 border-b border-white-800 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition transform hover:scale-105">
                    {translate ? "Contato" : "Contact"}
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-4 text-2xl mt-6">
                <a target="_blank" href="https://www.linkedin.com/in/souza-undefined-706174280/" className="text-white hover:text-violet-300 transition transform hover:scale-105">
                  <FaLinkedin />
                </a>
                <a target="_blank" href="https://github.com/Souzinhaaz" className="text-white hover:text-violet-300 transition transform hover:scale-105">
                  <FaGithub />
                </a>
                <a target="_blank" href="https://www.instagram.com/souzalzx/" className="text-white hover:text-violet-300 transition transform hover:scale-105">
                  <FaInstagram />
                </a>
                <a target="_blank" href="https://x.com/souzinhaaz" className="text-white hover:text-violet-300 transition transform hover:scale-105">
                  <FaTwitter />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  );
};
