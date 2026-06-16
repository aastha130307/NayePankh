import { motion } from "framer-motion";

const stats = [
  {
    number: "5000+",
    title: "Meals Served",
  },
  {
    number: "1200+",
    title: "Children Educated",
  },
  {
    number: "50+",
    title: "Health Camps",
  },
  {
    number: "1000+",
    title: "Donors",
  },
];

const DonateStats = () => {
  return (
    <section className="stats-section bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Impact in Numbers</h2>
          <p>
            Together with our supporters, we're creating meaningful change.
          </p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body py-4">
                  <h2 className="stat-number">
                    {stat.number}
                  </h2>

                  <p className="mb-0 fw-medium">
                    {stat.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateStats;