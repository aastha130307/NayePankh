import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "info@nayepankh.org",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9876543210",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: "New Delhi, India",
    },
  ];

  return (
    <section className="container py-5">
      <div className="row g-4">
        {contacts.map((item, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="contact-card">
              <div className="contact-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;