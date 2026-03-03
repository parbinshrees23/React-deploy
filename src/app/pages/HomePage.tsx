import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { SearchBar } from '../components/SearchBar';
import { CategoryPill } from '../components/CategoryPill';
import { PhotoCard } from '../components/PhotoCard';
import { categories, mockPhotos } from '../data/mockData';

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState('mountains');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <motion.div
          style={{ y: parallaxOffset }}
          className="absolute inset-0"
        >
          <img
            src={mockPhotos[0].imageUrl}
            alt="Hero Mountain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-6 text-center tracking-tight"
          >
            VIEWS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-center max-w-2xl opacity-90"
          >
            Welcome
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-xl"
          >
            <SearchBar />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-8 sticky top-0 md:top-[73px] z-40 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max">
              {categories.map((category) => (
                <CategoryPill
                  key={category.id}
                  label={category.name}
                  icon={category.icon}
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="bg-[#F5F5F5] py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry columnsCount={1} gutter="20px" className="md:hidden">
              {mockPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="medium" />
              ))}
            </Masonry>
            
            <Masonry columnsCount={2} gutter="24px" className="hidden md:block lg:hidden">
              {mockPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="medium" />
              ))}
            </Masonry>
            
            <Masonry columnsCount={3} gutter="28px" className="hidden lg:block">
              {mockPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="large" />
              ))}
            </Masonry>
          </motion.div>
        </div>
      </section>
    </div>
  );
}