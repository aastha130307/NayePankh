import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="container text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're here to answer your questions,
          discuss partnerships, and welcome volunteers.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;