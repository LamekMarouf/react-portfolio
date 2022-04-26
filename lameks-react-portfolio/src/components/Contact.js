import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

function Contact() {
  const initialValues = { fullname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = "Name is required.";
    }
    if (!values.email) {
      errors.email = "Email is required.";
    }
    if (!values.message) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <section className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div id="contact-form-title">Contact Me</div>

          <div className="name-and-email">
            <div className="fullname-box">
              <input
                className="fullname-text"
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formValues.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="email-box">
              <input
                className="email-text"
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="message-box">
            <input
              className="message-text"
              type="text"
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>

          <div className="error-messages">
            <p class="error-message-box">{formErrors.fullname}</p>
            <p class="error-message-box">{formErrors.email}</p>
            <p class="error-message-box">{formErrors.message}</p>
          </div>

          <div className="submit-section">
            <button id="submit-button">Submit</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
