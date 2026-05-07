import { Link } from "react-router";
import { ArrowRight, Trophy, Target, Users, Award, Star, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  const stats: { number: string; label: string }[] = [];

  const features = [
    {
      number: "01",
      icon: Trophy,
      title: "Proven Track Record",
      description:
        "12 college commits, 85% rep team advancement rate, and featured in Ontario Basketball Magazine.",
    },
    {
      number: "02",
      icon: Target,
      title: "Shooting Specialist",
      description:
        "Elite shooting development focused on form, mechanics, range, and game-speed consistency. See real improvement in your %.",
    },
    {
      number: "03",
      icon: Award,
      title: "Fully Certified",
      description:
        "Police-checked, liability insured, NCCP certified. Your child's safety is non-negotiable.",
    },
    {
      number: "04",
      icon: Users,
      title: "Small Groups Only",
      description:
        "Maximum 4 athletes per group session. Every player gets individual attention and feedback.",
    },
  ];

  const testimonials = [
    {
      quote:
        "My son's confidence and shooting percentage improved dramatically in just 8 weeks.",
      author: "Sarah M.",
      role: "Parent, U15 AAU Player",
      initial: "S",
    },
    {
      quote:
        "Best investment we made for his basketball development. He made the rep team this year.",
      author: "David K.",
      role: "Parent, U13 Rep Player",
      initial: "D",
    },
    {
      quote:
        "The technical breakdown of my shot mechanics was exactly what I needed. Game changer.",
      author: "Marcus T.",
      role: "U16 AAU Guard",
      initial: "M",
    },
  ];

  const galleryImages = [
    { src: "/photos/gallery-4.jpg", label: "Group Sessions", span: "row-span-2" },
    { src: "/photos/gallery-1.jpg", label: "1:1 Training", span: "" },
    { src: "/photos/gallery-6.jpg", label: "Court Work", span: "" },
    { src: "/photos/gallery-3.jpg", label: "Off-Season Grind", span: "" },
    { src: "/photos/gallery-5.jpg", label: "Game Speed Drills", span: "" },
  ];

  return (
    <div className="bg-zinc-950">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/photos/gallery-6.jpg'), url('https://images.unsplash.com/photo-1770337591345-f055eac4d9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-600/15 border border-orange-600/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">
                Now Booking Summer 2026
              </span>
            </div>

            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
              BECOME
              <br />
              <span
                className="text-orange-500"
                style={{
                  WebkitTextStroke: "0px transparent",
                }}
              >
                A SHOOTER
              </span>
            </h1>

            <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-lg">
              Elite shooting development and basketball skills training for
              competitive youth athletes in Ontario. Proven methods. Measurable
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-6 text-base font-bold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/30 w-full sm:w-auto"
                >
                  Book Your Session <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 px-8 py-6 text-base font-bold tracking-wide transition-all duration-200 w-full sm:w-auto"
                >
                  View Programs <ChevronRight className="ml-1" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/50">
              {stats.map((stat, i) => (
                <div key={i} className="py-5 px-8 text-center">
                  <div className="text-3xl md:text-4xl font-black text-orange-500 leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SHACK'S ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                The Difference
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-none">
                WHY SHACK'S?
              </h2>
            </div>
            <p className="text-zinc-400 text-lg max-w-sm lg:text-right leading-relaxed">
              Not just another basketball clinic. A specialized shooting system
              that produces results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-600/10 overflow-hidden"
                >
                  <div className="absolute top-5 right-5 text-7xl font-black text-zinc-800/70 group-hover:text-zinc-700/70 transition-colors leading-none select-none">
                    {feature.number}
                  </div>
                  <div className="relative">
                    <div className="w-11 h-11 bg-orange-600/10 group-hover:bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                      <Icon className="text-orange-500" size={20} />
                    </div>
                    <h3 className="text-base font-bold mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRAINING GALLERY ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Real Training
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-none">
              LIFE ON THE COURT
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Large tall left image */}
            <div
              className="row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900"
              style={{ minHeight: "460px" }}
            >
              <img
                src="/photos/gallery-4.jpg"
                alt="Group training session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background =
                    "#18181b";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-sm font-bold bg-orange-600/80 px-3 py-1 rounded-full">
                  Group Sessions
                </span>
              </div>
            </div>

            {/* Top-right two images */}
            {[
              { src: "/photos/gallery-1.jpg", label: "1:1 Training" },
              { src: "/photos/gallery-6.jpg", label: "Court Work" },
              { src: "/photos/gallery-3.jpg", label: "Off-Season Grind" },
              { src: "/photos/gallery-5.jpg", label: "Game Speed Drills" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.background =
                      "#18181b";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-xs font-bold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-zinc-900/40 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Social Proof
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-none">
              WHAT THEY'RE SAYING
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 flex flex-col"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="text-orange-500 fill-orange-500"
                      size={14}
                    />
                  ))}
                </div>
                <p className="text-zinc-200 text-lg leading-relaxed flex-1 mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            READY TO
            <br />
            ELEVATE YOUR GAME?
          </h2>
          <p className="text-xl mb-10 text-orange-100 max-w-xl mx-auto leading-relaxed">
            Limited spots available for summer 2026. Book your free assessment
            session today — no obligation.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-zinc-100 px-10 py-7 text-lg font-black tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            >
              Book Assessment Session <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
