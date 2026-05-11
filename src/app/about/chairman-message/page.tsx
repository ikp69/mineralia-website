import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function ChairmanMessagePage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Chairman's Message
          </h1>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link href="/about" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Overview</Link>
            <Link href="/about/chairman-message" className="text-accent-terra font-bold border-b-2 border-accent-terra pb-1">Chairman's Message</Link>
            <Link href="/about/vision" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white border border-slate-200 shadow-xl rounded-sm p-8 md:p-16 lg:p-20 relative">
            
            {/* Watermark / Logo mark */}
            <div className="absolute top-10 right-10 text-slate-100 font-serif text-8xl md:text-9xl font-bold opacity-50 select-none pointer-events-none">
              M
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative w-48 h-48 md:w-full md:aspect-[3/4] md:h-auto rounded-sm overflow-hidden mb-6 shadow-md filter grayscale-[30%]">
                  <Image
                    src="/images/minerals/zircon-sand.png"
                    alt="Varun Tyagi - Chairman"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-1">Varun Tyagi</h3>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Chairman</p>
                <Link
                  href="/contact"
                  className="hidden md:inline-flex text-accent-terra hover:text-primary-dark text-sm font-medium transition-colors"
                >
                  Contact Executive Office →
                </Link>
              </div>

              <div className="md:col-span-8 prose prose-lg md:prose-xl max-w-none text-text-secondary leading-relaxed font-sans font-light">
                <h2 className="font-serif text-3xl font-bold text-primary-dark mb-8 mt-0">
                  Mineralia Impex Pvt. Ltd.
                </h2>

                <p>Dear Partners, Clients, and Industry Colleagues,</p>

                <p>
                  It gives me immense pride to share the journey and vision of Mineralia Impex Pvt. Ltd.
                </p>

                <p>
                  Mineralia was founded with a simple yet powerful mission — to build a reliable and globally connected industrial minerals platform capable of supporting the evolving needs of modern industries. What began as a focused mineral trading initiative has gradually transformed into an international sourcing and supply network serving industries across multiple countries and sectors.
                </p>

                <p>
                  Our journey has been built on trust, long-term relationships, market understanding, and the belief that sustainable growth comes from creating real value for partners and customers.
                </p>

                <p>
                  Over the years, we have witnessed tremendous changes in global industry dynamics. Minerals and raw materials are no longer viewed merely as commodities; they have become <strong>strategic assets</strong> driving the future of infrastructure, energy storage, advanced manufacturing, ceramics, steel, refractories, electronics, and clean technologies.
                </p>

                <p>At Mineralia, we see this transformation as an opportunity to evolve continuously.</p>

                <p>Today, our vision extends far beyond conventional trading. We are focused on building a future-ready industrial ecosystem by strengthening our presence in:</p>

                <ul>
                  <li>Critical minerals</li>
                  <li>Industrial and refractory raw materials</li>
                  <li>Ceramic minerals and additives</li>
                  <li>Advanced material supply chains</li>
                  <li>Energy-transition minerals</li>
                  <li>Global sourcing and logistics networks</li>
                </ul>

                <p>
                  As the world moves toward electrification, AI infrastructure, renewable energy, and industrial modernization, the importance of resilient and diversified supply chains will continue to grow. Mineralia aims to play a meaningful role in this global transition by connecting markets, resources, and industries efficiently and responsibly.
                </p>

                <blockquote className="border-l-4 border-accent-terra pl-6 my-8 italic text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-sm">
                  "The future belongs to organizations that combine knowledge, global connectivity, operational agility, and strategic vision."
                </blockquote>

                <p>
                  What truly defines our organization is our entrepreneurial mindset and our willingness to think long-term. We continuously explore new markets, emerging technologies, strategic partnerships, and future industries to ensure that our company remains adaptable, relevant, and growth-oriented.
                </p>

                <p>
                  I sincerely thank our clients, suppliers, associates, and team members for being part of this journey. Your trust and support inspire us to continue building stronger global relationships and pursuing larger ambitions together.
                </p>

                <p>
                  At Mineralia, we are committed to building that future.
                </p>

                <p className="mt-4 text-slate-700">Warm Regards,</p>

                <div className="mt-6">
                  <span className="font-serif text-4xl block font-bold text-primary-dark italic opacity-80 pb-2">Varun Tyagi</span>
                  <div className="h-0.5 w-16 bg-accent-terra mt-2 mb-3"></div>
                  <p className="text-sm text-slate-500 font-medium">Chairman, Mineralia Impex Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
