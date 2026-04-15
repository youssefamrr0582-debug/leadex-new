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
        <div className="bgGlow"></div>

        <h1 className="reveal">
          We Build <span>Predictable B2B Revenue Systems</span>
        </h1>

        <p className="reveal delay1">
          LeadEX is a performance-driven appointment setting agency that connects you with real decision-makers and books qualified sales meetings.
        </p>

        <div className="heroBtns reveal delay2">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="stats reveal">
        <div><h2>10K+</h2><p>Monthly Calls</p></div>
        <div><h2>Qualified</h2><p>Decision Makers</p></div>
        <div><h2>100%</h2><p>B2B Focus</p></div>
        <div><h2>&lt;1min</h2><p>Response Time</p></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section reveal">
        <h2>Core Services</h2>

        <div className="grid">
          {[
            ["Appointment Setting","We book sales meetings with real decision-makers."],
            ["Cold Calling","High-quality outbound calling campaigns."],
            ["Lead Qualification","We filter and qualify real opportunities."],
            ["Decision Maker Outreach","Direct access to CEOs & managers."],
            ["Pipeline Building","Full outbound revenue systems."],
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section reveal">
        <h2>Industries</h2>

        <div className="tags">
          {["SaaS","Cybersecurity","IT Services","Telecom","Logistics","Energy"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section reveal">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["1. Strategy","Define ICP + targeting"],
            ["2. Setup","Scripts + data + training"],
            ["3. Execution","Outbound campaigns"],
            ["4. Delivery","Booked qualified meetings"]
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Ready to scale predictable revenue?</h2>
        <button className="primary">Contact Us</button>
      </section>

      <footer>© {new Date().getFullYear()} LeadEX</footer>

      {/* STYLE */}
      <style>{`
        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body {
          background:#f4f1ea; /* REAL off-white premium */
          color:#1a1a1a;
          font-family: Arial;
        }

        :root {
          --orange:#ff5a1f;
          --card:#ffffff;
        }

        .app {
          max-width:1100px;
          margin:auto;
          padding:18px;
        }

        /* NAV */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
        }

        .logo {
          font-weight:800;
          font-size:20px;
        }

        .logo span {
          color:var(--orange);
        }

        .links {
          display:flex;
          gap:12px;
        }

        .links button {
          border:none;
          background:none;
          cursor:pointer;
          color:#666;
        }

        .links button:hover {
          color:var(--orange);
        }

        .cta {
          background:var(--orange);
          color:white;
          border:none;
          padding:10px 14px;
          border-radius:10px;
          font-weight:bold;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:90px 10px;
          position:relative;
        }

        .hero h1 {
          font-size:44px;
          line-height:1.2;
        }

        .hero span {
          color:var(--orange);
        }

        .hero p {
          max-width:650px;
          margin:15px auto;
          color:#666;
        }

        .heroBtns {
          display:flex;
          justify-content:center;
          gap:10px;
          margin-top:20px;
          flex-wrap:wrap;
        }

        .primary {
          background:var(--orange);
          color:white;
          border:none;
          padding:12px 16px;
          border-radius:10px;
          cursor:pointer;
          transition:0.3s;
        }

        .primary:hover {
          transform:translateY(-3px);
        }

        .secondary {
          background:white;
          border:1px solid #ddd;
          padding:12px 16px;
          border-radius:10px;
          cursor:pointer;
        }

        /* 🔥 REAL PREMIUM BACKGROUND GLOW */
        .bgGlow {
          position:absolute;
          width:500px;
          height:500px;
          background:rgba(255,90,31,0.12);
          filter:blur(140px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
          animation: float 7s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform:translate(-50%,-50%) }
          50% { transform:translate(-50%,-60%) }
        }

        /* STATS */
        .stats {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          text-align:center;
          gap:10px;
          margin-top:20px;
        }

        .stats h2 {
          color:var(--orange);
        }

        .stats p {
          font-size:12px;
          color:#777;
        }

        /* SECTIONS */
        .section {
          margin-top:70px;
          text-align:center;
        }

        .section h2 {
          margin-bottom:18px;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:1fr;
          gap:12px;
        }

        .card {
          background:white;
          padding:16px;
          border-radius:14px;
          border:1px solid #eee;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-8px);
          border-color:var(--orange);
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
        }

        .card p {
          font-size:13px;
          color:#666;
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
          background:white;
          padding:8px 12px;
          border-radius:10px;
          border:1px solid #eee;
          font-size:12px;
        }

        /* CTA */
        .cta {
          text-align:center;
          margin-top:80px;
        }

        footer {
          text-align:center;
          margin-top:40px;
          font-size:12px;
          color:#888;
        }

        /* 🔥 REAL ANIMATION SYSTEM */
        .reveal {
          opacity:0;
          transform:translateY(20px);
          animation:reveal 0.8s forwards;
        }

        .delay1 { animation-delay:0.2s; }
        .delay2 { animation-delay:0.4s; }

        @keyframes reveal {
          to {
            opacity:1;
            transform:translateY(0);
          }
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
