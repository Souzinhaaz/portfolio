import aboutImg from "../assets/notebook.jpg";
import { ABOUT_TEXT } from "../constants";
import { TRANSLATE_ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({translate}) => {
  return (
    <section className="border-b border-neutral-900 pb-4" id="about">
      <h2 className="my-20 text-center text-4xl">
        {translate ? (
          <>
            Sobre <span className="text-neutral-500">Mim</span>
          </>
        ) : (
          <>
            About <span className="text-neutral-500">Me</span>
          </>
        )}
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" width={600} src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {translate ? TRANSLATE_ABOUT_TEXT : ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
