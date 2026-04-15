export default function App() {
  const services = [
    "B2B Appointment Setting (Any Industry)",
    "Cold Calling & Lead Qualification",
    "High-Quality Lead Generation",
    "Decision-Maker Outreach",
    "Pipeline & Revenue Support",
    "Dedicated Offshore Sales Teams",
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

  const stats = [
    { label: "Calls Monthly", value: "10K+" },
    { label: "AUS Market Focus", value: "100%" },
    { label: "Appointment Driven", value: "High Intent" },
    { label: "Response Time", value: "< 1 min follow-up" },
  ];

  const process = [
    {
      t: "1. Setup & Strategy",
      d: "We define your ICP, offer, targeting criteria, and ideal decision-makers in alignment with your sales objectives.",
    },
    {
      t: "2. Training & Campaign Preparation",
      d: "We train dedicated outbound agents, build tailored scripts, configure dialer systems, and prepare campaign workflows.",
    },
    {
      t: "3. Outbound Execution & Appointment Booking",
      d: "We conduct structured B2B outreach to decision-makers and book high-quality meetings.",
    },
    {
      t: "4. Meeting Coordination & Pre-Meeting Briefing",
      d: "We schedule meetings and provide full briefing with prospect insights and agenda.",
    },
  ];

  return (
    <div style={{ background: "#070b14", color: "white", fontFamily: "sans-serif" }}>
      
      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Leadex <span style={{ color: "#34d399", fontSize: "12px" }}>B2B Growth Engine</span>
        </div>
        <button style={{
          background: "#34d399",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold"
        }}>
          Book Call
        </button>
      </div>

      {/* HERO */}
      <div style={{ padding: "80px 40px" }}>
        <h1 style={{ fontSize: "50px" }}>
          We Book Qualified B2B Meetings
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px" }}>
          Leadex helps companies scale their pipeline with offshore B2B sales teams based in Egypt.
        </p>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button style={{
            background: "#34d399",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none"
          }}>
            Book Strategy Call
          </button>

          <button style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "12px 20px",
            borderRadius: "10px",
            color: "white"
          }}>
            See How It Works
          </button>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        padding: "40px"
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "15px"
          }}>
            <h2 style={{ color: "#34d399" }}>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={{ padding: "40px" }}>
        <h2>Core Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {services.map((s) => (
            <div key={s} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "15px"
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={{ padding: "40px" }}>
        <h2>Industries</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {industries.map((i) => (
            <span key={i} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "8px 12px",
              borderRadius: "10px"
            }}>
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div style={{ padding: "40px" }}>
        <h2>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          {process.map((p) => (
            <div key={p.t} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "15px"
            }}>
              <h3 style={{ color: "#34d399" }}>{p.t}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}>
        © {new Date().getFullYear()} Leadex
      </div>
    </div>
  );
}
