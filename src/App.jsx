import { useEffect } from "react";

export default function App() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="page">

      {/* NAV (clean like Belkins) */}
      <header className="nav">
        <div className="logo">Lead<span>EX</span></div>

        <div className="links">
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("results")}>Results</button>
          <button onClick={() => scrollTo("industries")}>Industries</button>
          <button onClick={() => scrollTo("process")}>Process</button>
        </div>

        <button className="cta">Contact Us</button>
      </header>

      {/* HERO (Belkins style: simple message) */}
      <section className="hero">
        <h1>
          Appointment Setting for <span>B2B Companies</span>
        </h1>

        <p>
          We help sales teams book qualified meetings with decision makers through structured outbound systems.
        </p>

        <div className="heroBtns">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Our Services
          </button>
        </div>
      </section>

      {/* RESULTS (simple proof like Belkins) */}
      <section id="results" className="stats">
        <div>10K+ <span>Calls Monthly</span></div>
        <div>High Intent <span>Leads</span></div>
        <div>100% <span>B2B Focus</span></div>
        <div>&lt;1 min <span>Response Time</span></div>
      </section>

      {/* SERVICES (very clean like Belkins) */}
      <section id="services" className="section">
        <h2>What We Do</h2>

        <div className="grid">
          {[
            "B2B Appointment Setting",
            "Cold Calling Campaigns",
            "Lead Qualification",
            "Decision Maker Outreach",
            "Pipeline Generation",
            "Dedicated Sales Teams"
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s}</h3>
              <p>We build outbound systems that deliver sales-ready meetings.</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES (Belkins style tags) */}
      <section id="industries" className="section">
        <h2>Industries</h2>

        <div className="tags">
          {["SaaS","IT","Cybersecurity","Telecom","Energy","Logistics","Finance"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS (simple 4 steps like Belkins) */}
      <section id="process" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Strategy","Define ICP and targeting"],
            ["Setup","Build scripts & train agents"],
            ["Execution","Outbound calling campaigns"],
            ["Delivery","Qualified booked meetings"]
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA (Belkins simple end section) */}
      <section className="cta">
        <h2>Let’s build your pipeline</h2>
        <button className="primary">Contact Us</button>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} LeadEX
      </footer>

      {/* STYLE */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }

        body {
          background:#070b14;
          color:white;
          font-family: Arial;
        }

        .page {
          padding:20px;
        }

        /* NAV (Belkins clean) */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:10px 0;
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
          gap:15px;
        }

        .links button {
          background:none;
          border:none;
          color:white;
          opacity:0.6;
          cursor:pointer;
          transition:0.2s;
        }

        .links button:hover {
          opacity:1;
          color:#34d399;
        }

        .cta {
          background:#34d399;
          border:none;
          padding:8px 12px;
          border-radius:8px;
          cursor:pointer;
        }

        /* HERO (very simple like Belkins) */
        .hero {
          text-align:center;
          padding:90px 20px;
        }

        .hero h1 {
          font-size:42px;
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
          margin-top:20px;
          display:flex;
          justify-content:center;
          gap:10px;
        }

        .primary {
          background:#34d399;
          border:none;
          padding:10px 14px;
          border-radius:8px;
          cursor:pointer;
        }

        .secondary {
          background:transparent;
          border:1px solid #ffffff33;
          padding:10px 14px;
          border-radius:8px;
          color:white;
          cursor:pointer;
        }

        /* STATS (Belkins style minimal proof row) */
        .stats {
          display:flex;
          justify-content:center;
          gap:30px;
          flex-wrap:wrap;
          margin-top:40px;
          opacity:0.9;
        }

        .stats div {
          text-align:center;
        }

        .stats span {
          display:block;
          font-size:12px;
          opacity:0.6;
        }

        /* SECTIONS */
        .section {
          margin-top:80px;
          text-align:center;
        }

        h2 {
          margin-bottom:20px;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:12px;
          margin-top:20px;
        }

        .card {
          background:rgba(255,255,255,0.04);
          padding:16px;
          border-radius:10px;
          transition:0.2s;
        }

        .card:hover {
          transform:translateY(-4px);
          background:rgba(52,211,153,0.08);
        }

        .card p {
          opacity:0.6;
          font-size:12px;
          margin-top:6px;
        }

        /* TAGS */
        .tags {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:8px;
        }

        .tags span {
          background:rgba(255,255,255,0.05);
          padding:6px 10px;
          border-radius:8px;
          font-size:12px;
          opacity:0.7;
        }

        /* CTA */
        .cta {
          text-align:center;
          margin-top:90px;
        }

        footer {
          text-align:center;
          margin-top:50px;
          opacity:0.4;
          font-size:12px;
        }

        /* MOBILE */
        @media(max-width:600px){
          .hero h1 { font-size:28px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
