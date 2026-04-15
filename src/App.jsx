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
      d: "We conduct structured B2B telesales outreach to decision-makers and book high-quality meetings.",
    },
    {
      t: "4. Meeting Coordination & Briefing",
      d: "We send calendar invites and provide full pre-meeting briefing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#070b14]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-wide">
            Leadex
            <span className="text-emerald-400 text-sm font-normal ml-2">
              B2B Growth Engine
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#services">Services</a>
            <a href="#proof">Results</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
          </nav>

          <button className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold">
            Book Call
          </button>
        </div>
      </header>

      <section className="relative px-6 py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-emerald-400 tracking-[0.3em] uppercase text-xs mb-4">
              Offshore B2B Sales Engine
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We Book Qualified B2B Meetings for Your Sales Team
            </h1>

            <p className="text-white/70 text-lg leading-8 mb-8">
              Leadex is a performance-driven appointment setting agency helping companies scale their B2B pipeline with trained offshore callers based in Egypt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-2xl bg-emerald-500 text-black font-semibold">
                Book a Strategy Call
              </button>
              <button className="px-6 py-3 rounded-2xl border border-white/15">
                See How It Works
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <p className="text-emerald-400 text-2xl font-bold">{s.value}</p>
                  <p className="text-white/60 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/60">
                Designed for organisations seeking high-quality, sales-ready appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-emerald-400 font-semibold text-lg mb-3">{s}</h3>
                <p className="text-white/60 text-sm">
                  Structured outbound campaigns designed to reach decision-makers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Industries We Work With</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.t} className="p-6 rounded-3xl bg-black/20 border border-white/10">
                <h3 className="font-semibold text-emerald-400 mb-3">{p.t}</h3>
                <p className="text-white/60 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build a predictable pipeline?
          </h2>
          <p className="text-white/60 mb-8">
            Let’s launch your outbound system and start booking qualified B2B meetings.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-emerald-500 text-black font-semibold">
            Book Strategy Call
          </button>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Leadex — B2B Appointment Setting Agency
      </footer>
    </div>
  );
}
