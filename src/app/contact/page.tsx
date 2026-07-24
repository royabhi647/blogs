"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.subtitle}>
        Have a question, feedback, or a freelance project? Drop me a message
        and I'll get back to you within 24 hours.
      </p>

      <div className={styles.grid}>
        {/* Info Column */}
        <div className={styles.infoColumn}>
          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.iconWrapper}>
              <Mail size={20} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:contact@codewithabhishek.in">
                contact@codewithabhishek.in
              </a>
            </div>
          </div>

          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.iconWrapper}>
              <MapPin size={20} />
            </div>
            <div>
              <h3>Location</h3>
              <p>New Delhi, India</p>
            </div>
          </div>

          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </div>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/abhishek
              </a>
            </div>
          </div>

          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/abhishek
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className={`glass-card ${styles.formCard}`}>
          {submitted ? (
            <div className={styles.successMessage}>
              <h3>Thank You!</h3>
              <p style={{ color: "inherit", margin: "0.5rem 0 0" }}>
                Your message has been sent successfully. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Freelance Project Inquiry"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: "100%", gap: "0.5rem" }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
