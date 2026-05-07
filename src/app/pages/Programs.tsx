import { Link } from "react-router";
import { Check, Users, User, Video, ClipboardList, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Programs() {
  const programs = [
    {
      name: "1:1 Shooting Development",
      price: "$120",
      duration: "per session / 60 min",
      description:
        "Maximum individual attention. Custom shooting workout designed for your specific needs and goals.",
      features: [
        "Full 1-hour private session",
        "Video analysis of shooting form and mechanics",
        "Personalized shooting plan and progress tracking",
        "Immediate feedback and technique corrections",
        "Range extension and game-speed work",
        "Access to session recordings for review",
      ],
      popular: true,
      icon: User,
    },
    {
      name: "Small Group Shooting",
      price: "$60",
      duration: "per session / 75 min",
      description:
        "Train with 2–3 other shooters at your level. Competitive shooting drills with individual coaching.",
      features: [
        "Maximum 4 athletes per group",
        "Matched by age and skill level",
        "Game-speed shooting drills and competitions",
        "Individual form feedback during group work",
        "Build chemistry with other competitive shooters",
        "Extended session time (75 minutes)",
      ],
      popular: false,
      icon: Users,
    },
  ];

  const packages = [
    { sessions: "4 Sessions", price1on1: "$450", priceGroup: "$220", save1on1: "$30", saveGroup: "$20" },
    { sessions: "8 Sessions", price1on1: "$850", priceGroup: "$420", save1on1: "$110", saveGroup: "$60" },
    { sessions: "12 Sessions", price1on1: "$1,200", priceGroup: "$600", save1on1: "$240", saveGroup: "$120" },
  ];

  const included = [
    {
      icon: Video,
      title: "Video Analysis",
      description: "Every session filmed. Review your shooting form and track improvements over time.",
    },
    {
      icon: ClipboardList,
      title: "Shooting Metrics",
      description: "Detailed tracking of shooting %, form improvements, range extension, and consistency.",
    },
    {
      icon: TrendingUp,
      title: "Performance Reports",
      description: "Monthly reports sent to parents showing measurable shooting progress and next goals.",
    },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-12 pb-16 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Training Options
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-6xl md:text-7xl font-black leading-none">
              PROGRAMS &<br />
              <span className="text-orange-500">PRICING</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-xs leading-relaxed">
              No hidden fees. No upsells. Transparent pricing for proven training.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROGRAM CARDS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl border-2 overflow-hidden ${
                    program.popular
                      ? "border-orange-600 bg-gradient-to-b from-zinc-900 to-zinc-900/80"
                      : "border-zinc-800 bg-zinc-900"
                  }`}
                >
                  {program.popular && (
                    <div className="bg-orange-600 text-white text-xs font-black tracking-[0.2em] uppercase text-center py-2.5 px-4">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          program.popular ? "bg-orange-600" : "bg-zinc-800"
                        }`}
                      >
                        <Icon
                          className={program.popular ? "text-white" : "text-orange-500"}
                          size={20}
                        />
                      </div>
                      <h3 className="text-xl font-black">{program.name}</h3>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-6xl font-black text-orange-500 leading-none">
                        {program.price}
                      </span>
                      <span className="text-zinc-500 text-sm">{program.duration}</span>
                    </div>
                    <p className="text-zinc-400 mb-8 leading-relaxed">{program.description}</p>

                    <ul className="space-y-3 mb-10">
                      {program.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange-600/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="text-orange-500" size={11} />
                          </div>
                          <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block">
                      <Button
                        className={`w-full py-6 text-base font-bold tracking-wide transition-all duration-200 hover:scale-[1.02] ${
                          program.popular
                            ? "bg-orange-600 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/30"
                            : "bg-zinc-800 hover:bg-zinc-700 text-white"
                        }`}
                        size="lg"
                      >
                        Book Session <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-zinc-600 text-sm">
            Not sure which is right for you?{" "}
            <Link to="/contact" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
              Book a free 15-min assessment →
            </Link>
          </p>
        </div>
      </section>

      {/* ── PACKAGE PRICING ── */}
      <section className="py-20 bg-zinc-900/40 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Save More
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-none mb-4">PACKAGE PRICING</h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              Commit to a package and save. All sessions valid for 3 months from purchase.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            <div className="grid grid-cols-4 bg-zinc-800/60 border-b border-zinc-800">
              {["Package", "1:1 Price", "Group Price", "You Save"].map((h, i) => (
                <div
                  key={i}
                  className={`px-6 py-4 text-xs font-bold tracking-[0.15em] uppercase ${
                    i === 3 ? "text-orange-500" : "text-zinc-400"
                  }`}
                >
                  {h}
                </div>
              ))}
            </div>
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="grid grid-cols-4 border-b border-zinc-800/60 last:border-b-0 hover:bg-zinc-800/30 transition-colors"
              >
                <div className="px-6 py-5 font-bold text-white">{pkg.sessions}</div>
                <div className="px-6 py-5 text-zinc-300">{pkg.price1on1}</div>
                <div className="px-6 py-5 text-zinc-300">{pkg.priceGroup}</div>
                <div className="px-6 py-5">
                  <span className="text-orange-500 font-bold text-sm">
                    ${pkg.save1on1} / ${pkg.saveGroup}
                  </span>
                  <span className="text-zinc-600 text-xs ml-1">(1:1 / Group)</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-600 text-xs mt-5">
            Sessions must be used within 3 months of purchase. No refunds — rescheduling available with 24hr notice.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Every Session
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-none">
              WHAT'S INCLUDED
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600/40 hover:-translate-y-1.5 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-orange-600/10 group-hover:bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                    <Icon className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden p-12 md:p-16 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/photos/gallery-2.jpg'), url('https://images.unsplash.com/photo-1762025790138-521c8b81a58a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/60" />
            <div className="relative z-10 max-w-xl">
              <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                No Pressure
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-5 leading-none">
                STILL NOT SURE?
              </h2>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                Book a free 15-minute assessment. We'll evaluate your current skill level, discuss your goals, and determine if this is the right fit.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-500 px-8 py-6 text-base font-bold tracking-wide transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-600/30"
                >
                  Book Free Assessment <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
