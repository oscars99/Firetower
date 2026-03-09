import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import VoiceAgent from "./VoiceAgent";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Weddings", path: "/weddings" },
    { name: "Corporate", path: "/corporate" },
    { name: "Private Events", path: "/private-events" },
    { name: "Spaces", path: "/spaces" },
    { name: "Pricing", path: "/pricing" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
  ];

  const headerBgClass = isScrolled || isMobileMenuOpen || !isHomePage
    ? "bg-white shadow-md py-4"
    : "bg-transparent py-6";

  const logoColorClass = isScrolled || isMobileMenuOpen || !isHomePage
    ? "text-charcoal"
    : "text-white";

  const navLinkColorClass = isScrolled || !isHomePage
    ? "text-charcoal-light hover:text-gold"
    : "text-white/90 hover:text-gold";

  const buttonClass = isScrolled || !isHomePage
    ? "bg-charcoal text-white hover:bg-charcoal-light"
    : "bg-white text-charcoal hover:bg-white/90";

  const mobileIconColorClass = isScrolled || !isHomePage
    ? "text-charcoal"
    : "text-white";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
            >
              <img 
                src="https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Logo%20Transparent.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTG9nbyBUcmFuc3BhcmVudC5wbmciLCJpYXQiOjE3NzIxNjAwNjQsImV4cCI6MTg2Njc2ODA2NH0.eA1VhKGQpOHjE8GLmtDG4qr6l-bUdX3Eh__vqAzEveo" 
                alt="Fire Tower Miami Logo" 
                className={`h-12 w-auto transition-all duration-300 ${isScrolled || isMobileMenuOpen || !isHomePage ? '' : 'brightness-0 invert'}`}
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${navLinkColorClass}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className={`px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide uppercase transition-all ${buttonClass}`}
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className={`w-6 h-6 ${mobileIconColorClass}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4">
            <div className="flex flex-col px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-charcoal-light hover:text-gold text-lg font-serif"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-charcoal text-white text-center py-3 rounded-sm font-medium tracking-wide uppercase mt-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white/80 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-white mb-6">
                Fire Tower Miami
              </h3>
              <p className="text-sm leading-relaxed">
                Miami's premier lakefront event venue, offering an iconic
                architectural setting for weddings, corporate events, and
                private celebrations.
              </p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/firetowermiami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/firetowermiami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-serif text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>
                    Firefighters Memorial Building
                    <br />
                    8000 NW 21st St
                    <br />
                    Miami, FL 33122
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>(305) 593-6100 OPT #1</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <a
                    href="mailto:BOOKINGS@FIRETOWERMIAMI.COM"
                    className="hover:text-gold transition-colors"
                  >
                    BOOKINGS@FIRETOWERMIAMI.COM
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-serif text-white mb-6">
                Office Hours
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-white/50">
                  <span>Saturday - Sunday</span>
                  <span>Closed (Events Only)</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-serif text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Fire Tower Miami. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot />
      
      {/* Voice Agent */}
      <VoiceAgent />
    </div>
  );
}
