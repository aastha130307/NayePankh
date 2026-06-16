import { motion } from "framer-motion";

const EventCard = ({ event, onClick }) => {
  return (
    <motion.div
      className="event-card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(event)}
    >
      <img src={event.image} alt={event.title} />

      <div className="event-content">
        <h3>{event.title}</h3>
        <p>{event.location}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;