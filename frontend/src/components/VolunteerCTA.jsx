import { motion } from "framer-motion";


const VolunteerCTA = () => {
  return (
    <motion.section
      className="volunteer-cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container text-center text-white">

        <h2>Become A Volunteer</h2>

        <p>
          Join our mission and help us create positive change in the lives of
          those who need it most.
        </p>

        <button
          className="btn btn-light btn-lg volunteer-btn"
          data-bs-toggle="modal"
          data-bs-target="#volunteerModal"
        >
          Join Our Team
        </button>

      </div>
    </motion.section>
  );
};

export default VolunteerCTA; 