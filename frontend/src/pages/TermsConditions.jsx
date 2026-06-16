import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

const TermsConditions = () => {
  return (
    <>
      <Navbar />

      <div className="terms-page">
        <div className="terms-container">

          <div className="terms-header">
            <h1>Terms & Conditions</h1>
            <p>NayePankh Foundation | GOVT. REG. NGO</p>
          </div>

          <section className="terms-card">
            <h2>1. Introduction and Overview</h2>

            <p>
              Welcome to NayePankh Foundation (“Foundation,” “we,” “us,” or “our”).
              These Terms and Conditions (“Terms”) govern your use of our website,
              services, donations, and subscription programs made available through
              www.nayepankh.com.
            </p>

            <p>
              By accessing our website, making a donation, or subscribing to our
              recurring donation program, you agree to be legally bound by these
              Terms.
            </p>
          </section>

          <section className="terms-card">
            <h2>2. Eligibility</h2>

            <ul>
              <li>You are at least 18 years of age.</li>
              <li>You are legally competent to enter into agreements.</li>
              <li>You are legally permitted to make donations.</li>
            </ul>
          </section>

          <section className="terms-card">
            <h2>3. Donations and Subscriptions</h2>

            <h3>3.1 Voluntary Contributions</h3>
            <p>
              All donations made to NayePankh Foundation are voluntary and intended
              solely for charitable purposes.
            </p>

            <h3>3.2 Subscriptions</h3>
            <p>
              Recurring donations may be processed through Razorpay until cancelled.
            </p>

            <h3>3.3 Cancellation of Subscription</h3>
            <p>
              You may cancel future recurring donations at any time through your
              Razorpay account or by contacting us.
            </p>
          </section>

          <section className="terms-card warning-card">
            <h2>4. No Refund Policy</h2>

            <p>
              Donations are utilized immediately for charitable initiatives such as
              education, women empowerment, health support, and relief programs.
            </p>

            <p>
              <strong>
                All donations are non-refundable and non-exchangeable.
              </strong>
            </p>
          </section>

          <section className="terms-card">
            <h2>5. Donor Responsibilities</h2>

            <ul>
              <li>Provide accurate personal information.</li>
              <li>Use a legally owned payment method.</li>
              <li>Avoid fraudulent or unlawful activities.</li>
            </ul>
          </section>

          <section className="terms-card">
            <h2>6. Website Use</h2>

            <p>
              You may browse the website, make donations, subscribe to updates,
              and learn about our programs.
            </p>

            <ul>
              <li>No malware or harmful code uploads.</li>
              <li>No unauthorized access attempts.</li>
              <li>No copying content without permission.</li>
            </ul>
          </section>

          <section className="terms-card">
            <h2>7. Privacy and Data Protection</h2>

            <p>
              Personal information is collected solely for donation processing,
              communication, and issuance of receipts.
            </p>
          </section>

          <section className="terms-card">
            <h2>8. Payment Gateway</h2>

            <p>
              Payments are securely processed through Razorpay. We do not store
              card or banking information.
            </p>
          </section>

          <section className="terms-card">
            <h2>9. Intellectual Property</h2>

            <p>
              All website content including logos, graphics, images, reports,
              and text belongs to NayePankh Foundation.
            </p>
          </section>

          <section className="terms-card">
            <h2>10. Third-Party Links</h2>

            <p>
              Our website may contain links to external websites. We are not
              responsible for their content or policies.
            </p>
          </section>

          <section className="terms-card">
            <h2>11. Disclaimer and Limitation of Liability</h2>

            <ul>
              <li>Services are provided on an “as-is” basis.</li>
              <li>Payment delays due to banking systems are beyond our control.</li>
              <li>We are not liable for technical failures or cyber incidents.</li>
            </ul>
          </section>

          <section className="terms-card">
            <h2>12. Indemnification</h2>

            <p>
              Users agree to indemnify and hold harmless NayePankh Foundation
              against claims arising from misuse of the website.
            </p>
          </section>

          <section className="terms-card">
            <h2>13. Termination</h2>

            <p>
              We reserve the right to suspend or terminate access for violations
              of these Terms.
            </p>
          </section>

          <section className="terms-card">
            <h2>14. Modifications to Terms</h2>

            <p>
              Terms may be updated from time to time without prior notice.
            </p>
          </section>

          <section className="terms-card">
            <h2>15. Governing Law and Jurisdiction</h2>

            <p>
              These Terms are governed by the laws of India.
            </p>

            <p>
              Any disputes shall be subject to the jurisdiction of courts located
              in Ghaziabad, Uttar Pradesh.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;