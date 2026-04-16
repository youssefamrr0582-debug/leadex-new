export default function App() {
  return (
    <div style={{ fontFamily: "Arial", background: "#0b0b0f", color: "white" }}>

      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center", background: "linear-gradient(135deg,#111,#1a1a1a)" }}>
        <h1 style={{ fontSize: 56, marginBottom: 20 }}>
          Done-For-You <span style={{ color: "orange" }}>Appointment Setting</span>
        </h1>

        <p style={{ maxWidth: 750, margin: "auto", color: "#ccc", fontSize: 18 }}>
          We book high-quality sales meetings directly with decision-makers in your target market.
          No cold leads. No wasted time. Only qualified opportunities.
        </p>

        <a
          href="mailto:info@lea-dex.com?subject=Appointment Setting Inquiry"
          style={{
            display: "inline-block",
            marginTop: 30,
            background: "orange",
            color: "#111",
            padding: "14px 32px",
            borderRadius: 30,
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Book a Call
        </a>
      </section>

      {/* VALUE STRIP */}
      <section style={{ padding: 60, textAlign: "center", background: "#111" }}>
        <h2>What You Get</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, marginTop: 30 }}>
          {[
            "Qualified Sales Meetings",
            "Decision Makers Only",
            "B2B Targeted Outreach",
            "Fully Managed SDR System",
            "Scalable Pipeline Growth",
          ].map((item, i) => (
            <div key={i} style={{ background: "#1a1a1a", padding: 20, borderRadius: 12, minWidth: 200 }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: 70, background: "#0b0b0f" }}>
        <h2 style={{ textAlign: "center" }}>How It Works</h2>

        <div style={{ maxWidth: 800, margin: "40px auto" }}>
          {[
            { t: "Define ICP", d: "We identify your ideal customer profile in detail." },
            { t: "Build Prospect List", d: "We source verified decision-makers in your niche." },
            { t: "Multi-Channel Outreach", d: "Email, LinkedIn, and cold calling campaigns." },
            { t: "Qualification", d: "We filter only high-intent leads." },
            { t: "Booked Meetings", d: "You receive ready-to-close appointments." },
          ].map((step, i) => (
            <div key={i} style={{ marginBottom: 20, padding: 20, background: "#111", borderRadius: 12 }}>
              <b style={{ color: "orange" }}>{i + 1}. {step.t}</b>
              <div style={{ color: "#ccc", marginTop: 5 }}>{step.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 80, textAlign: "center", background: "linear-gradient(135deg,#111,#1a1a1a)" }}>
        <h2>Ready to Scale Your Sales Pipeline?</h2>
        <p style={{ color: "#ccc", maxWidth: 600, margin: "20px auto" }}>
          Get consistent meetings with qualified buyers in your industry starting this month.
        </p>

        <a
          href="mailto:info@lea-dex.com?subject=Let’s Get Started"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "orange",
            color: "#111",
            padding: "14px 32px",
            borderRadius: 30,
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Get Started
        </a>
      </section>

    </div>
  );
}
