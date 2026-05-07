import { CheckCircle2, Award, TrendingUp, Shield, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

export function About() {
  const credentials = [
    "Former SUNYAC collegiate athlete (St. John Fisher University)",
    "5+ years specialized shooting coach experience",
    "NCCP Level 2 Certified Coach",
    "Featured shooting coach in Ontario Basketball Magazine (March 2025)",
    "Trained shooters now playing NCAA D1, D2, and U Sports",
  ];

  const certifications = [
    {
      icon: Shield,
      title: "Police Check",
      description: "Current vulnerable sector screening on file",
    },
    {
      icon: Award,
      title: "Liability Insurance",
      description: "$2M coverage through Sport Alliance",
    },
    {
      icon: CheckCircle2,
      title: "NCCP Certified",
      description: "National Coaching Certification Program Level 2",
    },
    {
      icon: TrendingUp,
      title: "First Aid Certified",
      description: "Current CPR-C and Standard First Aid",
    },
  ];

  const quickStats = [
    { number: "500+", label: "Athletes Trained" },
    { number: "12", label: "College Commits" },
    { number: "85%", label: "Rep Advancement" },
    { number: "5+", label: "Years Coaching" },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-12 pb-10 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            The Coach
          </div>
          <h1 className="font-black leading-none tracking-tight">
            <span className="block text-6xl md:text-8xl">MEET</span>
            <span className="block text-6xl md:text-8xl text-orange-500">NICK</span>
            <span className="block text-4xl md:text-5xl text-zinc-500 mt-1">SHACKELL</span>
          </h1>
        </div>
      </section>

      {/* ── PHOTO MOSAIC ── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Row 1: Featured committed graphic (2/3) + two portrait shots (1/3) */}
          <div className="grid grid-cols-3 gap-3" style={{ height: "560px" }}>
            {/* Featured: committed graphic */}
            <div className="col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/photos/about-4.jpg"
                alt="Nick Shackell committed to St. John Fisher University"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                  Committed
                </span>
                <p className="text-white font-bold text-lg leading-tight">
                  St. John Fisher University
                </p>
                <p className="text-zinc-400 text-sm">Simcoe United Spartans → NCAA D3</p>
              </div>
            </div>

            {/* Right column: two stacked portraits */}
            <div className="grid grid-rows-2 gap-3">
              <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="/photos/about-5.jpg"
                  alt="Nick Shackell — Simcoe United Spartans #7"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold">Simcoe United #7</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src="/photos/about-6.jpg"
                  alt="Nick Shackell — ball skills"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold">Spvr #30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Three equal-width landscape photos */}
          <div className="grid grid-cols-3 gap-3" style={{ height: "280px" }}>
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/photos/about-1.jpg"
                alt="Nick Shackell — game action #11"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-orange-400 text-[10px] font-bold tracking-widest uppercase block mb-0.5">SUNYAC</span>
                <span className="text-white text-xs font-bold">#11 — Game Action</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/photos/about-2.jpg"
                alt="St. John Fisher University home court"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-orange-400 text-[10px] font-bold tracking-widest uppercase block mb-0.5">Home Court</span>
                <span className="text-white text-xs font-bold">St. John Fisher University</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src="/photos/about-3.jpg"
                alt="Home of the Cardinals training facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background = "#18181b";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-orange-400 text-[10px] font-bold tracking-widest uppercase block mb-0.5">Training Facility</span>
                <span className="text-white text-xs font-bold">Cardinals — Practice Court</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                The Story
              </div>
              <h2 className="text-4xl font-black mb-8 leading-none">WHO IS NICK?</h2>
              <div className="border-l-2 border-orange-600 pl-8 space-y-5">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  I'm not here to waste your time or your money. I played at St. John Fisher University in the SUNYAC, trained under some of the best shooting coaches in Canada, and spent the last 5 years developing a shooting system that actually works.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  I've trained over 500 athletes, helped 12 players commit to college programs, and worked with teams across the AAU and OBA circuits. My focus is simple: make you a legitimate threat from anywhere on the court.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  This isn't a side hustle. This is what I do. Every session is filmed, analyzed, and tracked. You'll see measurable improvement in your shot, or we'll talk about what needs to change.
                </p>
              </div>
            </div>

            {/* Quick stats sidebar */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8 mb-8">
                {quickStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-orange-500 leading-none mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <MapPin size={14} className="text-orange-500 flex-shrink-0" />
                  Ontario, Canada
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <Award size={14} className="text-orange-500 flex-shrink-0" />
                  NCCP Level 2 Certified
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <Shield size={14} className="text-orange-500 flex-shrink-0" />
                  Police Checked & Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="py-20 bg-zinc-900/40 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Resume
          </div>
          <h2 className="text-4xl font-black mb-12 leading-none">
            CREDENTIALS THAT MATTER
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {credentials.map((credential, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-600/40 p-6 transition-all duration-200"
              >
                <div className="w-8 h-8 bg-orange-600/15 group-hover:bg-orange-600/25 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                  <CheckCircle2 className="text-orange-500" size={15} />
                </div>
                <span className="text-zinc-200 leading-relaxed">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Due Diligence
            </div>
            <h2 className="text-4xl font-black mb-4 leading-none">
              SAFETY & CERTIFICATION
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              Most trainers skip this part. We don't. Your child's safety comes first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div
                  key={i}
                  className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center hover:border-orange-600/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-orange-600/10 group-hover:bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM LINE ── */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">
            THE BOTTOM LINE
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            I work with competitive athletes who are serious about getting better. If your kid plays rep or AAU and wants an edge, I can help. I bring the system, the experience, and the track record — you bring the commitment.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-7 text-base font-bold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/30"
            >
              Book Your First Session <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
