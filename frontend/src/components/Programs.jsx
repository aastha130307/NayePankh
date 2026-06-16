import { motion,AnimatePresence } from "framer-motion";
import "../App.css";
import food from "../assets/food.jpg";
import hygiene from "../assets/hygiene.avif";
import volunteer from "../assets/volunteer.jpg";
import edu from "../assets/edu.jpg";
import cloth from "../assets/cloth.avif";
import community from "../assets/community.webp";
import { useRef } from "react";
import { useState } from "react";

const programs = [
  {
    title: "Education for Underprivileged Children",
    
    img: edu,
    desc: [
      "Free or supported education for children",
      "Learning materials and academic help",
      "Guidance and mentorship for students",
      "Support for dropout prevention"
    ],
    goal: "Ensure every child gets access to basic and quality education."
  },
  {
    title: "Hunger & Food Distribution Drives",
   
    img: food,
    desc: [
      "Distribution of meals to poor families",
      "Food support during COVID and emergencies",
      "Feeding stray animals in special drives"
    ],
    goal: "No one should sleep hungry."
  },
  {
    title: "Hygiene & Sanitary Awareness",
   
    img:hygiene,
    desc: [
      "Menstrual hygiene awareness campaigns",
      "Distribution of sanitary pads",
      "Breaking stigma around menstrual health"
    ],
    goal: "Promote health dignity for women and girls."
  },
  {
    title: "Clothing Donation Drives",
   
    img:cloth,
    desc: [
      "Distribution of clothes to poor families",
      "Winter relief drives in cold regions"
    ],
    goal: "Provide dignity and comfort to those in need."
  },
  {
    title: "Youth-Led Volunteer Movement",
    
    img: volunteer,
    desc: [
      "Students and youth lead initiatives",
      "Community-based volunteering model",
      "Internship and participation opportunities"
    ],
    goal: "Build leadership and social responsibility among youth."
  },
  {
    title: "Community Outreach Programs",
    img: community,
    
    desc: [
      "Social awareness campaigns",
      "Health and wellbeing initiatives",
      "Local community support drives"
    ],
    goal: "Focus on long-term social development."
  }
];


const Program = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % programs.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + programs.length) % programs.length);

  const item = programs[index];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Our Programs</h2>

      <div className="d-flex align-items-center justify-content-center gap-3">

        <button className="btn btn-outline-primary" onClick={prev}>
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="card shadow-lg border-0"
            style={{ width: "900px" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="row g-0">

              {/* IMAGE */}
              <div className="col-md-6">
                <img
                  src={item.img}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* CONTENT */}
              <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                <h4 className="text-primary">{item.title}</h4>

                <ul className="mt-3">
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                <p className="mt-3 fw-bold border-start border-3 ps-2 border-primary">
                  {item.goal}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        <button className="btn btn-outline-primary" onClick={next}>
          ›
        </button>

      </div>
    </section>
  );
};

export default Program;