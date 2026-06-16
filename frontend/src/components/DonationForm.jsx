import { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    donorNumber: "",
    Amount: "",
    purpose: "Other",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAmountSelect = (amount) => {
    setFormData((prev) => ({
      ...prev,
      Amount: amount,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      console.log("Donation Data:", formData);

      // simulate API call (replace later with backend)
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess("Thank you! Your donation has been received ❤️");

      // reset form
      setFormData({
        donorName: "",
        donorEmail: "",
        donorNumber: "",
        Amount: "",
        purpose: "Other",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Make A Donation</h2>

      {success && (
        <div className="alert alert-success text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Amount Buttons */}
        <div className="mb-4 text-center">
          <label className="form-label fw-bold">
            Select Amount
          </label>

          <div className="d-flex gap-2 justify-content-center flex-wrap">
            {[500, 1000, 2500, 5000].map((amt) => (
              <button
                type="button"
                key={amt}
                className="btn btn-outline-primary"
                onClick={() => handleAmountSelect(amt)}
              >
                ₹{amt}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mb-3">
          <input
            type="number"
            name="Amount"
            className="form-control"
            placeholder="Custom Amount"
            value={formData.Amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            name="donorName"
            className="form-control"
            placeholder="Full Name"
            value={formData.donorName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="donorEmail"
            className="form-control"
            placeholder="Email Address"
            value={formData.donorEmail}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <input
            type="tel"
            name="donorNumber"
            className="form-control"
            placeholder="Phone Number"
            value={formData.donorNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Purpose */}
        <div className="mb-3">
          <select
            name="purpose"
            className="form-select"
            value={formData.purpose}
            onChange={handleChange}
          >
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Food">Food</option>
            <option value="Women's Hygiene">Women's Hygiene</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-4">
          <textarea
            rows="4"
            name="message"
            className="form-control"
            placeholder="Leave a message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Processing..." : "Donate Securely"}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;