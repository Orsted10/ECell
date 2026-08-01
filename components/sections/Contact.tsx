"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InstagramLogo, LinkedinLogo, XLogo, EnvelopeSimple, MapPin, CheckCircle } from "@phosphor-icons/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to a form backend
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border-soft)",
        background: "var(--surface)",
      }}
    >
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <motion.div variants={fadeUp}>
              <h2 className="display-3" style={{ marginBottom: "1rem" }}>
                Let&rsquo;s build something together.
              </h2>
              <p style={{ color: "var(--text-2)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "42ch" }}>
                Have a question, an idea, or just want to know more? Reach out and a team member will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="mailto:ecell@cuup.ac.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--text-2)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")}
              >
                <EnvelopeSimple size={16} color="var(--accent)" />
                ecell@cuup.ac.in
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-2)", fontSize: "0.9rem" }}>
                <MapPin size={16} color="var(--accent)" />
                Chandigarh University, Greater Noida, UP
              </div>
            </motion.div>

            {/* Social links — Simple Icons SVG via inline */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem" }}>
              {[
                { icon: InstagramLogo, href: "#", label: "Instagram" },
                { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
                { icon: XLogo, href: "#", label: "X (Twitter)" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-3)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--accent)";
                    el.style.background = "var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-3)";
                    el.style.background = "transparent";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: "3rem",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                    background: "var(--surface-2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle size={48} color="var(--accent)" weight="thin" />
                  <h3 style={{ fontFamily: "var(--font-outfit)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text-1)" }}>
                    Message received.
                  </h3>
                  <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>
                    We&rsquo;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    padding: "2.5rem",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                    background: "var(--surface-2)",
                  }}
                >
                  {[
                    { id: "name", label: "Your name", type: "text", required: true },
                    { id: "email", label: "Email address", type: "email", required: true },
                  ].map((field) => (
                    <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label
                        htmlFor={field.id}
                        style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--text-2)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required={field.required}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        style={{
                          padding: "0.75rem 1rem",
                          borderRadius: "8px",
                          border: "1px solid var(--border)",
                          background: "var(--surface)",
                          color: "var(--text-1)",
                          fontSize: "0.95rem",
                          outline: "none",
                          transition: "border-color 0.2s",
                          width: "100%",
                        }}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="message" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--text-2)" }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid var(--border)",
                        background: "var(--surface)",
                        color: "var(--text-1)",
                        fontSize: "0.95rem",
                        outline: "none",
                        transition: "border-color 0.2s",
                        resize: "vertical",
                        width: "100%",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    style={{
                      padding: "0.85rem 1.75rem",
                      borderRadius: "999px",
                      background: "var(--accent)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s, transform 0.15s",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.88";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  >
                    Send message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div
          style={{
            marginTop: "6rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-1)",
              letterSpacing: "-0.01em",
            }}
          >
            Students <span style={{ color: "var(--text-3)" }}>&#8594;</span> Builders{" "}
            <span style={{ color: "var(--text-3)" }}>&#8594;</span> Founders{" "}
            <span style={{ color: "var(--text-3)" }}>&#8594;</span> Impact
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>
            E-Cell CUUP &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
