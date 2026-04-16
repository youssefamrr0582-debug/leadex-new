import { motion } from "framer-motion";

export default function App() {

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
    { title: "Define ICP", desc: "We identify your ideal customers in the Australian market." },
    { title: "Build List", desc: "We source verified decision-makers in your niche." },
    { title: "Outreach", desc: "Cold calls, emails, and LinkedIn outreach daily." },
    { title: "Qualify Leads", desc: "We filter only high-intent prospects." },
    { title: "Book Meetings", desc: "Face-to-face, video, or call meetings with buyers." },
  ];

  const container = {
    maxWidth: 1100,
    margin: "auto",
    padding: "0 20px",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f7f4ee", color: "#111" }}>

      {/* TOP BRAND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: "center", paddingTop: 25, color: "#888", fontSize: 14 }}
      >
        LeadEX • B2B Appointment Setting Agency
      </motion.div>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={container}>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: "clamp(34px, 6vw, 58px)", marginBottom: 10 }}
          >
            Lead<span style={{ color: "orange" }}>EX</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontWeight: "normal", color: "#444", marginBottom: 20 }}
          >
            Turn Conversations into Conversions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: "#666", fontSize: 16, lineHeight: 1.6, maxWidth: 850, margin: "auto" }}
          >
            We deliver qualified B2B meetings with real decision-makers in the Australian market —
            including face-to-face meetings, video conferences, and structured sales calls.
          </motion.p>

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

        </div>
      </motion.section>

      {/* WHAT WE DO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={container}>

          <h2 style={{ fontSize: 32 }}>What We Do</h2>

          <p style={{ color: "#666", maxWidth: 700, margin: "10px auto 40px" }}>
            We build predictable pipelines with real buyers, not random leads.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 15,
          }}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
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

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "70px 20px", background: "#111", color: "white" }}>
        <div style={container}>

          <h2 style={{ textAlign: "center", marginBottom: 40 }}>
            How It Works
          </h2>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 15,
                padding: 18,
                background: "#1a1a1a",
                borderRadius: 12,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "orange",
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
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
        <div style={container}>

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
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const mailto =
                `mailto:info@lea-dex.com?subject=LeadEX Inquiry from ${name}&body=` +
                `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

              window.location.href = mailto;
            }}
            style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}
          >
            <input name="name" placeholder="Your Name" required style={{ padding: 12, borderRadius: 8 }} />
            <input name="email" placeholder="Your Email" required style={{ padding: 12, borderRadius: 8 }} />
            <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: 12, borderRadius: 8 }} />

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
