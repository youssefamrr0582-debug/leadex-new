import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function App() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message sent successfully 🚀");
      },
      () => {
        alert("Failed to send message");
      }
    );

    e.target.reset();
  };

  const services = [
    "B2B Appointment Setting",
    "Cold Calling & Lead Qualification",
    "High-Intent Lead Generation",
    "Decision Maker Outreach",
    "Sales Pipeline Building",
    "Dedicated SDR Teams",
  ];

  const industries = [
    "Telecommunications",
    "Cloud Solutions",
    "Cybersecurity",
    "Data Connectivity",
    "IT Services",
    "Logistics",
    "Energy & Solar",
    "SaaS",
  ];

  const steps = [
    { title: "Define ICP", desc: "We identify your ideal customers in Australia." },
    { title: "Build List", desc: "We source verified decision-makers." },
    { title: "Outreach", desc: "Calls, emails, LinkedIn outreach daily." },
    { title: "Qualify Leads", desc: "Only high-intent prospects are passed." },
    { title: "Book Meetings", desc: "Face-to-face, video, or call meetings." },
  ];

  const inputStyle = {
    padding: 12,
    borderRadius: 8,
    border: "none",
    outline: "none",
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f7f4ee", color: "#111" }}>

      {/* BRAND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: "center", paddingTop: 25, color: "#888", fontSize: 14 }}
      >
        LeadEX • B2B Appointment Setting Agency
      </motion.div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <h1 style={{ fontSize: "clamp(34px, 6vw, 58px)" }}>
          Lead<span style={{ color: "orange" }}>EX</span>
        </h1>

        <h3 style={{ fontWeight: "normal", color: "#444", marginBottom: 20 }}>
          Turn Conversations into Conversions
        </h3>

        <p style={{ maxWidth: 850, margin: "auto", color: "#666", lineHeight: 1.6 }}>
          We deliver qualified B2B meetings with real decision-makers in Australia —
          including face-to-face meetings, video conferences, and sales calls.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: 25,
            background: "orange",
            color: "white",
            padding: "14px 30px",
            borderRadius: 30,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Qualified Meetings
        </motion.a>
      </motion.section>

      {/* WHAT WE DO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>What We Do</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 15,
          maxWidth: 1000,
          margin: "40px auto"
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "white",
                padding: 16,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                textAlign: "left",
              }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "70px 20px", background: "#111", color: "white" }}>
        <h2 style={{ textAlign: "center" }}>How It Works</h2>

        <div style={{ maxWidth: 900, margin: "40px auto" }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 15,
                padding: 18,
                background: "#1a1a1a",
                borderRadius: 12,
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "orange",
                color: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}>
                {i + 1}
              </div>

              <div>
                <b style={{ color: "orange" }}>{step.title}</b>
                <div style={{ color: "#ccc", fontSize: 14 }}>
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "auto" }}>
          <h2>Industries We Work With</h2>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginTop: 20,
          }}>
            {industries.map((i, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                style={{
                  background: "white",
                  padding: "8px 14px",
                  borderRadius: 20,
                  border: "1px solid #eee",
                  fontSize: 13,
                }}
              >
                {i}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "70px 20px", background: "#111", color: "white" }}>
        <div style={{ maxWidth: 500, margin: "auto" }}>

          <h2 style={{ textAlign: "center" }}>Contact Us</h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}
          >
            <input name="name" placeholder="Your Name" required style={inputStyle} />
            <input name="email" placeholder="Your Email" required style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows="5" required style={inputStyle} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              style={{
                background: "orange",
                color: "white",
                padding: 14,
                borderRadius: 10,
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </motion.button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <div style={{ padding: 25, textAlign: "center", color: "#777", fontSize: 13 }}>
        © {new Date().getFullYear()} LeadEX. All rights reserved.
      </div>

    </div>
  );
}
