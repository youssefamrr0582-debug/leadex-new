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
    "Commercial Cleaning",
    "Electricity & Solar",
    "Warehousing & Logistics",
  ];

  const process = [
    { title: "Research ICP", desc: "Define ideal customer profile in AU market." },
    { title: "Build Target List", desc: "Find verified decision makers." },
    { title: "Outreach", desc: "Cold email + LinkedIn + calls." },
    { title: "Qualify Leads", desc: "Filter high-intent prospects." },
    { title: "Book Meetings", desc: "Deliver ready-to-close appointments." },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f7f4ee" }}>

      {/* HERO */}
      <section style={{ padding: "90px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: 60 }}>
          Lead<span style={{ color: "orange" }}>EX</span>
        </h1>

        <p style={{ maxWidth: 700, margin: "20px auto", color: "#555" }}>
          High-quality B2B lead generation & appointment setting for the Australian market.
        </p>

        <a
          href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "orange",
            color: "white",
            padding: "12px 28px",
            borderRadius: 30,
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ textAlign: "center", padding: 60 }}>
        <h2>What We Do</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "white", padding: 15, borderRadius: 12 }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#fffaf2", padding: 60, textAlign: "center" }}>
        <h2>How It Works</h2>

        <div style={{ maxWidth: 600, margin: "auto", textAlign: "left" }}>
          {process.map((p, i) => (
            <div key={i} style={{ marginBottom: 15 }}>
              <b>{i + 1}. {p.title}</b>
              <div style={{ color: "#555" }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: 60, textAlign: "center", background: "white" }}>
        <h2>Industries</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {industries.map((i, idx) => (
            <span key={idx} style={{ background: "#f7f4ee", padding: "8px 16px", borderRadius: 20 }}>
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "#111", color: "white", textAlign: "center", padding: 60 }}>
        <h2>Contact Us</h2>

        <a
          href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "orange",
            color: "white",
            padding: "12px 28px",
            borderRadius: 30,
            textDecoration: "none",
          }}
        >
          Send Email
        </a>
      </section>

    </div>
  );
}
