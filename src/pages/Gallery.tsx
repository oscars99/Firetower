import { motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "Weddings", "Corporate", "Night Events", "Outdoor"];

const photos = [
  {
    id: 1,
    category: "Corporate",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Weddings",
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Night Events",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Outdoor",
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    category: "Weddings",
    url: "https://picsum.photos/seed/wed2/800/600",
  },
  {
    id: 6,
    category: "Corporate",
    url: "https://picsum.photos/seed/corp2/800/600",
  },
  {
    id: 7,
    category: "Night Events",
    url: "https://picsum.photos/seed/night2/800/600",
  },
  {
    id: 8,
    category: "Outdoor",
    url: "https://picsum.photos/seed/out2/800/600",
  },
  {
    id: 9,
    category: "Weddings",
    url: "https://picsum.photos/seed/wed3/800/600",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal-light"
          >
            Explore the beauty and versatility of Fire Tower Miami.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-full border ${
                  activeCategory === category
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-transparent text-charcoal-light border-gray-200 hover:border-charcoal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={photo.id}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={`${photo.category} Event`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl tracking-wide">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
