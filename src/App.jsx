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
        <div className="blob"></div>

        <h1 className="fadeUp">
          We Build <span>Predictable B2B Pipelines</span> for Growth-Focused Companies
        </h1>

        <p className="fadeUp delay1">
          LeadEX is a performance-driven outbound appointment setting agency. We connect you directly with decision-makers and deliver sales-ready meetings — not leads.
        </p>

        <div className="heroBtns fadeUp delay2">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>

        <div className="miniProof fadeUp delay3">
          Trusted for B2B outbound systems • SaaS • IT • Telecom • Cybersecurity
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="stats fadeUp">
        <div><h2>10K+</h2><p>Calls Monthly</p></div>
        <div><h2>Qualified</h2><p>Decision Makers</p></div>
        <div><h2>100%</h2><p>B2B Focus</p></div>
        <div><h2>&lt;1min</h2><p>Lead Response</p></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section fadeUp">
        <h2>Core Services</h2>

        <div className="grid">
          {[
            ["Appointment Setting","We book qualified meetings directly with decision-makers."],
            ["Cold Calling","High-volume outbound calling with trained SDRs."],
            ["Lead Qualification","Filtering prospects into sales-ready opportunities."],
            ["Decision Maker Outreach","Direct access to CEOs, Managers & Heads."],
            ["Pipeline Building","Full outbound pipeline systems."],
            ["Dedicated SDR Teams","Fully managed offshore sales teams."]
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section fadeUp">
        <h2>Industries We Serve</h2>

        <div className="tags">
          {["SaaS","Cybersecurity","IT Services","Telecom","Logistics","Energy","Consulting"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section fadeUp">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["1. Strategy","We define ICP, offer positioning & targeting."],
            ["2. Setup","Scripts, data, dialers, training."],
            ["3. Execution","Outbound calling campaigns."],
            ["4. Delivery","Booked qualified B2B meetings."]
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta fadeUp">
        <h2>Ready to build a scalable pipeline?</h2>
        <p>Let’s turn outbound into predictable revenue growth.</p>
        <button className="primary">Contact Us</button>
      </section>

      <footer>
        © {new Date().getFullYear()} LeadEX — B2B Appointment Setting Agency
      </footer>

      {/* STYLE */}
      <style>{`
        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body {
          background: #f6f4ef;
          color: #1c1c1c;
          font-family: Arial;
        }

        :root {
          --orange: #ff5a1f;
          --card: #ffffff;
          --text: #1c1c1c;
          --muted: #666;
        }

        .app {
          padding: 18px;
          max-width: 1100px;
          margin: auto;
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
          font-size:20px;
          font-weight:bold;
        }

        .logo span {
          color: var(--orange);
        }

        .links {
          display:flex;
          gap:12px;
        }

        .links button {
          background:none;
          border:none;
          cursor:pointer;
          color:#666;
        }

        .links button:hover {
          color: var(--orange);
        }

        .cta {
          background: var(--orange);
          border:none;
          padding:10px 14px;
          border-radius:10px;
          color:white;
          font-weight:bold;
          box-shadow:0 10px 30px rgba(255,90,31,0.25);
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:90px 10px;
          position:relative;
        }

        .hero h1 {
          font-size:40px;
          line-height:1.2;
        }

        .hero span {
          color: var(--orange);
        }

        .hero p {
          max-width:650px;
          margin:15px auto;
          color:#666;
        }

        .heroBtns {
          margin-top:20px;
          display:flex;
          justify-content:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .primary {
          background: var(--orange);
          color:white;
          border:none;
          padding:12px 16px;
          border-radius:10px;
          cursor:pointer;
          font-weight:bold;
        }

        .secondary {
          background:white;
          border:1px solid #ddd;
          padding:12px 16px;
          border-radius:10px;
          cursor:pointer;
        }

        .miniProof {
          margin-top:18px;
          font-size:12px;
          color:#777;
        }

        /* BLUR */
        .blob {
          position:absolute;
          width:420px;
          height:420px;
          background:rgba(255,90,31,0.15);
          filter:blur(120px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform:translate(-50%,-50%) }
          50% { transform:translate(-50%,-55%) }
        }

        /* STATS */
        .stats {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:10px;
          text-align:center;
          margin-top:30px;
        }

        .stats h2 {
          color: var(--orange);
        }

        .stats p {
          font-size:12px;
          color:#777;
        }

        /* SECTION */
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
          transform:translateY(-6px);
          border-color: var(--orange);
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
        }

        .card p {
          font-size:13px;
          color:#666;
          margin-top:6px;
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
          color:#999;
        }

        /* ANIMATION */
        .fadeUp {
          opacity:0;
          animation: fadeUp 0.8s ease forwards;
        }

        .delay1 { animation-delay:0.2s; }
        .delay2 { animation-delay:0.4s; }
        .delay3 { animation-delay:0.6s; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
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
