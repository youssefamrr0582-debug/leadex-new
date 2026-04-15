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

        <button className="ctaBtn">Contact Us</button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="glow"></div>

        <h1>
          We Book <span>Qualified B2B Meetings</span> for Your Sales Team
        </h1>

        <p>
          LeadEX is a performance-driven appointment setting agency helping B2B companies scale pipeline with high-intent outbound systems.
        </p>

        <div className="heroBtns">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="grid">
        <div className="card">
          <h2>10K+</h2>
          <p>Calls Monthly</p>
        </div>
        <div className="card">
          <h2>100%</h2>
          <p>AUS Market Focus</p>
        </div>
        <div className="card">
          <h2>High</h2>
          <p>Intent Leads</p>
        </div>
        <div className="card">
          <h2>&lt;1 min</h2>
          <p>Response Time</p>
        </div>
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
            "Offshore Sales Teams"
          ].map((s, i) => (
            <div key={i} className="card hover">
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
          {["SaaS","IT","Cybersecurity","Telecom","Logistics","Energy"].map((i, idx) => (
            <span key={idx} className="tag">{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Strategy","Define ICP & offer"],
            ["Setup","Scripts + training"],
            ["Execution","Outbound calls & booking"],
            ["Delivery","Qualified meetings"]
          ].map((p, i) => (
            <div key={i} className="card hover">
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

        .app {
          padding:20px;
        }

        /* NAV */
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
          gap:12px;
        }

        .links button {
          background:none;
          border:none;
          color:white;
          opacity:0.7;
          cursor:pointer;
        }

        .links button:hover {
          opacity:1;
          color:#34d399;
        }

        .ctaBtn {
          background:#34d399;
          border:none;
          padding:8px 12px;
          border-radius:8px;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:80px 20px;
          position:relative;
        }

        .hero h1 {
          font-size:40px;
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

        /* GLOW */
        .glow {
          position:absolute;
          width:300px;
          height:300px;
          background:#34d39933;
          filter:blur(80px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:12px;
          margin-top:40px;
        }

        .card {
          background:rgba(255,255,255,0.05);
          padding:16px;
          border-radius:12px;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-5px);
          background:rgba(52,211,153,0.1);
        }

        /* SECTIONS */
        .section {
          margin-top:70px;
          text-align:center;
        }

        h2 {
          margin-bottom:20px;
        }

        /* TAGS */
        .tags {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:8px;
        }

        .tag {
          background:rgba(255,255,255,0.05);
          padding:6px 10px;
          border-radius:8px;
          font-size:12px;
        }

        /* CTA */
        .cta {
          text-align:center;
          margin-top:80px;
        }

        footer {
          text-align:center;
          margin-top:50px;
          opacity:0.5;
          font-size:12px;
        }

        /* MOBILE */
        @media(max-width:600px){
          .hero h1 { font-size:26px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
