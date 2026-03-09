import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, MapPin, Building2, Wifi, Speaker } from "lucide-react";

export default function Corporate() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/BarCombo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQmFyQ29tYm8ucG5nIiwiaWF0IjoxNzczMDE0NDQyLCJleHAiOjE4Njc2MjI0NDJ9.kxt9IG6EtYpXb2Bg6Ge6DgUAgGoBasMO8Z8iCgFZMg0"
          alt="Corporate Event at Fire Tower Miami"
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Corporate Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide text-white/90 uppercase"
          >
            Professional, Impressive, Convenient
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Elevate Your Next Meeting or Gala
              </h2>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Fire Tower Miami provides a sophisticated and professional
                environment for corporate gatherings, from high-level board
                meetings to large-scale expos and annual galas.
              </p>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Our 8,126 sq ft ballroom can comfortably accommodate up to 600
                guests theater-style or 450 for a seated banquet. The space
                features a built-in stage, advanced AV capabilities, and
                high-speed Wi-Fi to ensure your event runs flawlessly.
              </p>
              <Link
                to="/spaces"
                className="inline-flex items-center space-x-2 text-gold font-medium hover:text-gold-light transition-colors uppercase tracking-wider text-sm"
              >
                <span>View Floor Plans & Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[500px]">
              <img
                src="https://picsum.photos/seed/corporate-meeting/800/1000"
                alt="Corporate Meeting Setup"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lake/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Why Choose Fire Tower Miami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-lake/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-lake" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">
                Prime Location
              </h3>
              <p className="text-charcoal-light text-sm">
                Located in Doral, just minutes from Miami International Airport
                (MIA), making it highly convenient for out-of-town attendees.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-lake/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-lake" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">
                Nearby Hotels
              </h3>
              <p className="text-charcoal-light text-sm">
                Surrounded by numerous top-tier hotels, offering easy
                accommodation options for multi-day conferences.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-lake/10 rounded-full flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-lake" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">
                AV & Stage
              </h3>
              <p className="text-charcoal-light text-sm">
                Equipped with a built-in stage and robust AV infrastructure to
                support presentations, panels, and keynote speakers.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-lake/10 rounded-full flex items-center justify-center mb-6">
                <Speaker className="w-8 h-8 text-lake" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">
                Advanced AV
              </h3>
              <p className="text-charcoal-light text-sm">
                State-of-the-art projectors, large screens, and premium sound systems to ensure your message is seen and heard clearly.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-lake/10 rounded-full flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-lake" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">
                Connectivity
              </h3>
              <p className="text-charcoal-light text-sm">
                High-speed Wi-Fi throughout the venue ensures your team and
                guests stay connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">
            Request a Corporate Proposal
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Our team is ready to assist with planning your next successful
            corporate event.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-5 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
