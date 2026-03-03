import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pictures } from '@/pictures';

export function CinematicNarrative() {
  const [currentPanel, setCurrentPanel] = useState(0);

  const narratives = [
    {
      number: '01',
      label: 'THE ASCENT',
      title: 'Journey to the Summit',
      description:
        'Experience the raw challenge of high-altitude trekking. Watch as dawn breaks over snow-capped peaks, revealing landscapes that have inspired adventurers for generations.',
      image: pictures[4]?.url ?? 'https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?w=800',
    },
    {
      number: '02',
      label: 'THE CULTURE',
      title: 'Sherpa Heritage',
      description:
        'Immerse yourself in centuries-old traditions. Meet the legendary Sherpa people, whose wisdom and hospitality have guided countless expeditions through the Himalayas.',
      image: pictures[5]?.url ?? 'https://images.unsplash.com/photo-1667327625285-188640ab9d5f?w=800',
    },
    {
      number: '03',
      label: 'THE REFLECTION',
      title: 'Sacred Waters',
      description:
        'Find tranquility in pristine alpine lakes. These mirror-like waters reflect not only the mountains, but also the inner journey of every traveler who pauses at their shores.',
      image: pictures[6]?.url ?? 'https://images.unsplash.com/photo-1753372623416-bc8bf85eab06?w=800',
    },
    {
      number: '04',
      label: 'THE TRIUMPH',
      title: 'Base Camp Victory',
      description:
        'Stand where legends begin. Reaching base camp is more than a destination—it\'s a testament to human determination and the spirit of exploration that drives us forward.',
      image: pictures[7]?.url ?? 'https://images.unsplash.com/photo-1697746149225-63a33bcb2ea4?w=800',
    },
  ];

  const next = () => {
    setCurrentPanel((prev) => (prev + 1) % narratives.length);
  };

  const prev = () => {
    setCurrentPanel((prev) => (prev - 1 + narratives.length) % narratives.length);
  };

  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden" style={{ height: '85vh' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPanel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={narratives[currentPanel].image}
            alt={narratives[currentPanel].title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPanel}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <div className="text-[120px] md:text-[180px] leading-none font-light opacity-10 mb-4">
                  {narratives[currentPanel].number}
                </div>
                <div className="text-xs tracking-[0.3em] uppercase mb-4 opacity-70">
                  {narratives[currentPanel].label}
                </div>
                <h2
                  className="text-5xl md:text-7xl mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {narratives[currentPanel].title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                  {narratives[currentPanel].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-white text-sm">
          {currentPanel + 1} / {narratives.length}
        </span>
        <button
          onClick={next}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {narratives.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPanel(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentPanel ? 'bg-white w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
