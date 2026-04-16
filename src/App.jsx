import { useState, useEffect } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const phrases = [
    "We Build Predictable Revenue Systems",
    "AI-Enhanced B2B Outreach Engine",
    "Decision-Maker Connection System"
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // AI-like rotating typing
  useEffect(() => {
    let char = 0;
    let current = phrases[index];

    const type = setInterval(() => {
      setText(current.slice(0, char));
      char++;

      if (char > current.length) {
        clearInterval(type);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 1200);
      }
    }, 40);

    return () => clearInterval(type);
  }, [index]);

  // scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    }, { threshold: 0.15 });

    elements.forEach(el => obs.observe(el));
  }, []);

  return (
    <div className="app">

      {/* background */}
      <div className="bg"></div>
      <div className="gridGlow"></div>

      {/* NAV */}
      <header className="nav reveal">
        <div className="logo">Lead<span>EX</span></div>

        <div className="links">
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("ai")}>Why AI</button>
        </div>

        <button className="cta" onClick={() => setOpen(true)}>
          Contact
        </button>
      </header>

      {/* HERO */}
      <section className="hero reveal">

        <h1 className="heroText">
          {text}<span className="cursor">|</span>
        </h1>

        <p>
          AI-powered outbound systems that connect you with real decision-makers and generate qualified B2B opportunities.
        </p>

        <button className="primary" onClick={() => setOpen(true)}>
          Start Growth
        </button>
      </section>

      {/* AI SECTION */}
      <section id="ai" className="section reveal">

        <h2>Why Our System Works</h2>

        <div className="grid">
          {[
            ["Data-Driven Targeting","We identify the exact decision-makers that matter."],
            ["AI-Assisted Outreach","Messaging optimized for higher conversion rates."],
            ["Human Execution Layer","Real trained agents for real conversations."],
            ["Predictable Pipeline","Consistent monthly revenue flow."]
          ].map((s,i)=>(
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section reveal">

        <h2>Core Services</h2>

        <div className="grid">
          {[
            ["Appointment Setting","We book meetings with real decision-makers."],
            ["Cold Outreach","High-performance B2B calling systems."],
            ["Lead Qualification","We filter and deliver sales-ready leads."],
            ["Pipeline Building","Full outbound revenue system setup."]
          ].map((s,i)=>(
            <div key={i} className="card">
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Ready to scale with AI-powered outreach?</h2>
        <button className="primary" onClick={() => setOpen(true)}>
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="reveal">
        © {new Date().getFullYear()} LeadEX
      </footer>

      {/* CONTACT */}
      {open && (
        <div className="modal">
          <div className="box reveal">

            <h2>Contact LeadEX</h2>

            <form action="https://formsubmit.co/info@lea-dex.com" method="POST">

              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />

              <select name="type">
                <option>New Client</option>
                <option>Business Inquiry</option>
                <option>Collaboration</option>
              </select>

              <textarea name="message" placeholder="Tell us about your business..." />

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
          font-family: Inter;
          background:#0b0f19;
          color:white;
        }

        .app {
          max-width:1100px;
          margin:auto;
          padding:20px;
        }

        /* BACKGROUND AI STYLE */
        .bg {
          position:fixed;
          inset:0;
          background: radial-gradient(circle at 20% 20%, #ff5a1f20, transparent 40%),
                      radial-gradient(circle at 80% 60%, #3b82f620, transparent 40%);
          z-index:-2;
        }

        .gridGlow {
          position:fixed;
          inset:0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size:60px 60px;
          z-index:-1;
        }

        /* NAV */
        .nav {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo {
          font-weight:900;
          font-size:22px;
        }

        .logo span { color:#ff5a1f; }

        .links button {
          background:none;
          border:none;
          color:#aaa;
          margin:0 10px;
          cursor:pointer;
        }

        .cta {
          background:#ff5a1f;
          border:none;
          padding:10px 14px;
          border-radius:12px;
          color:white;
          cursor:pointer;
        }

        /* HERO */
        .hero {
          text-align:center;
          padding:120px 20px;
        }

        .heroText {
          font-size:44px;
          font-weight:900;
        }

        .cursor {
          animation:blink 1s infinite;
        }

        @keyframes blink {
          50% { opacity:0; }
        }

        p {
          color:#aaa;
          max-width:700px;
          margin:auto;
        }

        .primary {
          margin-top:20px;
          background:#ff5a1f;
          border:none;
          padding:14px 20px;
          border-radius:14px;
          color:white;
          cursor:pointer;
        }

        /* SECTIONS */
        .section, .cta {
          margin-top:90px;
          text-align:center;
        }

        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:18px;
          margin-top:20px;
        }

        /* GLASS CARDS */
        .card {
          background:rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border:1px solid rgba(255,255,255,0.1);
          padding:20px;
          border-radius:18px;
          transition:0.3s;
        }

        .card:hover {
          transform:translateY(-10px) scale(1.02);
          border-color:#ff5a1f;
        }

        .card p { color:#aaa; font-size:14px; }

        /* REVEAL */
        .reveal {
          opacity:0;
          transform:translateY(40px);
          transition:0.9s ease;
        }

        .reveal.active {
          opacity:1;
          transform:translateY(0);
        }

        /* MODAL */
        .modal {
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.7);
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .box {
          background:#111827;
          padding:25px;
          border-radius:18px;
          width:360px;
        }

        input, textarea, select {
          width:100%;
          margin:8px 0;
          padding:10px;
          border-radius:10px;
          border:none;
          background:#1f2937;
          color:white;
        }

        button[type="submit"] {
          width:100%;
          background:#ff5a1f;
          border:none;
          padding:12px;
          border-radius:10px;
          color:white;
        }

        .close {
          margin-top:10px;
          width:100%;
          padding:10px;
          background:#222;
          border:none;
          color:white;
          border-radius:10px;
        }

        /* MOBILE */
        @media(max-width:768px){
          .heroText { font-size:26px; }
          .links { display:none; }
        }
      `}</style>
    </div>
  );
}
