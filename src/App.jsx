export default function App() {
  const services = [
    "B2B Appointment Setting (Any Industry)",
    "Cold Calling & Lead Qualification",
    "High-Quality Lead Generation",
    "Decision-Maker Outreach",
    "Pipeline & Revenue Support",
    "Dedicated Offshore Sales Teams",
  ];

  const stats = [
    { label: "Calls Monthly", value: "10K+" },
    { label: "AUS Market Focus", value: "100%" },
    { label: "Appointment Driven", value: "High Intent" },
    { label: "Response Time", value: "< 1 min" },
  ];

  const industries = [
    "Telecom", "Cloud", "Cybersecurity", "SaaS",
    "IT Services", "Mobility", "Logistics", "Solar"
  ];

  const process = [
    { t: "Strategy", d: "Define ICP & targeting" },
    { t: "Training", d: "Build scripts & agents" },
    { t: "Execution", d: "Outbound & booking calls" },
    { t: "Delivery", d: "Qualified meetings + insights" },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#070b14]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-lg font-bold tracking-wide animate-pulse">
            Leadex <span className="text-emerald-400 text-xs">B2B Engine</span>
          </div>

          <button className="bg-emerald-500 text-black px-3 py-2 rounded-xl text-sm hover:scale-105 transition">
            Book Call
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight animate-fade-in">
          We Book <span className="text-emerald-400">Qualified B2B Meetings</span>
        </h1>

        <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm md:text-base">
          Offshore appointment setting agency helping companies scale their sales pipeline.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-emerald-500 text-black px-5 py-3 rounded-xl hover:scale-105 transition">
            Book Strategy Call
          </button>
          <button className="border border-white/20 px-5 py-3 rounded-xl hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 mt-10">
        {stats.map((s) => (
          <div key={s.label}
            className="bg-white/5 p-4 rounded-2xl text-center hover:scale-105 transition">
            <div className="text-emerald-400 font-bold">{s.value}</div>
            <div className="text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="px-4 mt-12">
        <h2 className="text-xl font-bold mb-4">Core Services</h2>

        <div className="grid md:grid-cols-3 gap-3">
          {services.map((s) => (
            <div key={s}
              className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition hover:scale-[1.02]">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-4 mt-12">
        <h2 className="text-xl font-bold mb-4">Industries</h2>

        <div className="flex flex-wrap gap-2">
          {industries.map((i) => (
            <span key={i}
              className="px-3 py-1 bg-white/5 rounded-xl text-xs hover:bg-white/10 transition">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 mt-12">
        <h2 className="text-xl font-bold mb-4">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-3">
          {process.map((p, index) => (
            <div key={p.t}
              className="p-4 rounded-2xl bg-white/5 hover:scale-105 transition"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-emerald-400 font-bold">{p.t}</div>
              <div className="text-xs text-white/60 mt-2">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-2xl font-bold">
          Ready to scale your pipeline?
        </h2>

        <button className="mt-4 bg-emerald-500 text-black px-6 py-3 rounded-xl hover:scale-105 transition">
          Book Strategy Call
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/40 text-xs mt-16 pb-10">
        © {new Date().getFullYear()} Leadex
      </footer>

      {/* SIMPLE ANIMATION STYLE */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
