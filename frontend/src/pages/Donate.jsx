import { useState } from "react";

import DonateHero from "../components/DonateHero";
import ImpactCards from "../components/ImpactCards";
import DonationForm from "../components/DonationForm";
import DonateStats from "../components/DonateStats";
import DonateFAQ from "../components/DonateFAQ";
import DonateCTA from "../components/DonateCTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Donate = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />

      {/* HERO (button triggers form) */}
      <DonateHero openForm={() => setShowForm(true)} />

      <ImpactCards />
     
      <DonateStats />
      <DonateFAQ />
      <DonateCTA />

      <Footer />

      {/* MODAL FORM */}
      {showForm && (
        <div className="donation-overlay">
          <div className="donation-modal">

            <button
              className="btn-close float-end"
              onClick={() => setShowForm(false)}
            />

            <DonationForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;