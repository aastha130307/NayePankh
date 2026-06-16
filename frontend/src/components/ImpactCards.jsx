import { motion } from "framer-motion";

import educationImg from "../assets/educationImg.jpg";
import foodImg from "../assets/foodImg.jpg";
import healthImg from "../assets/healthImg.jpg";
import womenImg from "../assets/womenImg.jpg";

const impacts = [
  {
    title: "Education Support",
    desc: "Helping underprivileged children access quality education.",
    img: educationImg,
  },
  {
    title: "Food Distribution",
    desc: "Providing meals to those in need across communities.",
    img: foodImg,
  },
  {
    title: "Healthcare Aid",
    desc: "Supporting medical needs for poor and rural families.",
    img: healthImg,
  },
  {
    title: "Women Empowerment",
    desc: "Promoting safety, hygiene, and skill development.",
    img: womenImg,
  },
];

const ImpactCards = () => {
  return (
    <section className="impact-section container py-5">
      <h2 className="text-center mb-5">Our Impact Areas</h2>

      <div className="row g-4">
        {impacts.map((item, index) => (
          <motion.div
            key={index}
            className="col-md-6 col-lg-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card impact-card h-100 shadow-sm border-0">
              
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="card-img-top impact-img"
              />

              {/* CONTENT */}
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;