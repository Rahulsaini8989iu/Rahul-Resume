import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function ContactForm() {
  const sendEmail = async (e) => {
  e.preventDefault();
  const name = e.target.from_name.value;
  const email = e.target.from_email.value;
  const phone = e.target.phone.value;
  const message = e.target.message.value;

  await fetch('http://localhost:5000/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, message }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) alert("Successfully sent!");
      else alert("Email Sending error!");
    });
};


  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            pattern="[0-9]{10}"
            required
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <div className="submit-wrapper">
            <button type="submit">Send</button>
            <div className="line"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
