import { useEffect } from "react";

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">

      {/* NAV */}
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

      {/* HERO */}
      <section className="hero">
        <div className="glow"></div>

        <h1>
          We Book <span>Qualified B2B Meetings</span>
        </h1>

        <p>
          LeadEX helps B2B companies generate predictable pipeline through outbound appointment setting systems.
        </p>

        <div className="heroBtns">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Our Services
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="stats">
        <div><h2>10K+</h2><p>Calls Monthly</p></div>
        <div><h2>High</h2><p>Intent Leads</p></div>
        <div><h2>100%</h2><p>B2B Focus</p></div>
        <div><h2>&lt;1 min</h2><p>Response Time</p></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Core Services</h2>

        <div className="grid">
          {[
            "B2B Appointment Setting",
            "Cold Calling",
            "Lead Qualification",
            "Decision Maker Outreach",
            "Pipeline Building",
            "Dedicated SDR Teams"
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s}</h3>
              <p>We generate high-quality sales-ready meetings for your business.</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <h2>Industries</h2>

        <div className="tags">
          {["SaaS","Cybersecurity","IT","Telecom","Logistics","Energy"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Strategy","Define ICP & targeting"],
            ["Setup","Scripts + training"],
            ["Execution","Outbound calling"],
            ["Delivery","Booked meetings"]
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to scale your pipeline?</h2>
        <button className="primary">Contact Us</button>
      </section>

      <footer>
        © {new Date().getFullYear()} LeadEX
      </footer>

      {/* STYLE (ORANGE + GREY + MOBILE FIX) */}
      <style>{`
        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body {
          background:#0f0f10;
          color:#d6d6d6;
          font-family: Arial;
        }

        .app {
          padding:16px;
          max-width:1100px;
          margin:auto;
        }

        /* NAV */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:10px;
        }

        .logo {
          font-size:18px;
          font-weight:bold;
          color:#d6d6d6;
        }

        .logo span {
          color:#ff7a18;
        }

        .links {
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }

        .links button {
          background:none;
          border:none;
          color:#a0a0a0;
          cursor:pointer;
          font-size:12px;
        }

        .links button:hover {
          color:#ff7a18;
        }

        .cta {
          background:#ff7a18;
          border:none;
          padding:8px 12px;
          border-radius:8px;
          cursor:pointer;
          color:black;
          font-weight:bold;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:70px 10px;
          position:relative;
        }

        .hero h1 {
          font-size:32px;
          color:#e5e5e5;
        }

        .hero span {
          color:#ff7a18;
        }

        .hero p {
          max-width:600px;
          margin:12px auto;
          opacity:0.7;
          font-size:14px;
        }

        .heroBtns {
          display:flex;
          justify-content:center;
          gap:10px;
          margin-top:20px;
          flex-wrap:wrap;
        }

        .primary {
          background:#ff7a18;
          border:none;
          padding:10px 14px;
          border-radius:8px;
          cursor:pointer;
          font-weight:bold;
          color:black;
        }

        .secondary {
          background:transparent;
          border:1px solid #444;
          padding:10px 14px;
          border-radius:8px;
          color:#d6d6d6;
          cursor:pointer;
        }

        /* GLOW */
        .glow {
          position:absolute;
          width:250px;
          height:250px;
          background:#ff7a1822;
          filter:blur(80px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
        }

        /* STATS */
        .stats {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:10px;
          margin-top:30px;
          text-align:center;
        }

        .stats h2 {
          color:#ff7a18;
        }

        .stats p {
          font-size:11px;
          opacity:0.6;
        }

        /* SECTIONS */
        .section {
          margin-top:60px;
          text-align:center;
        }

        .section h2 {
          margin-bottom:15px;
          color:#e5e5e5;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:1fr;
          gap:10px;
        }

        .card {
          background:#1a1a1c;
          padding:14px;
          border-radius:10px;
          transition:0.2s;
        }

        .card:hover {
          transform:translateY(-4px);
          border:1px solid #ff7a18;
        }

        .card p {
          font-size:12px;
          opacity:0.6;
          margin-top:6px;
        }

        /* TAGS */
        .tags {
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:8px;
        }

        .tags span {
          background:#1a1a1c;
          padding:6px 10px;
          border-radius:8px;
          font-size:12px;
          color:#aaa;
        }

        /* CTA */
        .cta {
          text-align:center;
          margin-top:70px;
        }

        footer {
          text-align:center;
          margin-top:40px;
          opacity:0.4;
          font-size:12px;
        }

        /* MOBILE FIX */
        @media(max-width:600px){
          .hero h1 { font-size:24px; }
          .links { display:none; }
          .stats { grid-template-columns:1fr 1fr; }
        }
      `}</style>
    </div>
  );
}
