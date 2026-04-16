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

  return (
    <div style={{ fontFamily: "Arial", background: "#f7f4ee", color: "#111" }}>

      {/* HERO */}
      <section style={{ padding: "90px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: 58, marginBottom: 10 }}>
          Lead<span style={{ color: "orange" }}>EX</span>
        </h1>

        <p style={{ maxWidth: 750, margin: "auto", color: "#555", fontSize: 18 }}>
          We deliver high-quality B2B appointments with real decision-makers in the Australian market.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: 25,
            background: "orange",
            color: "white",
            padding: "14px 30px",
            borderRadius: 30,
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: 60, textAlign: "center" }}>
        <h2>What We Do</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 25 }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: 16,
                borderRadius: 12,
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                minWidth: 200,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: 60, background: "#fffaf2", textAlign: "center" }}>
        <h2>Industries We Work With</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 25 }}>
          {industries.map((i, idx) => (
            <span
              key={idx}
              style={{
                background: "white",
                padding: "8px 16px",
                borderRadius: 20,
                border: "1px solid #eee",
              }}
            >
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 70, textAlign: "center", background: "#111", color: "white" }}>
        <h2>Contact Us</h2>

        <p style={{ color: "#bbb", marginBottom: 30 }}>
          Send us a message and we’ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const mailto = `mailto:info@lea-dex.com?subject=LeadEX Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

            window.location.href = mailto;
          }}
          style={{
            maxWidth: 500,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <input name="name" placeholder="Your Name" required style={{ padding: 12, borderRadius: 8, border: "none" }} />
          <input name="email" placeholder="Your Email" required style={{ padding: 12, borderRadius: 8, border: "none" }} />
          <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: 12, borderRadius: 8, border: "none" }} />

          <button
            type="submit"
            style={{
              background: "orange",
              color: "white",
              padding: 14,
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
