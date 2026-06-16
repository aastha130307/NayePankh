import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const EventModal = ({ isOpen, onClose, event }) => {
  if (!event) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="event-modal"
      overlayClassName="overlay"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={event.image} className="modal-img" />

        <h2>{event.title}</h2>
        <p>{event.description}</p>

        <p>📅 {new Date(event.date).toDateString()}</p>
        <p>📍 {event.location}</p>

        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </motion.div>
    </Modal>
  );
};

export default EventModal;