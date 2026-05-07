import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Shack's Shooting Sessions"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-black text-lg tracking-tight leading-none">SHACK'S</div>
                <div className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase">Shooting Sessions</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg ${
                    isActive(link.path)
                      ? "text-orange-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/30"
              >
                Book Session
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? "text-orange-500 bg-orange-600/10"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-3 bg-orange-600 hover:bg-orange-500 text-white py-3 px-4 rounded-lg text-sm font-bold text-center transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
                <img src="/logo.png" alt="Shack's Shooting Sessions" className="h-14 w-14" />
                <div>
                  <div className="font-black text-xl tracking-tight leading-none">SHACK'S</div>
                  <div className="text-xs text-zinc-400 tracking-[0.2em] uppercase">Shooting Sessions</div>
                </div>
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
                Elevating youth basketball athletes across Ontario through proven training methods and personalized coaching.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/shootingwithshack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-5">Navigate</h3>
              <div className="space-y-3">
                {[...navLinks, { path: "/contact", label: "Book Session" }].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-zinc-400 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-5">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:Nickshackell@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 text-sm transition-colors"
                >
                  <Mail size={14} className="text-orange-600 flex-shrink-0" />
                  Nickshackell@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">© 2026 Shack's Shooting Sessions. All rights reserved.</p>
            <p className="text-xs text-zinc-700">Ontario, Canada • Elite Shooting Development</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
