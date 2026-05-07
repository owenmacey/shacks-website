import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    athleteName: "",
    email: "",
    phone: "",
    ageGroup: "",
    currentLevel: "",
    programInterest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "Nickshackell@gmail.com",
      link: "mailto:Nickshackell@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(416) 555-0199",
      link: "tel:4165550199",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Ontario, Canada",
      link: null,
    },
  ];

  const availability = [
    { day: "Monday – Friday", time: "4:00 PM – 9:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "9:00 AM – 4:00 PM" },
  ];

  const inputClass =
    "bg-zinc-800/80 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-orange-600 focus:ring-1 focus:ring-orange-600/30 transition-colors rounded-lg";

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-12 pb-16 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Get Started
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-6xl md:text-7xl font-black leading-none">
              BOOK YOUR<br />
              <span className="text-orange-500">SESSION</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-xs leading-relaxed">
              Limited spots available. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 md:p-10">
                <h2 className="text-2xl font-black mb-8">Get Started</h2>

                {submitted ? (
                  <div className="bg-orange-600/10 border border-orange-600/40 rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-orange-500">
                      Request Sent!
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Thanks for reaching out. We'll review your info and get back to you within 24 hours to schedule your session.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-zinc-300 text-sm font-semibold">
                          Parent / Guardian Name *
                        </Label>
                        <Input
                          id="parentName"
                          required
                          placeholder="Jane Smith"
                          value={formData.parentName}
                          onChange={(e) =>
                            setFormData({ ...formData, parentName: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="athleteName" className="text-zinc-300 text-sm font-semibold">
                          Athlete Name *
                        </Label>
                        <Input
                          id="athleteName"
                          required
                          placeholder="Alex Smith"
                          value={formData.athleteName}
                          onChange={(e) =>
                            setFormData({ ...formData, athleteName: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-300 text-sm font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="jane@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-zinc-300 text-sm font-semibold">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="(416) 555-0100"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-zinc-300 text-sm font-semibold">Age Group *</Label>
                        <Select
                          value={formData.ageGroup}
                          onValueChange={(v) => setFormData({ ...formData, ageGroup: v })}
                        >
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                            <SelectItem value="8-10">8–10 years</SelectItem>
                            <SelectItem value="11-13">11–13 years</SelectItem>
                            <SelectItem value="14-16">14–16 years</SelectItem>
                            <SelectItem value="17-18">17–18 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-zinc-300 text-sm font-semibold">Current Level *</Label>
                        <Select
                          value={formData.currentLevel}
                          onValueChange={(v) => setFormData({ ...formData, currentLevel: v })}
                        >
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                            <SelectItem value="house">House League</SelectItem>
                            <SelectItem value="rep">Rep Team</SelectItem>
                            <SelectItem value="aau">AAU</SelectItem>
                            <SelectItem value="oba">OBA</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-zinc-300 text-sm font-semibold">Program Interest *</Label>
                      <Select
                        value={formData.programInterest}
                        onValueChange={(v) =>
                          setFormData({ ...formData, programInterest: v })
                        }
                      >
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectItem value="1on1">1:1 Elite Training ($120/session)</SelectItem>
                          <SelectItem value="group">Small Group Training ($60/session)</SelectItem>
                          <SelectItem value="assessment">Free Assessment (15 min)</SelectItem>
                          <SelectItem value="unsure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300 text-sm font-semibold">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your goals, position, or any questions you have..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-500 py-6 text-base font-bold tracking-wide transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-orange-600/30"
                    >
                      <Send className="mr-2" size={18} />
                      Submit Request
                    </Button>

                    <p className="text-xs text-zinc-600 text-center leading-relaxed">
                      By submitting, you agree to be contacted about training programs. We typically respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact info */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-7">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-orange-500" size={17} />
                        </div>
                        <div>
                          <div className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">
                            {item.title}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-zinc-200 hover:text-orange-500 font-semibold text-sm transition-colors"
                            >
                              {item.detail}
                            </a>
                          ) : (
                            <div className="text-zinc-200 font-semibold text-sm">
                              {item.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-orange-500" size={18} />
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500">
                    Availability
                  </h3>
                </div>
                <div className="space-y-4">
                  {availability.map((slot, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Clock className="text-orange-500 mt-0.5 flex-shrink-0" size={15} />
                      <div>
                        <div className="font-semibold text-sm text-white">{slot.day}</div>
                        <div className="text-xs text-zinc-500 mt-0.5">{slot.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency callout */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700" />
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <div className="relative p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-orange-100 text-xs font-bold tracking-widest uppercase">
                      Limited Spots
                    </span>
                  </div>
                  <h4 className="font-black text-white text-lg mb-2 leading-tight">
                    Summer 2026 Filling Fast
                  </h4>
                  <p className="text-orange-100 text-sm leading-relaxed">
                    Book now to secure your preferred time slot before they're gone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
