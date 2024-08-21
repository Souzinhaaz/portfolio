import { HERO_CONTENT } from "../constants/index";
import { TRANSLATE_HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/foto_perfil.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ translate, setTranslate }) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div>
              <button
                onClick={() => setTranslate(!translate)}
                className="p-5 bg-white/20 rounded-lg md:mb-0 mb-10 hover:opacity-65 transition duration-200 ease-in"
              >
                {translate ? "Translate the page to English" : "Traduzir a página para Português"}
              </button>
            </div>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Gustavo de Souza
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {translate ? "Desenvolvedor Full Stack" : "Full Stack Developer"}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {translate ? TRANSLATE_HERO_CONTENT : HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              width={400}
              className="rounded-lg"
              src={profilePic}
              alt="Gustavo de Souza"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
