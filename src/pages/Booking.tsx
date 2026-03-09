import { motion } from "motion/react";
import React, { useState } from "react";

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif font-medium text-charcoal mb-6"
          >
            Plan Your Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal-light"
          >
            Tell us about your vision, and our team will get back to you
            shortly.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-charcoal mb-4">
                  Inquiry Received
                </h3>
                <p className="text-charcoal-light mb-8">
                  Thank you for considering Fire Tower Miami. Our events team
                  will review your details and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold font-medium hover:text-gold-light uppercase tracking-wider text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Event Type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Party / Gala</option>
                      <option value="meeting">Meeting / Expo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Estimated Guest Count *
                    </label>
                    <select
                      id="guestCount"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select guest count</option>
                      <option value="under-100">Under 100</option>
                      <option value="100-250">100 - 250</option>
                      <option value="250-400">250 - 400</option>
                      <option value="400-600">400 - 600</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Desired Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Desired Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Budget Range (Venue Only)
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="2500-4000">$2,500 - $4,000</option>
                      <option value="4000-6000">$4,000 - $6,000</option>
                      <option value="6000+">$6,000+</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Additional Details or Questions
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors resize-none"
                    placeholder="Tell us more about your event..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-charcoal text-white font-medium tracking-wider uppercase text-sm hover:bg-charcoal-light transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
