import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import React from "react";


function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .send(
        "service_2yvyhsw",
        "template_7211f7a",
        {
          full_name: form.full_name.value,
          email: form.email.value,
          phone: form.phone.value,
          location: form.location.value,
          employment_status: form.employment_status.value,
          preferred_role: form.preferred_role.value,
        },
        "4cx2dOx1Q43hhdYHK"
      )
      .then(() => {
        setShowPopup(true);
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Submission failed. Please try again.");
      });
  };

  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="overlay fade-in">
          <h1>Work From Home Opportunities</h1>
          <h2>UnitedHealth Group</h2>
          <p>
            Helping unemployed and job-seeking individuals across the United States
            access legitimate remote work opportunities from home.
          </p>
          <a href="#apply" className="cta-btn">Get Started</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about slide-up">
        <h2>Why Choose UnitedHealth Group?</h2>
        <p>
          UnitedHealth Group is a trusted U.S. healthcare leader offering remote-friendly
          roles designed to provide stability, growth, and meaningful work.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>🏠 Remote Flexibility</h3>
            <p>Work comfortably from home with flexible schedules.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Career Stability</h3>
            <p>Long-term opportunities with training and support.</p>
          </div>
          <div className="feature-card">
            <h3>🇺🇸 Nationwide Access</h3>
            <p>Available for qualified applicants across the U.S.</p>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="apply" id="apply">
        <h2 className="slide-up">Apply for Remote Opportunities</h2>
        <p className="apply-text slide-up">
          Fill out the form below. If you meet the requirements, our recruitment team
          will contact you.
        </p>

        <form className="form fade-in" onSubmit={handleSubmit}>
          <input name="full_name" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />
          <input name="location" type="text" placeholder="City & State" required />

          <select name="employment_status" required>
            <option value="">Employment Status</option>
            <option>Currently Unemployed</option>
            <option>Seeking Work From Home</option>
            <option>Employed (Looking for Change)</option>
          </select>

          <select name="preferred_role" required>
            <option value="">Preferred Role</option>
            <option>Customer Support</option>
            <option>Claims Processing</option>
            <option>Data Entry</option>
            <option>Administrative Support</option>
          </select>

          <button type="submit">Submit Application</button>
        </form>

        <p className="disclaimer">
          Submission does not guarantee employment. Opportunities are subject to eligibility.
        </p>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup scale-in">
            <h2>✅ Application Submitted</h2>
            <p>
              Thank you for your interest in UnitedHealth Group remote opportunities.
              Our team will review your submission and contact you if you qualify.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} UnitedHealth Group</p>
        <p>Remote Opportunities | United States</p>
      </footer>
    </div>
  );
}

export default App;
