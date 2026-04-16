import { useEffect } from "react";

export default function WebsiteMockup() {

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    }, { threshold: 0.12 });

    els.forEach(el => obs.observe(el));
  }, []);

  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="bg" />
      <div className="grid" />

      {/* NAV */}
      <header className="nav reveal">
        <div className="logo">Lead<span>EX</span></div>

        <div className="links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </div>

        <button className="cta">Book Call</button>
      </header>

      {/* HERO */}
      <section className="hero reveal">

        <div className="glow" />

        <h1>
          We Build <span>Predictable B2B Revenue Systems</span>
        </h1>

        <p>
          AI-assisted outbound systems that connect you with real decision-makers and generate high-quality sales meetings.
        </p>

        <button className="primary">Start Growth</button>
      </section>

      {/* SERVICES */}
      <section id="services" className="section reveal">
        <h2>Core Services</h2>

        <div className="gridCards">
          {[
            ["Appointment Setting","We book meetings with real decision-makers."],
            ["Cold Outreach","High-performance B2B outbound systems."],
            ["Lead Qualification","We filter only sales-ready opportunities."],
            ["Pipeline Building","Predictable revenue engine setup."]
          ].map((s,i)=>(
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section reveal">
        <h2>How It Works</h2>

        <div className="gridCards">
          {[
            ["1. Strategy","Define ICP & targeting"],
            ["2. Setup","Scripts + systems"],
            ["3. Execution","Outbound campaigns"],
            ["4. Delivery","Qualified meetings"]
          ].map((p,i)=>(
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
        <button className="primary">Book Strategy Call</button>
      </section>

      {/* FOOTER */}
      <footer className="reveal">
        © {new Date().getFullYear()} LeadEX
      </footer>

      {/* STYLE */}
      <style>{`
        body {
          margin:0;
          font-family: Inter, Arial;
          background:#070b14;
          color:white;
        }

        .app {
          max-width:1100px;
          margin:auto;
          padding:20px;
        }

        /* AI BACKGROUND */
        .bg {
          position:fixed;
          inset:0;
          background:
            radial-gradient(circle at 20% 20%, rgba(16,185,129,0.18), transparent 40%),
            radial-gradient(circle at 80% 50%, rgba(59,130,246,0.14), transparent 45%),
            radial-gradient(circle at 50% 100%, rgba(255,90,31,0.10), transparent 50%);
          filter: blur(40px);
          z-index:-2;
        }

        .grid {
          position:fixed;
          inset:0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size:60px 60px;
          z-index:-1;
          opacity:0.4;
        }

        /* NAV */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:14px 0;
          backdrop-filter: blur(12px);
          position:sticky;
          top:0;
        }

        .logo {
          font-weight:900;
          font-size:20px;
        }

        .logo span { color:#10b981; }

        .links a {
          margin:0 12px;
          color:#aaa;
          text-decoration:none;
        }

        .links a:hover { color:white; }

        .cta {
          background:#10b981;
          border:none;
          padding:10px 14px;
          border-radius:12px;
          color:black;
          font-weight:700;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:130px 20px;
          position:relative;
        }

        .hero h1 {
          font-size:52px;
          font-weight:900;
          line-height:1.1;
        }

        .hero span { color:#10b981; }

        .hero p {
          max-width:720px;
          margin:20px auto;
          color:#aaa;
          line-height:1.7;
        }

        .primary {
          background:#10b981;
          border:none;
          padding:14px 22px;
          border-radius:14px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .primary:hover {
          transform:translateY(-4px) scale(1.03);
        }

        .glow {
          position:absolute;
          width:500px;
          height:500px;
          background:rgba(16,185,129,0.15);
          filter:blur(120px);
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform:translate(-50%,-50%); }
          50% { transform:translate(-50%,-60%); }
        }

        /* SECTIONS */
        .section, .cta {
          margin-top:90px;
          text-align:center;
        }

        .gridCards {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:18px;
          margin-top:20px;
        }

        /* CARDS (10/10 LOOK) */
        .card {
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          padding:22px;
          border-radius:20px;
          transition:0.35s;
        }

        .card:hover {
          transform:translateY(-12px) scale(1.03);
          border-color:#10b981;
          box-shadow:0 30px 80px rgba(0,0,0,0.3);
        }

        .card p {
          color:#aaa;
          font-size:14px;
          line-height:1.6;
        }

        /* REVEAL ANIMATION */
        .reveal {
          opacity:0;
          transform:translateY(40px);
          transition:1s cubic-bezier(0.2,0.8,0.2,1);
        }

        .reveal.active {
          opacity:1;
          transform:translateY(0);
        }

        footer {
          text-align:center;
          margin-top:80px;
          color:#666;
        }

        /* MOBILE */
        @media(max-width:768px){
          .hero h1 { font-size:30px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
