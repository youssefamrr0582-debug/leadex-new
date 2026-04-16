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
    {
      title: "Define Your ICP",
      desc: "We analyze your ideal customer profile and target market in Australia.",
    },
    {
      title: "Build Target List",
      desc: "We source verified decision-makers aligned with your offer.",
    },
    {
      title: "Multi-Channel Outreach",
      desc: "Cold calls, emails, and LinkedIn outreach executed daily.",
    },
    {
      title: "Qualify Leads",
      desc: "We filter only high-intent prospects ready for sales conversations.",
    },
    {
      title: "Book Meetings",
      desc: "You receive face-to-face, video, or call meetings with real buyers.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f7f4ee", color: "#111" }}>

      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        
        <h1 style={{ fontSize: 58, marginBottom: 15 }}>
          Turn Conversations into <span style={{ color: "orange" }}>Conversions</span>
        </h1>

        <h3 style={{ fontWeight: "normal", color: "#444", marginBottom: 20 }}>
          B2B Appointment Setting Services for High-Growth Sales Teams
        </h3>

        <p style={{ maxWidth: 850, margin: "auto", color: "#555", fontSize: 17, lineHeight: 1.6 }}>
          Stop chasing leads. Start speaking directly to real buyers.
          <br /><br />
          We consistently deliver qualified B2B meetings with verified decision-makers in the Australian market —
          including <b>face-to-face meetings</b>, <b>video conferences</b>, and <b>structured sales calls</b>.
          <br /><br />
          We help SaaS, technology, and service-based companies accelerate pipeline growth without the cost,
          delay, and complexity of building an internal SDR team.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: 30,
            background: "orange",
            color: "white",
            padding: "14px 32px",
            borderRadius: 30,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Qualified Meetings
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

      {/* HOW IT WORKS */}
      <section style={{ padding: 70, background: "#111", color: "white" }}>
        <h2 style={{ textAlign: "center" }}>How It Works</h2>

        <div style={{ maxWidth: 850, margin: "40px auto" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 15,
                marginBottom: 20,
                padding: 20,
                background: "#1a1a1a",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  minWidth: 35,
                  height: 35,
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
                <div style={{ color: "#ccc", marginTop: 5 }}>{step.desc}</div>
              </div>
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
