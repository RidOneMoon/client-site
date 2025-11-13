import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Slider Data ---
const slides = [
  {
    id: 0,
    url: "/pet1.jpg",
    alt: "Happy Golden Retriever Puppy",
    title: "Find Your Furry Friend Today!",
    subtitle: "Adopt, Don’t Shop — Give a Pet a Home.",
  },
  {
    id: 1,
    url: "/pet2.jpg",
    alt: "Pet Food & Supplies Deal",
    title: "Stock Up & Save Big!",
    subtitle: "Premium nutrition delivered right to your door.",
  },
  {
    id: 2,
    url: "/pet3.jpg",
    alt: "Cute Ragdoll Cat",
    title: "Purr-fect Companions Await",
    subtitle: "Everything your feline friend needs for a happy life.",
  },
];

// Animation variants for image and text fading
const fadeVariants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5, ease: "easeIn" } },
};

// --- Main Banner Component ---
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Manual Navigation Handlers ---
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto slide effect (runs every 3000ms or 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className=" w-full relative top-5 px-4 font-inter">
      {/* Container with responsive height and rounded corners */}
      <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden rounded-xl shadow-xl group">
        
        {/* 1. Image Slider with Framer Motion */}
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentSlideData.id} // Key is essential for AnimatePresence to detect slide changes
            src={currentSlideData.url}
            alt={currentSlideData.alt}
            className="w-full h-full object-cover absolute top-0 left-0"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        {/* 2. Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 3. Text Overlay (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlideData.id + "-text"}
              // UPDATED STYLING FOR VISUAL IMPACT
              className="text-center max-w-lg p-6 rounded-xl bg-white shadow-2xl text-gray-900 border-4 border-indigo-700 cursor-pointer"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }} // Added interactive hover effect
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-indigo-900">
                {currentSlideData.title}
              </h1>
              <p className="text-sm sm:text-xl font-medium text-gray-700">
                {currentSlideData.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Navigation Arrows (Hidden by default, show on hover/focus) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 5. Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 shadow-md ${
                index === currentSlide ? 'bg-indigo-500 w-6' : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}