import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is your catering policy?",
    answer:
      "We have a preferred list of excellent caterers who are familiar with our venue. However, you may bring in an outside caterer for a $1,000 fee. All outside caterers must be licensed and insured.",
  },
  {
    question: "Do you allow outside alcohol?",
    answer:
      "Yes, you may provide your own alcohol. However, it must be served by a licensed and insured bartender. We do not charge a corkage fee.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have a large private parking lot with over 167 spaces available for your guests at no additional charge.",
  },
  {
    question: "Is the venue wheelchair accessible?",
    answer:
      "Absolutely. Our entire venue, including the ballroom, restrooms, and outdoor terrace, is fully ADA compliant and wheelchair accessible.",
  },
  {
    question: "What time do events need to end?",
    answer:
      "All events must conclude by 1:00 AM, including music and bar service. Breakdown and cleanup must be completed by 2:00 AM.",
  },
  {
    question: "Are tables and chairs included?",
    answer:
      "Yes, our rental fee includes 60\" round tables, 8' rectangular tables, and standard banquet chairs for up to 600 guests.",
  },
  {
    question: "Can we use the outdoor terrace?",
    answer:
      "Yes, access to the lakefront terrace is included with your rental. It's perfect for cocktail hours or as an additional gathering space.",
  },
  {
    question: "How do I secure a date?",
    answer:
      "To secure your date, we require a signed contract and a 50% non-refundable deposit. The remaining balance is due 30 days prior to your event.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal-light"
          >
            Everything you need to know about hosting an event at Fire Tower
            Miami.
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-medium text-charcoal">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-charcoal-light shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-charcoal-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
