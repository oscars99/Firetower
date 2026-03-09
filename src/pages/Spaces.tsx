import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize, Users, Music, Layers } from "lucide-react";

export default function Spaces() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
          alt="Fire Tower Miami Exterior"
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
            The Spaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide text-white/90 uppercase"
          >
            Architectural Elegance & Versatility
          </motion.p>
        </div>
      </section>

      {/* Ballroom Specs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                The Grand Ballroom
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Our primary event space is an architectural masterpiece designed
                by Arquitectonica. Featuring soaring ceilings, floor-to-ceiling
                windows, and a breathtaking Baccarat chandelier, the ballroom
                offers a sophisticated canvas for your event.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <Maximize className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal">Total Area</h4>
                    <p className="text-sm text-charcoal-light">
                      8,126 Square Feet
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal">Capacity</h4>
                    <p className="text-sm text-charcoal-light">
                      Up to 600 Guests
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Layers className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal">
                      Included Tables
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      60" Rounds & 8' Rectangular
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Music className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal">Stage Size</h4>
                    <p className="text-sm text-charcoal-light">
                      Built-in, 24' x 16'
                    </p>
                  </div>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-gold font-medium hover:text-gold-light transition-colors uppercase tracking-wider text-sm">
                <span>Download Floor Plan PDF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
                alt="Ballroom Specifications"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Terrace */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px]">
              <img
                src="https://picsum.photos/seed/terrace-specs/800/1000"
                alt="Lakefront Terrace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-lake/10 -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Lakefront Terrace
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Step outside to our expansive terrace, offering panoramic views
                of the lake. Perfect for cocktail hours, outdoor ceremonies, or
                simply providing guests with a breath of fresh air. At night,
                the lit fountain creates a magical ambiance.
              </p>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">
                    Outdoor Capacity
                  </span>
                  <span className="text-charcoal-light">
                    Up to 200 Guests (Standing)
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">Features</span>
                  <span className="text-charcoal-light">
                    Lit Fountain, Lake Views
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">
                    Accessibility
                  </span>
                  <span className="text-charcoal-light">
                    Direct Access from Ballroom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">See the Space in Person</h2>
          <p className="text-lg text-white/80 mb-10">
            Schedule a private tour to explore the ballroom, terrace, and
            discuss how we can accommodate your event.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-5 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
