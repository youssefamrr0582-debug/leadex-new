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

      {/* HERO (Belkins-style message heavy) */}
      <section className="hero">
        <div className="glow"></div>

        <p className="kicker">B2B Appointment Setting Agency</p>

        <h1>
          We help B2B companies <span>book qualified meetings</span> with decision makers
        </h1>

        <p className="sub">
          LeadEX builds outbound systems that generate predictable pipeline through cold calling, qualification, and appointment setting for high-value B2B industries.
        </p>

        <div className="heroBtns">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>
      </section>

      {/* RESULTS (Belkins style credibility row) */}
      <section id="results" className="stats">
        <div>
          <h2>10K+</h2>
          <p>Outbound Calls / Month</p>
        </div>

        <div>
          <h2>High</h2>
          <p>Intent Qualified Leads</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>B2B Focus (AUS Market)</p>
        </div>

        <div>
          <h2>&lt;1 min</h2>
          <p>Lead Response Time</p>
        </div>
      </section>

      {/* SERVICES (structured like Belkins) */}
      <section id="services" className="section">
        <h2>What We Do</h2>

        <p className="sectionSub">
          We don’t sell leads — we build outbound systems that deliver booked meetings directly with decision makers.
        </p>

        <div className="grid">
          {[
            ["B2B Appointment Setting","We book qualified meetings with decision makers in your ICP."],
            ["Cold Calling Campaigns","Structured outbound calling with trained offshore agents."],
            ["Lead Qualification","Filtering prospects to only high-intent opportunities."],
            ["Decision Maker Outreach","Direct access to executives & managers."],
            ["Pipeline Generation","Consistent sales pipeline for your team."],
            ["Dedicated Sales Teams","Offshore trained SDR teams for your business."]
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES (Belkins positioning style) */}
      <section id="industries" className="section">
        <h2>Industries We Support</h2>

        <div className="tags">
          {[
            "SaaS",
            "Cybersecurity",
            "Cloud Solutions",
            "Telecommunications",
            "IT Services",
            "Logistics",
            "Energy",
            "B2B Services"
          ].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS (very structured like Belkins) */}
      <section id="process" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["1. Strategy","We define ICP, messaging, and targeting."],
            ["2. Setup","Scripts, training, systems & dialers."],
            ["3. Execution","Outbound calling + qualification + booking."],
            ["4. Delivery","Qualified meetings delivered to your team."]
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
        <p>Let’s build a predictable outbound engine for your business.</p>
        <button className="primary">Contact Us</button>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} LeadEX — B2B Appointment Setting Agency
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

        /* HERO */
        .hero {
          text-align:center;
          padding:100px 20px;
          position:relative;
        }

        .kicker {
          color:#34d399;
          font-size:12px;
          letter-spacing:2px;
          margin-bottom:10px;
        }

        .hero h1 {
          font-size:44px;
          max-width:800px;
          margin:auto;
        }

        .hero span {
          color:#34d399;
        }

        .sub {
          max-width:650px;
          margin:15px auto;
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
          width:400px;
          height:400px;
          background:#34d39933;
          filter:blur(90px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
        }

        /* STATS */
        .stats {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
          gap:20px;
          text-align:center;
          margin-top:40px;
        }

        .stats h2 {
          color:#34d399;
        }

        .stats p {
          opacity:0.6;
          font-size:12px;
        }

        /* SECTIONS */
        .section {
          margin-top:90px;
          text-align:center;
        }

        .sectionSub {
          opacity:0.6;
          max-width:600px;
          margin:10px auto 30px;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:12px;
          margin-top:20px;
        }

        .card {
          background:rgba(255,255,255,0.04);
          padding:18px;
          border-radius:12px;
          transition:0.2s;
        }

        .card:hover {
          transform:translateY(-5px);
          background:rgba(52,211,153,0.08);
        }

        .card p {
          opacity:0.6;
          font-size:12px;
          margin-top:8px;
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
          margin-top:100px;
        }

        .cta p {
          opacity:0.6;
          margin:10px 0;
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
