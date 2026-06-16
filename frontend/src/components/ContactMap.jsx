const ContactMap = () => {
  return (
    <section className="container py-5">

      <h2 className="text-center mb-4">
        Find Us
      </h2>

      <div className="map-card">

        <div className="ratio ratio-16x9">
          <iframe
            title="NayePankh Location"
            src="https://www.google.com/maps/embed?pb="
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>

    </section>
  );
};

export default ContactMap;