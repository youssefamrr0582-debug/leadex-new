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

        <h1 className="fadeInUp">
          We Book <span>High-Quality B2B Meetings</span>
        </h1>

        <p className="fadeInUp delay1">
          LeadEX is a performance-driven outbound appointment setting agency helping B2B companies scale pipeline predictably.
        </p>

        <div className="heroBtns fadeInUp delay2">
          <button className="primary">Contact Us</button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="stats fadeInUp">
        <div><h2>10K+</h2><p>Calls Monthly</p></div>
        <div><h2>High</h2><p>Intent Leads</p></div>
        <div><h2>100%</h2><p>B2B Focus</p></div>
        <div><h2>&lt;1 min</h2><p>Response Time</p></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section fadeInUp">
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
              <p>We generate qualified sales meetings for your business through structured outbound systems.</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section fadeInUp">
        <h2>Industries</h2>

        <div className="tags">
          {["SaaS","Cybersecurity","IT Services","Telecom","Logistics","Energy","Consulting"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section fadeInUp">
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
      <section className="cta fadeInUp">
        <h2>Ready to scale your pipeline?</h2>
        <button className="primary">Contact Us</button>
      </section>

      <footer>
        © {new Date().getFullYear()} LeadEX — B2B Appointment Setting Agency
      </footer>

      {/* STYLE */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #070708;
          color: #f2f2f2;
          font-family: Arial;
        }

        :root {
          --orange: #ff4d1c;
          --card: #141416;
        }

        .app {
          padding: 16px;
          max-width: 1100px;
          margin: auto;
        }

        /* NAV */
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

        .logo span {
          color: var(--orange);
        }

        .links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .links button {
          background: none;
          border: none;
          color: #aaa;
          cursor: pointer;
        }

        .links button:hover {
          color: var(--orange);
        }

        .cta {
          background: var(--orange);
          color: black;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(255,77,28,0.3);
        }

        /* HERO */
        .hero {
          text-align: center;
          padding: 80px 10px;
          position: relative;
        }

        .hero h1 {
          font-size: 38px;
        }

        .hero span {
          color: var(--orange);
        }

        .hero p {
          max-width: 650px;
          margin: 15px auto;
          opacity: 0.7;
        }

        .heroBtns {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .primary {
          background: var(--orange);
          color: black;
          border: none;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .secondary {
          background: transparent;
          border: 1px solid #333;
          padding: 12px 16px;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
        }

        /* GLOW */
        .glow {
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(255,77,28,0.25);
          filter: blur(130px);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          text-align: center;
          margin-top: 20px;
        }

        .stats h2 {
          color: var(--orange);
        }

        .stats p {
          opacity: 0.6;
          font-size: 12px;
        }

        /* SECTION */
        .section {
          margin-top: 70px;
          text-align: center;
        }

        .section h2 {
          margin-bottom: 20px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .card {
          background: var(--card);
          padding: 14px;
          border-radius: 12px;
          transition: 0.3s;
          border: 1px solid #1f1f1f;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: var(--orange);
          box-shadow: 0 10px 30px rgba(255,77,28,0.15);
        }

        .card p {
          font-size: 12px;
          opacity: 0.6;
          margin-top: 6px;
        }

        /* TAGS */
        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tags span {
          background: #141416;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          opacity: 0.8;
        }

        /* CTA */
        .cta {
          text-align: center;
          margin-top: 80px;
        }

        footer {
          text-align: center;
          margin-top: 40px;
          opacity: 0.4;
          font-size: 12px;
        }

        /* ANIMATIONS */
        .fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .delay1 { animation-delay: 0.2s; }
        .delay2 { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MOBILE */
        @media(max-width:600px){
          .hero h1 { font-size: 26px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
