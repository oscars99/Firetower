import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-charcoal text-white">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6"
          >
            Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light tracking-wide text-white/80 uppercase"
          >
            Transparent & Straightforward
          </motion.p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-charcoal mb-4">
              Venue Rental Rates
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Our rates vary based on the day of the week and the amount of
              space required. All events must conclude by 1:00 AM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Weekday Pricing */}
            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-charcoal mb-2">
                Weekday Events
              </h3>
              <p className="text-charcoal-light mb-8">Monday – Thursday</p>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-medium text-charcoal">Whole Hall</h4>
                    <p className="text-sm text-charcoal-light">
                      Up to 600 Guests
                    </p>
                  </div>
                  <div className="text-2xl font-serif text-lake">$3,500</div>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-medium text-charcoal">Half Hall</h4>
                    <p className="text-sm text-charcoal-light">
                      Up to 250 Guests
                    </p>
                  </div>
                  <div className="text-2xl font-serif text-lake">$2,500</div>
                </div>
              </div>

              <div className="bg-offwhite p-6 rounded-sm">
                <h5 className="font-medium text-charcoal mb-4 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-gold" />
                  Required Fees
                </h5>
                <ul className="space-y-3 text-sm text-charcoal-light">
                  <li className="flex justify-between">
                    <span>Setup & Breakdown</span>
                    <span>$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cleaning Fee</span>
                    <span>$300</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Weekend Pricing */}
            <div className="bg-charcoal p-10 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Premium
              </div>
              <h3 className="text-2xl font-serif mb-2">Weekend Events</h3>
              <p className="text-white/70 mb-8">Friday – Sunday</p>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <h4 className="font-medium text-white">Whole Hall</h4>
                    <p className="text-sm text-white/70">Up to 600 Guests</p>
                  </div>
                  <div className="text-2xl font-serif text-gold">$5,500</div>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <h4 className="font-medium text-white">Half Hall</h4>
                    <p className="text-sm text-white/70">Up to 250 Guests</p>
                  </div>
                  <div className="text-2xl font-serif text-gold">$3,800</div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-sm">
                <h5 className="font-medium text-white mb-4 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-gold" />
                  Required Fees
                </h5>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex justify-between">
                    <span>Setup & Breakdown</span>
                    <span>$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cleaning Fee</span>
                    <span>$300</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-charcoal mb-12 text-center">
            What's Included in Your Rental
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Access to the Grand Ballroom",
              "Lakefront Terrace Access",
              '60" Round Tables',
              "8' Rectangular Tables",
              "Standard Banquet Chairs",
              "Built-in Stage (24' x 16')",
              "Basic AV Equipment",
              "High-Speed Wi-Fi",
              "Onsite Parking (167+ spaces)",
              "Event Timing until 1:00 AM",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-charcoal-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-charcoal mb-12 text-center">
            Optional Add-ons
          </h2>

          <div className="bg-white p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div>
                  <h4 className="font-medium text-charcoal">
                    Upgraded Chiavari Chairs
                  </h4>
                  <p className="text-sm text-charcoal-light">
                    Gold, Silver, or Clear
                  </p>
                </div>
                <div className="text-charcoal font-medium">$8 / chair</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div>
                  <h4 className="font-medium text-charcoal">
                    Advanced AV Package
                  </h4>
                  <p className="text-sm text-charcoal-light">
                    Projectors, screens, microphones
                  </p>
                </div>
                <div className="text-charcoal font-medium">$750</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div>
                  <h4 className="font-medium text-charcoal">
                    Outside Catering Fee
                  </h4>
                  <p className="text-sm text-charcoal-light">
                    If not using our preferred list
                  </p>
                </div>
                <div className="text-charcoal font-medium">$1,000</div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div>
                  <h4 className="font-medium text-charcoal">Security Guard</h4>
                  <p className="text-sm text-charcoal-light">
                    Required for events over 200 guests
                  </p>
                </div>
                <div className="text-charcoal font-medium">$250 / guard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">Ready to Book?</h2>
          <p className="text-lg text-white/80 mb-10">
            Contact us to confirm pricing, check availability, and secure your
            date.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-5 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
