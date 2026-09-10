"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();

      let result: {
        error?: string;
        success?: boolean;
        message?: string;
      } = {};

      try {
        result = JSON.parse(responseText);
      } catch {
        result = {
          error: responseText || "Invalid server response.",
        };
      }

      console.log("SERVER STATUS:", response.status);
      console.log("SERVER RESPONSE:", result);

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send message."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("CONTACT FORM ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="contact-modal-close"
              onClick={onClose}
              aria-label="Close contact form"
              type="button"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <div className="contact-modal-header">
                  <p>LET'S TALK</p>

                  <h2>
                    Tell me about
                    <br />
                    <span>your project.</span>
                  </h2>

                  <p className="contact-modal-description">
                    Tell me what you're trying to improve
                    and I'll get back to you.
                  </p>
                </div>

                <form
                  className="contact-modal-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-name">
                        NAME
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-email">
                        EMAIL
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-phone">
                        PHONE
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-website">
                        WEBSITE
                      </label>

                      <input
                        id="contact-website"
                        name="website"
                        type="text"
                        placeholder="yourcompany.com"
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-service">
                      SERVICE
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        What can I help with?
                      </option>

                      <option value="CRO Audit">
                        CRO Audit
                      </option>

                      <option value="Conversion-Focused Design">
                        Conversion-Focused Design
                      </option>

                      <option value="Testing & Optimization">
                        Testing & Optimization
                      </option>

                      <option value="Not sure">
                        Not sure yet
                      </option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">
                      MESSAGE
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  {error && (
                    <p className="contact-form-error">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact-modal-submit"
                    disabled={sending}
                  >
                    {sending
                      ? "Sending..."
                      : "Send inquiry"}

                    {!sending && <span>↗</span>}
                  </button>
                </form>
              </>
            ) : (
              <div className="contact-success">
                <span className="contact-success-icon">
                  ✓
                </span>

                <p>MESSAGE SENT</p>

                <h2>
                  Thanks for
                  <br />
                  <span>reaching out.</span>
                </h2>

                <p>
                  I'll get back to you as soon as
                  possible.
                </p>

                <button
                  className="contact-success-close"
                  onClick={onClose}
                  type="button"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}