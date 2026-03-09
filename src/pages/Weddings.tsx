import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Music, Instagram, Facebook } from "lucide-react";

export default function Weddings() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
          alt="Wedding at Fire Tower Miami"
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
            Weddings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide text-white/90 uppercase"
          >
            A Romantic, Architectural Masterpiece
          </motion.p>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Your Dream Wedding Awaits
              </h2>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Imagine exchanging vows with the shimmering lake as your
                backdrop, followed by a grand reception under our iconic
                Baccarat chandelier. Fire Tower Miami offers a breathtaking
                setting that blends modern elegance with romantic charm.
              </p>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Our 8,126 sq ft ballroom provides a blank canvas for your
                vision, whether you're planning an intimate gathering or a
                lavish celebration for up to 450 seated guests.
              </p>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center space-x-2 text-gold font-medium hover:text-gold-light transition-colors uppercase tracking-wider text-sm"
                >
                  <span>View Wedding Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <div className="flex items-center space-x-6 pt-4 border-t border-charcoal/10">
                  <span className="text-sm uppercase tracking-wider text-charcoal-light font-medium">Follow Us:</span>
                  <a
                    href="https://www.instagram.com/firetowermiami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-gold transition-colors flex items-center space-x-2"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/firetowermiami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-gold transition-colors flex items-center space-x-2"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/seed/wedding-1/400/500"
                alt="Wedding Details"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://picsum.photos/seed/wedding-2/400/500"
                alt="Wedding Reception"
                className="w-full h-full object-cover rounded-sm mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Designed for Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Flexible Layouts
              </h3>
              <p className="text-charcoal-light">
                Comfortably seat up to 450 guests for a banquet dinner, leaving
                ample room for a large dance floor and entertainment.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Romantic Ambiance
              </h3>
              <p className="text-charcoal-light">
                Floor-to-ceiling windows, a lit lakefront fountain at night, and
                our signature chandelier create an unforgettable atmosphere.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Dance the Night Away
              </h3>
              <p className="text-charcoal-light">
                Events can run until 1 AM, giving you and your guests plenty of
                time to celebrate your special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">
            Start Planning Your Special Day
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Contact us to schedule a private tour and discuss how we can bring
            your wedding vision to life.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-5 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Inquire About Dates
          </Link>
        </div>
      </section>
    </div>
  );
}
