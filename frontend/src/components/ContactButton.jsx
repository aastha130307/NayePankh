const ContactButton = () => {
  return (
    <section className="text-center py-5">
      <button
        className="btn btn-primary btn-lg contact-btn"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Contact Us
      </button>
    </section>
  );
};

export default ContactButton;