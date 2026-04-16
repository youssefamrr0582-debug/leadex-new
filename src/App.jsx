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
          <button onClick={() => scrollTo("industries")}>Industries</button>
          <button onClick={() => scrollTo("process")}>Process</button>
        </div>

        <button className="cta" onClick={() => setOpen(true)}>
          Contact Us
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          High-Performance <span>B2B Appointment Setting</span> Agency
        </h1>

        <p>
          We help B2B companies connect with real decision-makers and generate qualified sales opportunities through structured outbound systems.
        </p>

        <button className="primary" onClick={() => setOpen(true)}>
          Get in Touch
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What We Deliver</h2>

        <div className="grid">
          {[
            ["Appointment Setting", "We book qualified meetings with real decision-makers."],
            ["Outbound Campaigns", "Structured cold calling & outreach systems."],
            ["Lead Qualification", "Filtering and qualifying real sales opportunities."],
            ["Pipeline Generation", "Building predictable revenue pipelines."]
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
        <h2>How We Work</h2>

        <div className="grid">
          {[
            ["1. Discovery", "We understand your business & ICP."],
            ["2. Setup", "We build scripts, lists & strategy."],
            ["3. Execution", "We run outbound campaigns daily."],
            ["4. Delivery", "You receive qualified meetings."]
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

            <h2>Let’s Work Together</h2>
            <p>We usually respond within 1 hour.</p>

            <form action="https://formsubmit.co/info@lea-dex.com" method="POST">

              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Business Email" required />

              <select name="type" required>
                <option value="">Select Inquiry Type</option>
                <option value="lead">New Lead / Client</option>
                <option value="business">Business Inquiry</option>
                <option value="collaboration">Collaboration</option>
              </select>

              <textarea name="message" placeholder="Tell us about your business or what you need..." required />

              <button type="submit">Send Inquiry</button>
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
          font-family: Arial;
          background:#f7f7f5;
          color:#111;
        }

        .app { max-width:1100px; margin:auto; padding:20px; }

        /* NAV */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo { font-weight:900; font-size:22px; }
        .logo span { color:#ff5a1f; }

        .links button {
          background:none;
          border:none;
          margin:0 10px;
          cursor:pointer;
          color:#666;
        }

        .cta {
          background:#ff5a1f;
          color:white;
          border:none;
          padding:10px 14px;
          border-radius:10px;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:90px 20px;
        }

        .hero h1 {
          font-size:48px;
          font-weight:900;
        }

        .hero span { color:#ff5a1f; }

        .hero p {
          max-width:700px;
          margin:auto;
          color:#666;
        }

        .primary {
          margin-top:20px;
          background:#ff5a1f;
          color:white;
          border:none;
          padding:14px 18px;
          border-radius:10px;
          cursor:pointer;
          transition:0.3s;
        }

        .primary:hover { transform:scale(1.05); }

        /* SECTIONS */
        .section {
          margin-top:70px;
          text-align:center;
        }

        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:15px;
          margin-top:20px;
        }

        .card {
          background:white;
          padding:18px;
          border-radius:14px;
          border:1px solid #eee;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-6px);
          border-color:#ff5a1f;
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
          border-radius:16px;
          width:350px;
        }

        input, textarea, select {
          width:100%;
          margin:8px 0;
          padding:10px;
          border:1px solid #ddd;
          border-radius:8px;
        }

        button[type="submit"] {
          width:100%;
          padding:10px;
          background:#ff5a1f;
          color:white;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }

        .close {
          margin-top:10px;
          background:#eee;
          width:100%;
          padding:10px;
          border:none;
          border-radius:8px;
          cursor:pointer;
        }

        footer {
          text-align:center;
          margin-top:50px;
          color:#888;
        }

        @media(max-width:600px){
          .hero h1 { font-size:30px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
