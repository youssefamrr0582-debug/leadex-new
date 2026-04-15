export default function App() {
  const services = [
    {
      t: "B2B Appointment Setting (Any Industry)",
      d: "We run structured outbound campaigns to reach decision-makers and deliver sales-ready appointments.",
    },
    {
      t: "Cold Calling & Lead Qualification",
      d: "We qualify prospects and connect you directly with high-intent buyers.",
    },
    {
      t: "High-Quality Lead Generation",
      d: "We generate verified B2B leads aligned with your ICP.",
    },
    {
      t: "Decision-Maker Outreach",
      d: "Direct outreach to CEOs, Managers, and key stakeholders.",
    },
    {
      t: "Pipeline & Revenue Support",
      d: "We help fill your pipeline with consistent opportunities.",
    },
    {
      t: "Dedicated Offshore Sales Teams",
      d: "Trained agents working as an extension of your business.",
    },
  ];

  const stats = [
    { v: "10K+", l: "Calls Monthly" },
    { v: "100%", l: "AUS Market Focus" },
    { v: "High", l: "Intent Appointments" },
    { v: "<1 min", l: "Response Time" },
  ];

  const industries = [
    "Telecommunications",
    "Cloud Solutions",
    "Cybersecurity",
    "SaaS",
    "Managed IT Services",
    "Business Mobility",
    "Commercial Cleaning",
    "Solar Energy",
    "Warehousing & Logistics",
    "Any B2B Industry",
  ];

  const process = [
    {
      t: "1. Setup & Strategy",
      d: "We define ICP, targeting, and outreach strategy aligned with your goals.",
    },
    {
      t: "2. Training & Campaign Prep",
      d: "We train agents, build scripts, and configure systems.",
    },
    {
      t: "3. Outbound Execution",
      d: "We call, qualify, and book meetings with decision-makers.",
    },
    {
      t: "4. Delivery & Reporting",
      d: "You receive qualified meetings + insights + full reporting.",
    },
  ];

  return (
    <div style={styles.page}>

      {/* BACKGROUND GLOW */}
      <div style={styles.glow}></div>

      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.logo}>
          Leadex <span style={{ color: "#34d399", fontSize: 12 }}>B2B Growth Engine</span>
        </div>

        <div style={styles.navLinks}>
          <span>Services</span>
          <span>Results</span>
          <span>Industries</span>
          <span>Process</span>
        </div>

        <button style={styles.btn}>Book Call</button>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.h1}>
          We Book <span style={{ color: "#34d399" }}>Qualified B2B Meetings</span> for Your Sales Team
        </h1>

        <p style={styles.p}>
          Leadex is a performance-driven appointment setting agency helping companies scale their B2B pipeline with trained offshore callers based in Egypt.
        </p>

        <div style={styles.row}>
          <button style={styles.primary}>Book Strategy Call</button>
          <button style={styles.secondary}>See How It Works</button>
        </div>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        {stats.map((s, i) => (
          <div key={i} style={{ ...styles.card, animationDelay: `${i * 0.1}s` }}>
            <div style={styles.stat}>{s.v}</div>
            <div style={styles.small}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <div style={styles.section}>
        <p style={styles.desc}>
          Designed for organisations seeking to scale their sales pipeline through targeted B2B outreach campaigns and consistently deliver high-quality, sales-ready appointments.
        </p>
      </div>

      {/* SERVICES */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Core Services</h2>

        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.serviceTitle}>{s.t}</div>
              <div style={styles.small}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={styles.section}>
        <h2 style={styles.h2}>Industries We Work With</h2>
        <div style={styles.wrap}>
          {industries.map((i, idx) => (
            <span key={idx} style={styles.tag}>{i}</span>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div style={styles.section}>
        <h2 style={styles.h2}>How It Works</h2>

        <div style={styles.grid4}>
          {process.map((p, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.serviceTitle}>{p.t}</div>
              <div style={styles.small}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to build a predictable pipeline?</h2>
        <p style={styles.small}>
          Let’s launch your outbound system and start booking qualified B2B meetings.
        </p>

        <button style={styles.primary}>Book Strategy Call</button>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Leadex — B2B Appointment Setting Agency
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowMove {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
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
    filter: "blur(50px)",
    animation: "glowMove 6s ease-in-out infinite",
    zIndex: 0,
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  navLinks: {
    display: "flex",
    gap: 15,
    fontSize: 12,
    color: "rgba(255,255,255,0.7)"
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold"
  },

  btn: {
    background: "#34d399",
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer"
  },

  hero: {
    textAlign: "center",
    marginTop: 60,
    animation: "fadeUp 0.8s ease-out",
    position: "relative",
    zIndex: 2
  },

  h1: {
    fontSize: 42,
    marginBottom: 10
  },

  p: {
    maxWidth: 600,
    margin: "0 auto",
    color: "rgba(255,255,255,0.7)"
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
    padding: "12px 16px",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer"
  },

  secondary: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "12px 16px",
    borderRadius: 10,
    color: "white"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 10,
    marginTop: 40,
    position: "relative",
    zIndex: 2
  },

  section: {
    marginTop: 50,
    position: "relative",
    zIndex: 2
  },

  h2: {
    marginBottom: 15
  },

  desc: {
    color: "rgba(255,255,255,0.6)",
    maxWidth: 800
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 10
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    padding: 15,
    borderRadius: 16,
    animation: "fadeUp 0.6s ease-out forwards",
  },

  serviceTitle: {
    fontWeight: "bold",
    marginBottom: 5
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
    marginTop: 60,
    textAlign: "center",
    position: "relative",
    zIndex: 2
  },

  ctaTitle: {
    fontSize: 24
  },

  footer: {
    marginTop: 50,
    textAlign: "center",
    color: "rgba(255,255,255,0.4)",
    fontSize: 12
  }
};
