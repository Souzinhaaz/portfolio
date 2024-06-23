import { CONTACT } from "../constants";

import { motion } from "framer-motion";

const Contact = ({translate}) => {
  return (
    <section className="border-b border-neutral-900 pb-20" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {translate ? "Entrar em contato" : "Get in touch"}
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          <a href="https://wa.me/5577999155669" target="_blank">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <a href="mailto:gustavosouzabjl@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
