import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, GlassWater, Gift, PartyPopper } from "lucide-react";

export default function PrivateEvents() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80"
          alt="Private Event at Fire Tower Miami"
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
            Private Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide text-white/90 uppercase"
          >
            Celebrate Life's Special Moments
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Unforgettable Celebrations
              </h2>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Whether you're planning an intimate baby shower, a milestone
                birthday, an anniversary, or a grand gala, Fire Tower Miami
                provides a stunning backdrop for your most cherished memories.
              </p>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Our versatile space can be tailored to fit your guest list. For
                smaller gatherings, we offer flexible half-room options,
                ensuring the space feels intimate and perfectly proportioned for
                your event.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center space-x-2 text-gold font-medium hover:text-gold-light transition-colors uppercase tracking-wider text-sm"
              >
                <span>View Event Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
                alt="Event Details"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80"
                alt="Event Setup"
                className="w-full h-full object-cover rounded-sm mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Perfect For Any Occasion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Showers & Anniversaries
              </h3>
              <p className="text-charcoal-light">
                Elegant daytime or evening events with beautiful lakefront views
                and natural light.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <PartyPopper className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Milestone Birthdays
              </h3>
              <p className="text-charcoal-light">
                Celebrate in style with a spacious dance floor, flexible
                seating, and a late 1 AM curfew.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <GlassWater className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                Galas & Fundraisers
              </h3>
              <p className="text-charcoal-light">
                Impress your donors and guests with our iconic Baccarat
                chandelier and upscale ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">Plan Your Celebration</h2>
          <p className="text-lg text-white/80 mb-10">
            Let us help you create an unforgettable event. Contact us to check
            availability and discuss your vision.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-5 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
