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

  return (
    <div style={{ fontFamily: "Arial" }}>

      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f7f4ee" }}>
        <h1 style={{ fontSize: 50 }}>
          Lead<span style={{ color: "orange" }}>EX</span>
        </h1>

        <p style={{ maxWidth: 600, margin: "20px auto", color: "#444" }}>
          High-quality B2B lead generation & appointment setting for the Australian market.
        </p>

        <a
          href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
          style={{
            background: "orange",
            color: "white",
            padding: "12px 25px",
            borderRadius: 25,
            textDecoration: "none",
            display: "inline-block",
            marginTop: 20,
          }}
        >
          Get Started
        </a>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: 15, border: "1px solid #ddd", borderRadius: 10 }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}>
        <h2>Industries</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {industries.map((ind, i) => (
            <span key={i} style={{ padding: "8px 15px", background: "#f7f4ee", borderRadius: 20 }}>
              {ind}
            </span>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center", background: "#111", color: "white" }}>
        <h2>Contact Us</h2>

        <a
          href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
          style={{
            marginTop: 20,
            display: "inline-block",
            background: "orange",
            padding: "12px 25px",
            borderRadius: 25,
            color: "white",
            textDecoration: "none",
          }}
        >
          Send Email
        </a>
      </section>

    </div>
  );
}
