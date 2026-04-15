export default function App() {
  const services = [
    {
      t: "B2B Appointment Setting",
      d: "Structured outbound campaigns to book qualified meetings.",
    },
    {
      t: "Cold Calling & Qualification",
      d: "We filter and qualify high-intent prospects for your team.",
    },
    {
      t: "Lead Generation",
      d: "High-quality B2B leads aligned with your ICP.",
    },
    {
      t: "Decision Maker Outreach",
      d: "Direct access to CEOs, Managers and key stakeholders.",
    },
    {
      t: "Pipeline Support",
      d: "We help you build a predictable sales pipeline.",
    },
    {
      t: "Offshore Sales Team",
      d: "Trained agents acting as your extended sales arm.",
    },
  ];

  const stats = [
    { v: "10K+", l: "Calls Monthly" },
    { v: "100%", l: "AUS Market Focus" },
    { v: "High", l: "Intent Leads" },
    { v: "<1 min", l: "Response Time" },
  ];

  const industries = [
    "Telecom",
    "Cloud",
    "Cybersecurity",
    "SaaS",
    "IT Services",
    "Mobility",
    "Cleaning",
    "Solar",
    "Logistics",
    "B2B Services",
  ];

  const process = [
    { t: "Strategy", d: "Define ICP and targeting." },
    { t: "Setup", d: "Scripts + training + systems." },
    { t: "Execution", d: "Calls + qualification + booking." },
    { t: "Delivery", d: "Qualified meetings + reporting." },
  ];

  return (
    <div className="page">

      <div className="glow"></div>

      {/* NAV */}
      <div className="nav">
        <div className="logo">
          Lead<span style={{ color: "#34d399" }}>EX</span>
        </div>

        <div className="links">
          <a>Services</a>
          <a>Results</a>
          <a>Industries</a>
          <a>Process</a>
        </div>

        <button className="btn">Contact Us</button>
      </div>

      {/* HERO */}
      <div className="hero">
        <h1>
          We Book <span>Qualified B2B Meetings</span>
        </h1>
        <p>
          LeadEX is a performance-driven B2B appointment setting agency helping you scale your pipeline with high-intent leads.
        </p>

        <div className="heroBtns">
          <button className="btn primary">Contact Us</button>
          <button className="btn secondary">See How It Works</button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid">
        {stats.map((s, i) => (
          <div className="card" key={i}>
            <div className="big">{s.v}</div>
            <div className="small">{s.l}</div>
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="section">
        <p>
          We help B2B companies generate predictable pipeline through outbound calling and appointment setting systems.
        </p>
      </div>

      {/* SERVICES */}
      <div className="section">
        <h2>Core Services</h2>
        <div className="grid">
          {services.map((s, i) => (
            <div className="card" key={i}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="section">
        <h2>Industries</h2>
        <div className="tags">
          {industries.map((i, idx) => (
            <span className="tag" key={idx}>{i}</span>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="section">
        <h2>How It Works</h2>
        <div className="grid">
          {process.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Ready to scale your pipeline?</h2>
        <p>Start booking qualified B2B meetings today.</p>
        <button className="btn primary">Contact Us</button>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © {new Date().getFullYear()} LeadEX — B2B Appointment Setting Agency
      </div>

      {/* STYLE */}
      <style>{`
        .page {
          min-height: 100vh;
          background: #070b14;
          color: white;
          padding: 20px;
          font-family: Arial;
          overflow-x: hidden;
        }

        .glow {
          position: fixed;
          top: 40%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #34d39955, transparent 70%);
          transform: translate(-50%, -50%);
          filter: blur(70px);
          animation: float 6s ease-in-out infinite;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .logo {
          font-size: 20px;
          font-weight: bold;
        }

        .links {
          display: flex;
          gap: 12px;
          font-size: 12px;
          opacity: 0.7;
        }

        .hero {
          text-align: center;
          margin-top: 50px;
        }

        .hero h1 {
          font-size: 34px;
        }

        .hero span {
          color: #34d399;
        }

        .hero p {
          max-width: 600px;
          margin: 10px auto;
          opacity: 0.7;
        }

        .heroBtns {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }

        .primary {
          background: #34d399;
          font-weight: bold;
        }

        .secondary {
          background: transparent;
          border: 1px solid #ffffff33;
          color: white;
        }

        .grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 10px;
        }

        .card {
          background: rgba(255,255,255,0.06);
          padding: 14px;
          border-radius: 14px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .big {
          color: #34d399;
          font-weight: bold;
        }

        .small {
          font-size: 12px;
          opacity: 0.7;
        }

        .section {
          margin-top: 50px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          font-size: 12px;
        }

        .cta {
          text-align: center;
          margin-top: 60px;
        }

        .footer {
          text-align: center;
          margin-top: 40px;
          opacity: 0.4;
          font-size: 12px;
        }

        @keyframes float {
          0% { transform: translate(-50%, -50%) }
          50% { transform: translate(-50%, -55%) }
          100% { transform: translate(-50%, -50%) }
        }
      `}</style>
    </div>
  );
}
