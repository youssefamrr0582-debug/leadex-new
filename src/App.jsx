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
    <div style={{ fontFamily: "Arial", background: "#f7f4ee", color: "#111" }}>

      {/* HERO */}
      <section style={{ padding: "90px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "60px", margin: 0 }}>
          Lead<span style={{ color: "orange" }}>EX</span>
        </h1>

        <p style={{ maxWidth: 650, margin: "20px auto", fontSize: 18, color: "#444" }}>
          We generate high-quality B2B leads and book qualified appointments
          with decision makers in the Australian market.
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
            fontWeight: "bold",
          }}
        >
          Get Started
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>What We Do</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 20 }}>
          {services.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: 15,
                borderRadius: 12,
                minWidth: 220,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}>
        <h2>Industries We Target</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 20 }}>
          {industries.map((item, i) => (
            <span
              key={i}
              style={{
                background: "#f7f4ee",
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: 14,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "70px 20px", textAlign: "center", background: "#111", color: "white" }}>
        <h2>Ready to Scale Your Pipeline?</h2>

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
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: 20, fontSize: 12, color: "#666" }}>
        © {new Date().getFullYear()} LeadEX. All rights reserved.
      </footer>

    </div>
  );
}
