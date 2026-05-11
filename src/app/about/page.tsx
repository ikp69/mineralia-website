import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutOverviewPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center bg-mineralia-navy overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/minerals/calcined-alumina.png"
            alt="Mineralia Headquarters"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-8">
          <FadeUp>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              About Mineralia
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl leading-relaxed">
              38 years of redefining the global industrial mineral supply chain through precision, scale, and uncompromising quality.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">
            <Link href="/about" className="text-mineralia-teal font-bold border-b-2 border-mineralia-teal pb-1">Overview</Link>
            <Link href="/about/chairman-message" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Chairman's Message</Link>
            <Link href="/about/vision" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-6">Our Story</h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  In 2010, Mineralia Impex Pvt. Ltd. was founded by Varun Tyagi — under the guidance of a family deeply connected with the minerals and mining industry since 1987. The vision was never just to trade minerals. It was to build a global industrial resource platform.
                </p>
                <p>
                  From India, Mineralia began connecting manufacturers, ceramic industries, refractory plants, steel companies, and industrial buyers with reliable sources of raw materials across multiple countries. What started as a focused mineral trading operation gradually evolved into a globally connected sourcing and supply network spanning Asia, Africa, CIS countries, Europe, and beyond.
                </p>
                <p>
                  The real turning point came when the world itself started changing. As industries moved toward electric mobility, renewable energy, semiconductor ecosystems, advanced ceramics, energy storage, AI infrastructure, and strategic mineral security — Mineralia recognised that minerals were no longer just commodities. <span className="font-semibold text-mineralia-navy">They were becoming geopolitical assets.</span>
                </p>
                <p>
                  That realisation transformed Mineralia's vision from a traditional mineral business into a future-focused global materials platform — positioning itself at the intersection of industrial growth, critical mineral security, advanced manufacturing, clean energy, and next-generation infrastructure.
                </p>
                <p>
                  What makes this story unique is that Mineralia was never built through massive funding or hype. It was built through market understanding, international relationships, industry experience, persistence, and the ability to identify opportunities before they become mainstream.
                </p>
              </div>

              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-mineralia-teal rounded-r-lg">
                <p className="text-slate-700 italic text-base leading-relaxed">
                  "The future will belong to companies that control knowledge, supply chains, energy, and critical resources together."
                </p>
                <p className="mt-3 text-sm font-semibold text-mineralia-navy">— Varun Tyagi, Founder</p>
              </div>

              <Link
                href="/about/chairman-message"
                className="mt-8 inline-flex items-center gap-2 text-mineralia-teal font-medium hover:text-mineralia-teal-hover transition-colors"
              >
                Read the Chairman's Message
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <div className="relative h-[380px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/minerals/feldspar.png"
                  alt="Mineralia Processing Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <p className="text-3xl font-bold text-mineralia-teal mb-1">2010</p>
                  <p className="text-sm text-slate-600">Founded with a global vision</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <p className="text-3xl font-bold text-mineralia-teal mb-1">1987</p>
                  <p className="text-sm text-slate-600">Family legacy in minerals &amp; mining</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <p className="text-3xl font-bold text-mineralia-teal mb-1">40+</p>
                  <p className="text-sm text-slate-600">Countries in our supply network</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <p className="text-3xl font-bold text-mineralia-teal mb-1">6+</p>
                  <p className="text-sm text-slate-600">Mineral categories served globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The foundational principles that guide every metric ton we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Uncompromising Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Every shipment is tested to stringent ISO standards. We deliver chemistry, not just rocks.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <Globe size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Global Resilience</h3>
              <p className="text-slate-600 leading-relaxed">
                A multi-origin sourcing strategy completely eliminates single-point-of-failure risks.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <Users size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Partnership Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                We view our clients as long-term partners, aligning our supply networks with their production goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
