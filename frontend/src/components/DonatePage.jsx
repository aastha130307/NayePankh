import { useState } from "react";
import DonateHero from "./DonateHero";
import DonationForm from "./DonationForm";

const DonatePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* HERO */}
      <DonateHero openForm={() => setShowForm(true)} />

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

export default DonatePage;