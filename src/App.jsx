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
      d: "We train dedicated outbound agents, build tailored scripts, configure dialer systems, and prepare campaign workflows based on your market.",
    },
    {
      t: "3. Outbound Execution & Appointment Booking",
      d: "We conduct structured B2B telesales outreach to decision-makers, qualify prospects, and book high-quality meetings on your behalf.",
    },
    {
      t: "4. Meeting Coordination & Pre-Meeting Briefing",
      d: "We schedule meetings as face-to-face, video conferences, or phone calls based on preference, send calendar invites, and provide full pre-meeting briefing including company insights, prospect context, and agenda to maximize closing probability.",
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
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#proof" className="hover:text-white">Results</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#process" className="hover:text-white">Process</a>
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
          </div>
        </div>
      </section>
    </div>
  );
}
