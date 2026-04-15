import { useEffect } from "react";

export default function App() {

  // smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const services = [
    { t: "B2B Appointment Setting", d: "We book qualified meetings with decision makers." },
    { t: "Cold Calling", d: "High-intent lead qualification and outreach." },
    { t: "Lead Generation", d: "Targeted B2B leads for your ICP." },
    { t: "Decision Maker Outreach", d: "Direct access to executives and managers." },
    { t: "Pipeline Support", d: "Build predictable revenue pipeline." },
    { t: "Offshore Sales Team", d: "Dedicated trained agents for your business." },
  ];

  const stats = [
    { v: "10K+", l: "Calls Monthly" },
    { v: "100%", l: "AUS Market Focus" },
    { v: "High", l: "Intent Leads" },
    { v: "<1 min", l: "Response Time" },
  ];

  const industries = [
    "Telecom","Cloud","Cybersecurity","SaaS","IT Services",
    "Mobility","Cleaning","Solar","Logistics","B2B Services"
  ];

  const process = [
    { t: "Strategy", d: "Define ICP & targeting." },
    { t: "Setup", d: "Scripts + training + systems." },
    { t: "Execution", d: "Calls + qualification + booking." },
    { t: "Delivery", d: "Reports + meetings." },
  ];

  return (
    <div className="page">

      {/* BACKGROUND GLOW */}
      <div className="glow"></div>

      {/* NAV */}
      <div className="nav">
        <div className="logo">Lead<span>EX</span></div>

        <div className="links">
          <a onClick={() => scrollTo("services")}>Services</a>
          <a onClick={() => scrollTo("results")}>Results</a>
          <a onClick={() => scrollTo("industries")}>Industries</a>
          <a onClick={() => scrollTo("process")}>Process</a>
        </div>

        <button className="btn">Contact Us</button>
      </div>

      {/* HERO */}
      <div className="hero">
        <h1>
          We Book <span>Qualified B2B Meetings</span>
        </h1>
        <p>
          LeadEX is a B2B appointment setting agency helping companies scale pipeline with high-intent leads.
        </p>

        <div className="heroBtns">
          <button className="btn primary">Contact Us</button>
          <button className="btn secondary" onClick={() => scrollTo("services")}>
            See Services
          </button>
        </div>
      </div>

      {/* STATS */}
      <div id="results" className="grid">
        {stats.map((s, i) => (
          <div className="card float" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="big">{s.v}</div>
            <div className="small">{s.l}</div>
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="section fade">
        <p>
          We help B2B companies generate predictable pipeline through outbound systems and appointment setting.
        </p>
      </div>

      {/* SERVICES */}
      <div id="services" className="section">
        <h2 className="title">Core Services</h2>

        <div className="grid">
          {services.map((s, i) => (
            <div className="card hoverUp" key={i}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div id="industries" className="section">
        <h2 className="title">Industries</h2>
        <div className="tags">
          {industries.map((i, idx) => (
            <span className="tag pop" key={idx}>{i}</span>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div id="process" className="section">
        <h2 className="title">How It Works</h2>

        <div className="grid">
          {process.map((p, i) => (
            <div className="card hoverUp" key={i}>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta fade">
        <h2>Ready to scale your pipeline?</h2>
        <button className="btn primary">Contact Us</button>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © {new Date().getFullYear()} LeadEX
      </div>

      {/* STYLE */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }

        .page {
          min-height: 100vh;
          background: #070b14;
          color: white;
          font-family: Arial;
          padding: 20px;
          overflow-x: hidden;
        }

        /* REMOVE WHITE FRAME COMPLETELY */
        body {
          margin: 0;
          background: #070b14;
        }

        .glow {
          position: fixed;
          top: 40%;
          left: 50%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #34d39955, transparent 70%);
          transform: translate(-50%, -50%);
          filter: blur(80px);
          animation: float 6s ease-in-out infinite;
          z-index: 0;
        }

        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:10px;
        }

        .logo {
          font-size:20px;
          font-weight:bold;
        }

        .logo span {
          color:#34d399;
        }

        .links {
          display:flex;
          gap:14px;
          font-size:12px;
          opacity:0.7;
        }

        .links a {
          cursor:pointer;
          transition:0.2s;
        }

        .links a:hover {
          color:#34d399;
          transform: scale(1.05);
        }

        .hero {
          text-align:center;
          margin-top:60px;
          animation: fadeIn 0.8s ease;
        }

        .hero h1 {
          font-size:36px;
        }

        .hero span {
          color:#34d399;
        }

        .hero p {
          max-width:600px;
          margin:10px auto;
          opacity:0.7;
        }

        .heroBtns {
          display:flex;
          justify-content:center;
          gap:10px;
          margin-top:20px;
          flex-wrap:wrap;
        }

        .btn {
          padding:10px 14px;
          border-radius:10px;
          border:none;
          cursor:pointer;
          transition:0.3s;
        }

        .btn:hover {
          transform: scale(1.08);
        }

        .primary {
          background:#34d399;
          font-weight:bold;
        }

        .secondary {
          background:transparent;
          border:1px solid #ffffff33;
          color:white;
        }

        .grid {
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
          gap:12px;
        }

        .card {
          background:rgba(255,255,255,0.05);
          padding:14px;
          border-radius:14px;
          transition:0.3s;
          animation: fadeUp 0.6s ease forwards;
        }

        .hoverUp:hover {
          transform: translateY(-6px) scale(1.03);
          background: rgba(52,211,153,0.08);
        }

        .big {
          color:#34d399;
          font-weight:bold;
          font-size:18px;
        }

        .small {
          font-size:12px;
          opacity:0.7;
        }

        .section {
          margin-top:60px;
        }

        .title {
          margin-bottom:15px;
        }

        .tags {
          display:flex;
          flex-wrap:wrap;
          gap:8px;
        }

        .tag {
          padding:6px 10px;
          border-radius:8px;
          background:rgba(255,255,255,0.05);
          font-size:12px;
          transition:0.3s;
        }

        .pop:hover {
          transform: scale(1.1);
          background: rgba(52,211,153,0.1);
        }

        .cta {
          text-align:center;
          margin-top:70px;
          animation: fadeIn 1s ease;
        }

        .footer {
          text-align:center;
          margin-top:50px;
          opacity:0.4;
          font-size:12px;
        }

        @keyframes fadeUp {
          from {opacity:0; transform:translateY(20px);}
          to {opacity:1; transform:translateY(0);}
        }

        @keyframes fadeIn {
          from {opacity:0;}
          to {opacity:1;}
        }

        @keyframes float {
          0% {transform:translate(-50%,-50%)}
          50% {transform:translate(-50%,-55%)}
          100% {transform:translate(-50%,-50%)}
        }

        /* MOBILE */
        @media (max-width:600px) {
          .hero h1 { font-size:26px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
