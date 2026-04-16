import { useEffect, useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

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

        <button className="cta" onClick={() => setOpen(true)}>
          Contact Us
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="bgGlow"></div>

        <h1 className="reveal">
          We Build <span>Predictable B2B Revenue Systems</span>
        </h1>

        <p className="reveal delay1">
          LeadEX helps B2B companies connect with real decision-makers, book qualified meetings, and scale predictable outbound revenue systems.
        </p>

        <div className="heroBtns reveal delay2">
          <button className="primary" onClick={() => setOpen(true)}>
            Contact Us
          </button>
          <button className="secondary" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="stats reveal">
        <div><h2>10K+</h2><p>Monthly Outbound Calls</p></div>
        <div><h2>High Quality</h2><p>Decision Makers Reached</p></div>
        <div><h2>B2B Only</h2><p>Focused Targeting</p></div>
        <div><h2>&lt;1min</h2><p>Lead Response Time</p></div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section reveal">
        <h2>What We Do</h2>

        <p className="subText">
          We don’t just generate leads — we build complete outbound systems that create real sales opportunities for your business.
        </p>

        <div className="grid">
          {[
            ["Appointment Setting", "We book qualified meetings directly with decision-makers in your target industry."],
            ["Cold Calling Campaigns", "High-performance outbound calling with trained agents and optimized scripts."],
            ["Lead Qualification", "We filter out noise and deliver only real, sales-ready opportunities."],
            ["Decision Maker Outreach", "Direct access to CEOs, founders, IT managers, and executives."],
            ["Pipeline Building", "We help you build a consistent, scalable outbound revenue pipeline."],
            ["Market Targeting", "We define your ideal customer profile and build targeted outreach lists."]
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
        <h2>Industries We Work With</h2>

        <div className="tags">
          {["SaaS", "Cybersecurity", "IT Services", "Telecom", "Logistics", "Energy"].map((i, idx) => (
            <span key={idx}>{i}</span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section reveal">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["1. Strategy", "We define your ideal customer profile and targeting strategy."],
            ["2. Setup", "We prepare scripts, data, and outbound systems."],
            ["3. Execution", "We run daily outbound campaigns and calling operations."],
            ["4. Delivery", "You receive qualified meetings with real decision-makers."]
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
        <button className="primary" onClick={() => setOpen(true)}>
          Contact Us
        </button>
      </section>

      <footer>© {new Date().getFullYear()} LeadEX</footer>

      {/* CONTACT MODAL */}
      {open && (
        <div className="modal">
          <div className="modalBox">
            <h3>Get in Touch</h3>
            <p>We usually respond within 1 hour.</p>

            <form action="https://formsubmit.co/info@lea-dex.com" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Tell us about your project" required></textarea>

              <button type="submit">Send Message</button>
            </form>

            <button className="close" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* STYLE */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }

        body {
          background:#f4f1ea;
          color:#1a1a1a;
          font-family: Arial;
        }

        :root {
          --orange:#ff5a1f;
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

        .logo { font-weight:800; font-size:20px; }
        .logo span { color:var(--orange); }

        .links { display:flex; gap:12px; }
        .links button {
          border:none;
          background:none;
          cursor:pointer;
          color:#666;
        }
        .links button:hover { color:var(--orange); }

        .cta {
          background:var(--orange);
          color:white;
          border:none;
          padding:10px 14px;
          border-radius:10px;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:90px 10px;
          position:relative;
        }

        .hero h1 { font-size:44px; }
        .hero span { color:var(--orange); }

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
          transform:translateY(-4px) scale(1.02);
        }

        .secondary {
          background:white;
          border:1px solid #ddd;
          padding:12px 16px;
          border-radius:10px;
          cursor:pointer;
        }

        /* GLOW */
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
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform:translate(-50%,-50%) }
          50% { transform:translate(-50%,-60%) }
        }

        /* SECTIONS */
        .section { margin-top:70px; text-align:center; }

        .subText {
          max-width:700px;
          margin:10px auto 25px;
          color:#666;
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
        }

        /* ANIMATION */
        .reveal {
          opacity:0;
          transform:translateY(20px);
          animation:reveal 0.8s forwards;
        }

        .delay1 { animation-delay:0.2s; }
        .delay2 { animation-delay:0.4s; }

        @keyframes reveal {
          to { opacity:1; transform:translateY(0); }
        }

        /* MODAL */
        .modal {
          position:fixed;
          top:0; left:0;
          width:100%; height:100%;
          background:rgba(0,0,0,0.6);
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .modalBox {
          background:white;
          padding:25px;
          border-radius:16px;
          width:320px;
          animation: pop 0.3s ease;
        }

        .modalBox input,
        .modalBox textarea {
          width:100%;
          margin:8px 0;
          padding:10px;
          border-radius:8px;
          border:1px solid #ddd;
        }

        .modalBox button {
          width:100%;
          padding:10px;
          background:var(--orange);
          color:white;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }

        .close {
          margin-top:10px;
          background:#eee;
          color:#000;
        }

        @keyframes pop {
          from { transform:scale(0.9); opacity:0; }
          to { transform:scale(1); opacity:1; }
        }

        footer {
          text-align:center;
          margin-top:40px;
          font-size:12px;
          color:#888;
        }

        @media(max-width:600px){
          .hero h1 { font-size:28px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
