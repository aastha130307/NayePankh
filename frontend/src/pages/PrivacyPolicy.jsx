import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const sections = [
"Information We Collect",
"How We Use Your Information",
"Consent",
"Sharing and Disclosure",
"Payment Security",
"Data Retention",
"Cookies and Tracking",
"Data Security",
"Cross-Border Data Transfers",
"Your Rights",
"Third-Party Links",
"Policy Updates",
"Grievance & Contact Information",
];

const PrivacyPolicy = () => {
return (
<> <Navbar />
  <section className="privacy-hero">
    <div className="privacy-overlay">
      <h1>Privacy Policy</h1>
      <p>
        We value your trust and are committed to protecting your personal
        information.
      </p>
    </div>
  </section>

  <section className="privacy-container">
    <div className="privacy-header">
      <span className="updated-badge">
        Last Updated: June 2026
      </span>
    </div>

    <div className="privacy-card">
      <h2>Privacy Policy</h2>

      <div className="policy-section">
        <div className="section-number">1</div>
        <div>
          <h3>Information We Collect</h3>
          <p>
            We may collect personal, payment, communication and
            non-personal information required to process donations,
            subscriptions and support requests.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">2</div>
        <div>
          <h3>How We Use Your Information</h3>
          <p>
            Information is used to process donations, issue receipts,
            communicate updates and comply with legal obligations.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">3</div>
        <div>
          <h3>Consent</h3>
          <p>
            By making a donation or providing personal information, you
            consent to our collection and use of your information.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">4</div>
        <div>
          <h3>Sharing and Disclosure</h3>
          <p>
            We never sell donor information. Data is shared only when
            necessary for payment processing, legal compliance, or trusted
            service providers.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">5</div>
        <div>
          <h3>Payment Security</h3>
          <p>
            Donations are processed securely through Razorpay using
            industry-standard encryption and security practices.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">6</div>
        <div>
          <h3>Data Retention</h3>
          <p>
            Donation and communication records are retained according to
            applicable legal and accounting requirements.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">7</div>
        <div>
          <h3>Cookies and Tracking</h3>
          <p>
            Cookies help us understand visitor behavior and improve user
            experience across the website.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">8</div>
        <div>
          <h3>Data Security</h3>
          <p>
            We implement SSL encryption, secure infrastructure and access
            controls to safeguard donor information.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">9</div>
        <div>
          <h3>Cross-Border Data Transfers</h3>
          <p>
            Data may be processed outside India through trusted service
            providers with adequate safeguards.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">10</div>
        <div>
          <h3>Your Rights</h3>
          <p>
            You may request access, correction, deletion, or withdrawal of
            consent subject to legal requirements.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">11</div>
        <div>
          <h3>Third-Party Links</h3>
          <p>
            We are not responsible for privacy practices of external
            websites linked from our platform.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">12</div>
        <div>
          <h3>Policy Updates</h3>
          <p>
            This policy may be updated periodically. Changes will be posted
            on this page.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <div className="section-number">13</div>
        <div>
          <h3>Grievance & Contact Information</h3>
          <p>
            For any privacy-related concerns, please contact the Grievance
            Officer at NayePankh Foundation.
          </p>
        </div>
      </div>

      <div className="contact-box">
        <h3>Need Help?</h3>
        <p>Email: contact@nayepankh.com</p>
      </div>
    </div>
  </section>

  <Footer />
</>
)}

export default PrivacyPolicy;
