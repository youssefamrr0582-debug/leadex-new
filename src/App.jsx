import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function App() {
  const services = [
    "B2B Appointment Setting",
    "Cold Calling & Lead Qualification",
    "High-Intent Lead Generation",
    "Decision Maker Outreach",
    "Sales Pipeline Building",
    "Dedicated SDR Teams",
  ];

  const industries = [
    "Telecommunications",
    "Cloud Solutions",
    "Cybersecurity",
    "Data Connectivity",
    "IT Services",
    "Commercial Cleaning",
    "Electricity & Solar",
    "Warehousing & Logistics",
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-black">

      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">
          Lead<span className="text-orange-500">EX</span>
        </h1>

        <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
          High-quality B2B lead generation & appointment setting for the Australian market.
        </p>

        <div className="mt-8">
          <a
            href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
            className="bg-orange-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-semibold text-center">Services</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <CheckCircle className="text-orange-500 mb-2" />
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center">Industries</h2>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {industries.map((ind, i) => (
            <span key={i} className="px-4 py-2 bg-[#f7f4ee] rounded-full text-sm">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center bg-black text-white">
        <h2 className="text-3xl font-semibold">Contact Us</h2>

        <a
          href="mailto:info@lea-dex.com?subject=LeadEX Inquiry"
          className="mt-6 inline-flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-full"
        >
          <Mail size={18} /> Send Email
        </a>
      </section>

    </div>
  );
}
