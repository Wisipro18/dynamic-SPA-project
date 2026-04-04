import React, { useState, useEffect } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "dyynamic SPA";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="page">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {submitted && <p className="confetti-text">Message sent! 🎉</p>}
    </div>
  );
};

export default Contact;