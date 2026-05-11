import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import { Target, Lightbulb, Globe, Zap, Layers, Brain, Leaf } from "lucide-react";

export default function VisionMissionPage() {
  const pillars = [
    {
      number: "01",
      icon: Globe,
      title: "Global Resource Network",
      desc: "Build diversified sourcing partnerships across Asia, Africa, CIS, Europe, and emerging mineral economies.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Critical Minerals Leadership",
      desc: "Expand into high-growth minerals supporting energy storage, EV ecosystem, semiconductor supply chains, AI infrastructure, and advanced ceramics and refractories.",
    },
    {
      number: "03",
      icon: Layers,
      title: "Integrated Industrial Ecosystem",
      desc: "Create synergy between minerals, energy, infrastructure, and technology-focused businesses within the Mineralia Group.",
    },
    {
      number: "04",
      icon: Brain,
      title: "Technology & Intelligence Driven Trading",
      desc: "Develop AI-driven market intelligence, supply chain optimization, and predictive trading systems for global mineral markets.",
    },
    {
      number: "05",
      icon: Leaf,
      title: "Sustainable & Responsible Growth",
      desc: "Promote ethical sourcing, long-term partnerships, and environmentally conscious industrial development.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Vision &amp; Mission
          </h1>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link href="/about" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Overview</Link>
            <Link href="/about/chairman-message" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Chairman&apos;s Message</Link>
            <Link href="/about/vision" className="text-accent-terra font-bold border-b-2 border-accent-terra pb-1">Vision &amp; Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Statements */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p className="text-center text-sm font-semibold text-accent-terra uppercase tracking-widest mb-12">
            Mineralia Impex Pvt. Ltd.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-12 rounded-sm border-t-8 border-accent-ochre shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-accent-ochre mb-8">
                <Lightbulb size={32} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Vision Statement</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To become a globally trusted industrial and critical minerals platform powering the future of manufacturing, infrastructure, energy transition, and advanced technologies through sustainable sourcing, strategic partnerships, and intelligent global supply chains.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-12 rounded-sm border-t-8 border-accent-terra shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-accent-terra mb-8">
                <Target size={32} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Mission Statement</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our mission is to deliver reliable, sustainable, and globally competitive mineral and raw material solutions by combining:
              </p>
              <ul className="space-y-3 text-text-secondary">
                {[
                  "Strategic global sourcing",
                  "Deep industry expertise",
                  "Strong logistics and supply chain capabilities",
                  "Long-term customer relationships",
                  "Continuous market expansion and innovation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-terra flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-text-secondary leading-relaxed">
                We are committed to supporting industries including ceramics, refractories, steel, energy storage, infrastructure, and advanced manufacturing while creating long-term value for our customers, partners, employees, and stakeholders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-8 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Corporate Philosophy</p>
          <blockquote className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            "From Earth's Resources to <span className="text-accent-ochre">Future Life</span>"
          </blockquote>
        </div>
      </section>

      {/* Strategic Vision Pillars */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-4">
              Strategic Long-Term Vision Pillars
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The five pillars that define how Mineralia will grow and lead in the global minerals landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="bg-surface rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl font-bold text-slate-200 leading-none">{pillar.number}</span>
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-accent-terra">
                    <pillar.icon size={20} />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-dark">{pillar.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
