import { useState, useEffect } from "react";

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
          <button onClick={() => scrollTo("process")}>Process</button>
        </div>

        <button className="cta" onClick={() => setOpen(true)}>
          Contact
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="glow"></div>

        <h1 className="fadeIn">
          High-Performance <span>B2B Growth System</span>
        </h1>

        <p className="fadeIn delay1">
          We help companies generate qualified meetings with real decision-makers through structured outbound systems.
        </p>

        <button className="primary fadeIn delay2" onClick={() => setOpen(true)}>
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What We Do</h2>

        <div className="grid">
          {[
            ["Appointment Setting", "We book qualified meetings with decision-makers."],
            ["Cold Outreach", "High-performance outbound calling campaigns."],
            ["Lead Qualification", "We filter and deliver real opportunities."],
            ["Pipeline Building", "We build predictable revenue systems."]
          ].map((s, i) => (
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Strategy", "Define ICP & targeting"],
            ["Setup", "Scripts & systems"],
            ["Execution", "Outbound campaigns"],
            ["Delivery", "Qualified meetings"]
          ].map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} LeadEX</footer>

      {/* CONTACT MODAL */}
      {open && (
        <div className="modal">
          <div className="box">

            <h2>Let’s Talk</h2>
            <p>We reply within 1 hour</p>

            <form action="https://formsubmit.co/info@lea-dex.com" method="POST">

              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />

              <select name="type" required>
                <option value="">Inquiry Type</option>
                <option value="lead">New Client</option>
                <option value="business">Business</option>
                <option value="collab">Collaboration</option>
              </select>

              <textarea name="message" placeholder="Tell us about your needs..." required />

              <button type="submit">Send</button>
            </form>

            <button className="close" onClick={() => setOpen(false)}>
              Close
            </button>

          </div>
        </div>
      )}

      {/* STYLE */}
      <style>{`
        body {
          margin:0;
          font-family: Inter, Arial;
          background:#f6f7fb;
          color:#111;
        }

        .app {
          max-width:1100px;
          margin:auto;
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
          font-weight:800;
          font-size:20px;
        }

        .logo span {
          color:#ff5a1f;
        }

        .links button {
          background:none;
          border:none;
          margin:0 10px;
          color:#666;
          cursor:pointer;
        }

        .cta {
          background:#111;
          color:white;
          border:none;
          padding:10px 14px;
          border-radius:12px;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:120px 20px;
          position:relative;
        }

        .hero h1 {
          font-size:52px;
          font-weight:900;
          letter-spacing:-1px;
        }

        .hero span {
          color:#ff5a1f;
        }

        .hero p {
          max-width:650px;
          margin:20px auto;
          color:#666;
          line-height:1.6;
        }

        .primary {
          background:#ff5a1f;
          color:white;
          border:none;
          padding:14px 20px;
          border-radius:14px;
          cursor:pointer;
          transition:0.3s;
        }

        .primary:hover {
          transform:translateY(-3px);
        }

        /* GLOW */
        .glow {
          position:absolute;
          width:600px;
          height:600px;
          background:rgba(255,90,31,0.08);
          filter:blur(140px);
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:-1;
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform:translate(-50%,-50%) }
          50% { transform:translate(-50%,-60%) }
        }

        /* SECTION */
        .section {
          margin-top:90px;
          text-align:center;
        }

        h2 {
          font-size:28px;
          margin-bottom:20px;
        }

        /* GRID */
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:18px;
        }

        .card {
          background:white;
          padding:20px;
          border-radius:18px;
          border:1px solid #eee;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-8px);
          border-color:#ff5a1f;
          box-shadow:0 20px 50px rgba(0,0,0,0.06);
        }

        .card p {
          color:#666;
          font-size:14px;
          line-height:1.5;
        }

        /* MODAL */
        .modal {
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.6);
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .box {
          background:white;
          padding:25px;
          border-radius:18px;
          width:360px;
        }

        input, textarea, select {
          width:100%;
          margin:8px 0;
          padding:10px;
          border:1px solid #ddd;
          border-radius:10px;
        }

        button[type="submit"] {
          width:100%;
          background:#ff5a1f;
          color:white;
          border:none;
          padding:12px;
          border-radius:10px;
          cursor:pointer;
        }

        .close {
          margin-top:10px;
          width:100%;
          padding:10px;
          border:none;
          border-radius:10px;
          background:#eee;
          cursor:pointer;
        }

        /* ANIMATION */
        .fadeIn {
          opacity:0;
          transform:translateY(20px);
          animation:fadeIn 0.8s forwards;
        }

        .delay1 { animation-delay:0.2s; }
        .delay2 { animation-delay:0.4s; }

        @keyframes fadeIn {
          to {
            opacity:1;
            transform:translateY(0);
          }
        }

        /* MOBILE */
        @media(max-width:768px){
          .hero h1 { font-size:34px; }
          .links { display:none; }
          .hero { padding:90px 15px; }
        }
      `}</style>
    </div>
  );
}
