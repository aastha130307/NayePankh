import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="py-5" style={{ background: "#f6f4ff" }}>

      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">🕊️ About NayePankh Foundation</h2>
          <p className="text-muted">
            A youth-driven initiative creating real social impact
          </p>
        </div>

        {/* Row 1 */}
        <div className="row g-4 mb-4">

          <div className="col-md-12">
            <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-primary">

              <h4 className="mb-3 text-primary">Our Journey</h4>

              <p className="text-secondary">
                As the world struggled through the COVID-19 pandemic in 2020, we felt a strong urge to take action.
                With whatever resources we had, we began our journey to support underprivileged communities and help those in need.
              </p>

              <p className="text-secondary">
                What started as a small group of students soon transformed into a dedicated youth-led team working across cities and states.
              </p>

              <p className="text-secondary mb-0">
                On <b>28th March 2021</b>, we officially stepped into the field as a youth-led initiative committed to social change.
              </p>

            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="row g-4">

          {/* Who we are */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-warning h-100">

              <h4 className="mb-3 text-warning">🌱 Who We Are</h4>

              <p className="text-secondary">
                NayePankh Foundation was created with a vision to uplift underprivileged communities and bring positive change at the grassroots level.
              </p>

              <p className="text-secondary mb-0">
                The name <b>“NayePankh” (New Wings)</b> represents giving hope, dignity, and opportunity to those who need it most.
              </p>

            </div>
          </div>

          {/* Work Areas */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-danger h-100">

              <h5 className="mb-3 text-danger">Our Work Areas</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-2">🍲 Food distribution (humans & animals)</li>
                <li className="mb-2">📚 Education support for children</li>
                <li className="mb-2">🧼 Menstrual hygiene awareness</li>
                <li className="mb-2">👕 Clothing donation drives</li>
                <li className="mb-2">🌍 Community welfare campaigns</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;