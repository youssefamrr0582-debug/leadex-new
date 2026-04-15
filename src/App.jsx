export default function App() {
  const services = [
    "B2B Appointment Setting",
    "Cold Calling & Lead Qualification",
    "High-Quality Lead Generation",
    "Decision-Maker Outreach",
    "Pipeline Growth Support",
    "Dedicated Offshore Teams",
  ];

  const stats = [
    { v: "10K+", l: "Monthly Calls" },
    { v: "100%", l: "AUS Focus" },
    { v: "High", l: "Intent Leads" },
    { v: "<1 min", l: "Response Time" },
  ];

  const industries = ["Telecom", "Cloud", "Cybersecurity", "SaaS", "IT", "Logistics"];

  return (
    <div style={styles.page}>

      {/* BACKGROUND GLOW ANIMATION */}
      <div style={styles.glow}></div>

      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.logo}>Leadex <span style={{ color: "#34d399" }}>B2B Engine</span></div>
        <button style={styles.btn}>Book Call</button>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.h1}>
          We Book <span style={{ color: "#34d399" }}>Qualified Meetings</span>
        </h1>

        <p style={styles.p}>
          High-performance B2B appointment setting agency helping companies scale fast.
        </p>

        <div style={styles.row}>
          <button style={styles.primary}>Book Strategy Call</button>
          <button style={styles.secondary}>Learn More</button>
        </div>
      </div>

      {/* STATS */}
      <div style={styles.grid}>
        {stats.map((s, i) => (
          <div key={i} style={{ ...styles.card, animationDelay: `${i * 0.1}s` }}>
            <div style={styles.stat}>{s.v}</div>
            <div style={styles.small}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={styles.section}>
        <h2>Core Services</h2>
        <div style={styles.grid2}>
          {services.map((s, i) => (
            <div key={i} style={{ ...styles.card, animationDelay: `${i * 0.08}s` }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={styles.section}>
        <h2>Industries</h2>
        <div style={styles.wrap}>
          {industries.map((i, idx) => (
            <span key={idx} style={styles.tag}>{i}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2>Ready to scale your pipeline?</h2>
        <button style={styles.primary}>Book Strategy Call</button>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>© {new Date().getFullYear()} Leadex</div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatGlow {
          0% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-20px); opacity: 0.7; }
          100% { transform: translateY(0px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    background: "#070b14",
    color: "white",
    fontFamily: "Arial",
    minHeight: "100vh",
    padding: 20,
    overflowX: "hidden"
  },

  glow: {
    position: "fixed",
    top: "20%",
    left: "50%",
    width: 300,
    height: 300,
    background: "radial-gradient(circle, #34d39955, transparent 70%)",
    filter: "blur(40px)",
    animation: "floatGlow 6s ease-in-out infinite",
    zIndex: 0,
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    position: "relative",
    zIndex: 2,
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold"
  },

  btn: {
    background: "#34d399",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },

  hero: {
    textAlign: "center",
    marginTop: 60,
    animation: "fadeUp 0.8s ease-out"
  },

  h1: {
    fontSize: 40,
    marginBottom: 10
  },

  p: {
    color: "rgba(255,255,255,0.7)",
    maxWidth: 500,
    margin: "0 auto"
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    flexWrap: "wrap"
  },

  primary: {
    background: "#34d399",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },

  secondary: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "10px 16px",
    borderRadius: 10,
    color: "white",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: 10,
    marginTop: 40,
    position: "relative",
    zIndex: 2
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 10
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    padding: 15,
    borderRadius: 16,
    animation: "fadeUp 0.6s ease-out forwards",
    opacity: 0,
    transition: "0.3s",
  },

  stat: {
    color: "#34d399",
    fontSize: 20,
    fontWeight: "bold"
  },

  small: {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)"
  },

  section: {
    marginTop: 40,
    position: "relative",
    zIndex: 2
  },

  wrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },

  tag: {
    background: "rgba(255,255,255,0.06)",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 12,
    transition: "0.3s"
  },

  cta: {
    marginTop: 50,
    textAlign: "center",
    position: "relative",
    zIndex: 2
  },

  footer: {
    marginTop: 50,
    textAlign: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: 12,
    position: "relative",
    zIndex: 2
  }
};      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.logo}>
          Leadex <span style={{ color: "#34d399", fontSize: 12 }}>B2B Engine</span>
        </div>

        <button style={styles.button}>
          Book Call
        </button>
      </div>

      {/* HERO */}
      <div style={{ ...styles.hero, ...fadeIn }}>
        <h1 style={styles.h1}>
          We Book <span style={{ color: "#34d399" }}>Qualified B2B Meetings</span>
        </h1>

        <p style={styles.p}>
          Offshore B2B appointment setting agency helping companies scale pipeline fast.
        </p>

        <div style={styles.row}>
          <button style={styles.primary}>Book Strategy Call</button>
          <button style={styles.secondary}>Learn More</button>
        </div>
      </div>

      {/* STATS */}
      <div style={styles.grid4}>
        {stats.map((s, i) => (
          <div key={i} style={box}>
            <div style={styles.stat}>{s.v}</div>
            <div style={styles.small}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Core Services</h2>
        <div style={styles.grid3}>
          {services.map((s, i) => (
            <div key={i} style={box}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Industries</h2>
        <div style={styles.wrap}>
          {industries.map((i, idx) => (
            <span key={idx} style={styles.tag}>{i}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2>Ready to scale your pipeline?</h2>
        <button style={styles.primary}>Book Strategy Call</button>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Leadex
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    background: "#070b14",
    color: "white",
    fontFamily: "Arial",
    minHeight: "100vh",
    padding: 20
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    background: "#34d399",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  },
  hero: {
    padding: "50px 0",
    textAlign: "center"
  },
  h1: {
    fontSize: 38,
    marginBottom: 10
  },
  p: {
    color: "rgba(255,255,255,0.7)",
    maxWidth: 500,
    margin: "0 auto"
  },
  row: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    marginTop: 20,
    flexWrap: "wrap"
  },
  primary: {
    background: "#34d399",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer"
  },
  secondary: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "10px 16px",
    borderRadius: 10,
    color: "white",
    cursor: "pointer"
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 10,
    marginTop: 20
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 10
  },
  section: {
    marginTop: 40
  },
  h2: {
    marginBottom: 15
  },
  stat: {
    color: "#34d399",
    fontSize: 20,
    fontWeight: "bold"
  },
  small: {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)"
  },
  wrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  tag: {
    background: "rgba(255,255,255,0.06)",
    padding: "6px 10px",
    borderRadius: 8,
    fontSize: 12
  },
  cta: {
    marginTop: 50,
    textAlign: "center"
  },
  footer: {
    marginTop: 50,
    textAlign: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: 12
  }
};
