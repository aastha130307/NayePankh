import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const Stats = () => {
  return (
    <section className="py-5" style={{ background: "#f6f4ff" }}>
      <div className="container text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-2">📊 Our Impact</h2>
          <p className="text-muted mb-5">
            Numbers that reflect our journey of change
          </p>
        </motion.div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded border-start border-4 border-primary h-100">
              <h1 className="fw-bold text-primary">
                <Counter end={10000} />
              </h1>
              <p>Community Members</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded border-start border-4 border-success h-100">
              <h1 className="fw-bold text-success">
                <Counter end={30000} />
              </h1>
              <p>Students Trained</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded border-start border-4 border-danger h-100">
              <h1 className="fw-bold text-danger">
                <Counter end={200000} />
              </h1>
              <p>Lives Assisted</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;