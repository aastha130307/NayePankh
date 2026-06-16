const DonateFAQ = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">
        FAQs
      </h2>

      <div className="accordion">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              Is my donation secure?
            </button>
          </h2>

          <div
            id="faq1"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              Yes, all donations are securely processed.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonateFAQ;