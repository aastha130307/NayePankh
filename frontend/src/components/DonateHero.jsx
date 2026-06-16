import { motion } from "framer-motion";
import donation from "../assets/donation.avif";

const DonateHero = ({ openForm }) => {
  return (
    <section
      className="donate-hero"
      style={{
        backgroundImage: `url(${donation})`,
      }}
    >
      {/* overlay */}
      <div className="overlay"></div>

      <div className="container text-center text-white content">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Donation Creates Change
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Support education, healthcare, hunger relief, and women empowerment.
        </motion.p>

        <motion.button
          className="donate-btn"
          onClick={openForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Donate Now
        </motion.button>
      </div>
    </section>
  );
};

export default DonateHero;