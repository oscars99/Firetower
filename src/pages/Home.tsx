import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Instagram,
  Facebook
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-charcoal">
        <img
          src="https://magenta-mule-431488.hostingersite.com/assets/Wedding.jpg"
          alt="Fire Tower Miami Ballroom Chandelier"
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center z-0 text-transparent"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight"
          >
            Miami's Premier Lakefront Event Venue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90"
          >
            An iconic architectural gem in Doral, minutes from Miami
            International Airport.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
            >
              Check Availability
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-medium tracking-wider uppercase text-sm hover:bg-white/10 transition-colors"
            >
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="px-4">
              <h3 className="text-4xl font-serif text-charcoal mb-2">8,126</h3>
              <p className="text-sm text-charcoal-light uppercase tracking-wider">
                Sq Ft Ballroom
              </p>
            </div>
            <div className="px-4">
              <h3 className="text-4xl font-serif text-charcoal mb-2">600</h3>
              <p className="text-sm text-charcoal-light uppercase tracking-wider">
                Guest Capacity
              </p>
            </div>
            <div className="px-4">
              <h3 className="text-4xl font-serif text-charcoal mb-2">
                Lakefront
              </h3>
              <p className="text-sm text-charcoal-light uppercase tracking-wider">
                Indoor + Outdoor
              </p>
            </div>
            <div className="px-4">
              <h3 className="text-4xl font-serif text-charcoal mb-2">167+</h3>
              <p className="text-sm text-charcoal-light uppercase tracking-wider">
                Onsite Parking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Host Your Next Event
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              From intimate gatherings to grand galas, Fire Tower Miami offers
              versatile spaces designed to elevate any occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Weddings", image: "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Wedding.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvV2VkZGluZy5qcGciLCJpYXQiOjE3NzIxNjA0MTEsImV4cCI6MTg2Njc2ODQxMX0.vGCt0zG9PZH3xI7f0D0zQHMHYG2tHTxqVV26IcxycY4", link: "/weddings" },
              {
                title: "Corporate Events",
                image: "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Le%20France.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTGUgRnJhbmNlLnBuZyIsImlhdCI6MTc3MjE2MDU2OSwiZXhwIjoxODY2NzY4NTY5fQ.306v-5N-6rD1GEgOhIjRyZOqNQBYlxhXD5IeTFTsSL4",
                link: "/corporate",
              },
              {
                title: "Private Parties",
                image: "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Outside%20Night.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvT3V0c2lkZSBOaWdodC5wbmciLCJpYXQiOjE3NzIxNjA2MzUsImV4cCI6MTg2Njc2ODYzNX0.at7gCjoq4UAhl7UIan1edrT2ZSb5P931uo5nl0ZFDGI",
                link: "/private-events",
              },
              {
                title: "Meetings & Expos",
                image: "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Table%20decoration.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvVGFibGUgZGVjb3JhdGlvbi5qcGciLCJpYXQiOjE3NzIxNjA3MzYsImV4cCI6MTg2Njc2ODczNn0.HAu_RWDe8PYvChzqq76BFdzTqQmAVYU-8tQwUeg_vms",
                link: "/corporate",
              },
            ].map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative h-96 overflow-hidden block"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <h3 className="text-3xl font-serif text-white">
                    {category.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-gold transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ballroom Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                The Grand Ballroom
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Designed by Arquitectonica, our 8,126 sq ft ballroom is a
                masterpiece of modern architecture. Featuring a stunning
                Baccarat chandelier, floor-to-ceiling windows, and flexible
                layouts to accommodate any vision.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">
                    Theater Style
                  </span>
                  <span className="text-charcoal-light">Up to 600 Guests</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">
                    Banquet Style
                  </span>
                  <span className="text-charcoal-light">Up to 450 Guests</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-medium text-charcoal">
                    Cocktail Reception
                  </span>
                  <span className="text-charcoal-light">Up to 500 Guests</span>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-gold font-medium hover:text-gold-light transition-colors uppercase tracking-wider text-sm">
                <span>Download Floor Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80"
                alt="Ballroom Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 -z-10" />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-lake/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Terrace Section */}
      <section className="relative py-32 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/lakefront-night/1920/1080"
            alt="Lakefront Terrace at Night"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Lakefront Elegance
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Step outside to our expansive terrace featuring panoramic lake views
            and a stunning lit fountain that creates a magical backdrop for
            evening celebrations.
          </p>
          <Link
            to="/gallery"
            className="inline-block px-8 py-4 bg-white text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-white/90 transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Transparent Pricing
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Clear, straightforward pricing for your special event. No hidden
              fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-charcoal mb-2">
                Weekday Events
              </h3>
              <p className="text-charcoal-light mb-6">Monday – Thursday</p>
              <div className="text-4xl font-serif text-lake mb-8">
                Starting at $3,500
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-charcoal-light">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Full Ballroom Access
                </li>
                <li className="flex items-center text-charcoal-light">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Tables & Chairs Included
                </li>
                <li className="flex items-center text-charcoal-light">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Lakefront Terrace
                </li>
              </ul>
            </div>

            <div className="bg-charcoal p-10 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Popular
              </div>
              <h3 className="text-2xl font-serif mb-2">Weekend Events</h3>
              <p className="text-white/70 mb-6">Friday – Sunday</p>
              <div className="text-4xl font-serif text-gold mb-8">
                Starting at $5,500
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/90">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Full Ballroom Access
                </li>
                <li className="flex items-center text-white/90">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Tables & Chairs Included
                </li>
                <li className="flex items-center text-white/90">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Lakefront Terrace
                </li>
                <li className="flex items-center text-white/90">
                  <ChevronRight className="w-4 h-4 text-gold mr-2" />
                  Extended Hours Available
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 text-charcoal font-medium hover:text-gold transition-colors uppercase tracking-wider text-sm"
            >
              <span>View Full Pricing Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Client Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The venue is absolutely breathtaking. The chandelier and the lake views made our wedding unforgettable. The staff was incredibly professional.",
                author: "Sarah & Michael",
                type: "Wedding",
              },
              {
                quote:
                  "We hosted our annual corporate gala here and it exceeded all expectations. The AV capabilities and space flexibility were perfect for our 400 guests.",
                author: "David R.",
                type: "Corporate Gala",
              },
              {
                quote:
                  "A true hidden gem in Miami. The architecture is stunning and the location near the airport made it so convenient for our out-of-town guests.",
                author: "Elena M.",
                type: "Private Celebration",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-offwhite p-8 border border-gray-100 relative"
              >
                <div className="text-gold text-6xl font-serif absolute top-4 left-4 opacity-20">
                  "
                </div>
                <p className="text-charcoal-light italic mb-6 relative z-10 pt-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium text-charcoal">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gold uppercase tracking-wider">
                    {testimonial.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Connect With Us
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto mb-8">
              Follow us on Instagram and Facebook for the latest event inspiration, behind-the-scenes looks, and venue updates.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/firetowermiami/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 text-charcoal hover:border-gold hover:text-gold transition-colors rounded-sm shadow-sm"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium tracking-wide uppercase text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/firetowermiami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 text-charcoal hover:border-gold hover:text-gold transition-colors rounded-sm shadow-sm"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-medium tracking-wide uppercase text-sm">Facebook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
            ].map((img, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/firetowermiami/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block"
              >
                <img
                  src={img}
                  alt={`Social Media Post ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-lake text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Plan Your Event at Fire Tower Miami
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Ready to start planning? Contact our team to check availability,
            schedule a tour, or request a custom proposal.
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
