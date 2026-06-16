import { useState } from "react";
import axios from "axios";

const VolunteerModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    skills: "",
    availability: "Weekends",
    motivation: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/volunteers",
        formData
      );

      alert("Volunteer application submitted!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        skills: "",
        availability: "Weekends",
        motivation: "",
      });
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
        "Failed to submit application"
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="volunteerModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Volunteer Registration
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                className="form-control mb-3"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control mb-3"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="skills"
                placeholder="Skills (Teaching, Design, Coding...)"
                className="form-control mb-3"
                value={formData.skills}
                onChange={handleChange}
                required
              />

              <select
                name="availability"
                className="form-select mb-3"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Both">Both</option>
              </select>

              <textarea
                rows="4"
                name="motivation"
                placeholder="Why do you want to volunteer with us?"
                className="form-control mb-3"
                value={formData.motivation}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Submit Application
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;