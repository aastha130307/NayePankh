import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CancellationRefund = () => {
return (
<> <Navbar />

  {/* HERO SECTION */}
  <section className="refund-hero">
    <div className="refund-overlay">
      <h1>Cancellation & Refund Policy</h1>
      <p>
        Transparent guidelines for donations, subscriptions, and refunds
      </p>
    </div>
  </section>

  {/* CONTENT SECTION */}
  <section className="refund-container">
    <div className="refund-card">

      <h2>1. Introduction</h2>
      <p>
        This policy governs all donations and subscriptions made to NayePankh
        Foundation under the Societies Registration Act, 1860. By donating,
        you agree to this strict no-refund policy.
      </p>

      <h2>2. No Refund Policy</h2>
      <p>
        All donations are voluntary and non-refundable. Once processed,
        funds are immediately utilized for charitable activities and cannot
        be reversed.
      </p>

      <h2>3. Why Refunds Are Not Possible</h2>
      <p>
        Donations are instantly used for food distribution, education support,
        healthcare, and emergency relief programs. Reversing funds would
        directly impact beneficiaries.
      </p>

      <h2>4. Subscription Cancellation</h2>
      <p>
        Recurring donations can be cancelled via Razorpay dashboard or by
        contacting us at contact@nayepankh.com. Future payments will stop,
        but previous payments remain non-refundable.
      </p>

      <h2>5. Processing Timelines</h2>
      <p>
        Cancellation requests may take 3–5 working days to reflect depending
        on Razorpay’s system processing.
      </p>

      <h2>6. Chargebacks & Disputes</h2>
      <p>
        In case of disputes, we provide full transaction proof. Since donations
        are voluntary, chargebacks are generally not applicable.
      </p>

      <h2>7. Donor Responsibility</h2>
      <p>
        Donors must ensure correct details while donating. Incorrect
        information may affect receipts or 80G certificates.
      </p>

      <h2>8. No Exchanges or Transfers</h2>
      <p>
        Donations cannot be redirected, exchanged, or transferred between
        campaigns once completed.
      </p>

      <h2>9. Final Agreement</h2>
      <p>
        By donating, you agree that all contributions are final, non-refundable,
        and used immediately for social impact programs.
      </p>

      <div className="contact-box">
        <h3>Need Help?</h3>
        <p>Email: contact@nayepankh.com</p>
        <p>Phone: +91-8318500748</p>
      </div>

    </div>
  </section>

  <Footer />
</>


);
};

export default CancellationRefund;
