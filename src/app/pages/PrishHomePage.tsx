import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Download, Heart, MessageCircle, ArrowUp } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { PrishNav } from '../components/prish/PrishNav';
import { PrishSearchBar } from '../components/prish/PrishSearchBar';
import { CinematicNarrative } from '../components/prish/CinematicNarrative';
import { PrishBot } from '../components/prish/PrishBot';
import { pictures } from '@/pictures';

// ── 8 verified base photos (Unsplash) ────────────────────────────────────────
const BASE_PHOTOS = [
  {
    id: 'b1',
    image: 'https://images.unsplash.com/photo-1701483807362-ea0136c7526c?w=800&q=80',
    name: 'Matterhorn Peak',
    location: 'Switzerland',
    rating: 4.9,
    downloads: 12543,
  },
  {
    id: 'b2',
    image: 'https://images.unsplash.com/photo-1599057151969-60661f368885?w=800&q=80',
    name: 'Mount Everest',
    location: 'Nepal',
    rating: 5.0,
    downloads: 32456,
  },
  {
    id: 'b3',
    image: 'https://images.unsplash.com/photo-1631551437792-ae5a0fb41c49?w=800&q=80',
    name: 'Lake Louise',
    location: 'Canada',
    rating: 5.0,
    downloads: 24513,
  },
  {
    id: 'b4',
    image: 'https://images.unsplash.com/photo-1585465147983-7534032bc07d?w=800&q=80',
    name: 'Mount Fuji',
    location: 'Japan',
    rating: 4.9,
    downloads: 19843,
  },
  {
    id: 'b5',
    image: 'https://images.unsplash.com/photo-1691135434271-840a997dd693?w=800&q=80',
    name: 'Andes Peaks',
    location: 'Argentina',
    rating: 4.9,
    downloads: 14567,
  },
  {
    id: 'b6',
    image: 'https://images.unsplash.com/photo-1605661480059-884578ac8ec8?w=800&q=80',
    name: 'Torres del Paine',
    location: 'Chile',
    rating: 4.8,
    downloads: 11287,
  },
  {
    id: 'b7',
    image: 'https://images.unsplash.com/photo-1767087491713-d75acad13ed2?w=800&q=80',
    name: 'Dolomites Range',
    location: 'Italy',
    rating: 4.8,
    downloads: 9834,
  },
  {
    id: 'b8',
    image: 'https://images.unsplash.com/photo-1667297793700-db338d5ec68c?w=800&q=80',
    name: 'Denali Summit',
    location: 'Alaska',
    rating: 4.8,
    downloads: 13245,
  },
];

export function PrishHomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedJourney, setSelectedJourney] = useState<number | null>(null);
  const [botOpen, setBotOpen] = useState(false);
  const [galleryCols, setGalleryCols] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive columns for CSS masonry
  useEffect(() => {
    function updateCols() {
      if (window.innerWidth < 768) setGalleryCols(2);
      else if (window.innerWidth < 1024) setGalleryCols(3);
      else setGalleryCols(4);
    }
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const parallaxScale = 1 + scrollY * 0.0003;
  const heroOpacity = 1 - scrollY * 0.003;
  const showScrollTop = scrollY > 400;

  const journeys = [
    {
      id: 1,
      number: '01',
      region: 'KHUMBU REGION',
      name: 'Everest',
      image: pictures[1]?.url ?? 'https://images.unsplash.com/photo-1697746149225-63a33bcb2ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVyZXN0JTIwYmFzZSUyMGNhbXAlMjB0cmVrfGVufDF8fHx8MTc3MjUzMzEzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      treks: ['Everest Base Camp', 'Gokyo Lakes Trek', 'Three Passes Trek', 'Island Peak Climb'],
    },
    {
      id: 2,
      number: '02',
      region: 'ANNAPURNA REGION',
      name: 'Annapurna',
      image: pictures[2]?.url ?? 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5hcHVybmElMjBtb3VudGFpbiUyMHJhbmdlJTIwbmVwYWx8ZW58MXx8fHwxNzcyNTMzMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      treks: ['Annapurna Circuit', 'Annapurna Base Camp', 'Poon Hill Trek', 'Mardi Himal Trek'],
    },
    {
      id: 3,
      number: '03',
      region: 'MANANG VALLEY',
      name: 'Manang',
      image: pictures[3]?.url ?? 'https://images.unsplash.com/photo-1592731056753-5cbc8085e1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbmclMjB2YWxsZXklMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzI1MzMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treks: ['Tilicho Lake Trek', 'Upper Mustang Trek', 'Nar Phu Valley', 'Thorong La Pass'],
    },
  ];

  // Merge: 8 base photos + any local pictures beyond index 8
  const extraPhotos = pictures.slice(8).map((pic, i) => ({
    id: `local-${i}`,
    image: pic.url,
    name: pic.title,
    location: 'Personal Collection',
    rating: 4.9,
    downloads: 0,
  }));
  const galleryPhotos = [...BASE_PHOTOS, ...extraPhotos];

  const stats = [
    { number: '24K', label: 'PHOTOGRAPHS' },
    { number: '180', label: 'DESTINATIONS' },
    { number: '4.9M', label: 'DOWNLOADS' },
    { number: '98%', label: 'SATISFACTION' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      <Toaster position="bottom-center" richColors />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#0A0A0A] z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />

      <PrishNav />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            scale: parallaxScale,
            opacity: heroOpacity > 0 ? heroOpacity : 0,
          }}
        >
          <img
            src={pictures[0]?.url ?? 'https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MjUzMzEzM3ww&ixlib=rb-4.1.0&q=80&w=1080'}
            alt="Hero"
            className="w-full h-full object-cover brightness-[0.7]"
          />

          {/* Geometric Overlays */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[80px] md:text-[120px] lg:text-[160px] italic mb-4 text-center leading-none"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}
          >
            SEE THE WORLD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-12 opacity-90"
          >
            One breathtaking view at a time
          </motion.p>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white -mt-20 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-12">
          <PrishSearchBar variant="white" />
        </div>
      </section>

      {/* Select Your Journey Section */}
      <section className="bg-[#F8F8F6] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Select Your Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#999999] text-lg leading-relaxed"
            >
              Discover breathtaking treks through the Himalayas. From the legendary Everest Base Camp to the serene Annapurna Circuit, each journey offers unique landscapes and unforgettable experiences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {journeys.map((journey, index) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedJourney(selectedJourney === journey.id ? null : journey.id)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={journey.image}
                    alt={journey.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6 text-white/30 text-[120px] leading-none font-light">
                    {journey.number}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs tracking-[0.3em] uppercase mb-2 opacity-70">
                      {journey.region}
                    </div>
                    <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {journey.name}
                    </h3>
                    <button className="text-sm tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                      Explore Hikes <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Trek Dropdown */}
                {selectedJourney === journey.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="absolute inset-x-0 top-full bg-white z-10 shadow-2xl overflow-hidden"
                  >
                    <div className="p-6">
                      {journey.treks.map((trek) => (
                        <button
                          key={trek}
                          className="w-full text-left py-3 border-b border-[#0A0A0A]/5 last:border-0 hover:translate-x-2 transition-transform flex items-center gap-2 text-[#0A0A0A]"
                        >
                          <ArrowRight className="w-4 h-4" />
                          {trek}
                        </button>
                      ))}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJourney(null);
                        }}
                        className="mt-4 text-sm text-[#999999] hover:text-[#0A0A0A] transition-colors"
                      >
                        ✕ Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center gap-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Photo Gallery
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="self-center px-3 py-1 bg-[#0A0A0A] text-white text-xs rounded-full tracking-wider"
            >
              {galleryPhotos.length}
            </motion.span>
          </div>

          {/* CSS columns masonry — works natively without any library */}
          <div style={{ columns: galleryCols, columnGap: 3 }}>
            {galleryPhotos.map((photo, i) => (
              <div key={photo.id} style={{ breakInside: 'avoid', marginBottom: 3, display: 'block' }}>
                <GalleryCard photo={photo} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Narrative Strip */}
      <CinematicNarrative />

      {/* Experiences Grid */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-12 text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Experiences
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {[
              { name: 'Climbing',    fallback: 'https://images.unsplash.com/photo-1531322804667-8d2907f41406?w=400' },
              { name: 'Trekking',   fallback: 'https://images.unsplash.com/photo-1595248588362-18a894e156d1?w=400' },
              { name: 'Meditation', fallback: 'https://images.unsplash.com/photo-1525217973983-abea5c8e7f45?w=400' },
              { name: 'Photography',fallback: 'https://images.unsplash.com/photo-1729944080510-16b8a89df8b9?w=400' },
              { name: 'Camping',    fallback: 'https://images.unsplash.com/photo-1760292452123-4cd5a11beea6?w=400' },
              { name: 'Wellness',   fallback: 'https://images.unsplash.com/photo-1567254695449-82d119c7c2b0?w=400' },
            ].map((exp, index) => {
              const image = pictures[8 + index]?.url ?? exp.fallback;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square group cursor-pointer overflow-hidden"
                >
                  <img
                    src={image}
                    alt={exp.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                      {exp.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.3em] text-[#999999] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#0A0A0A] py-20 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Stay Inspired
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#999999] mb-8"
          >
            Subscribe to receive the latest views and travel stories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-colors"
            />
            <button
              onClick={() => toast('Welcome to PRISH! You are now subscribed 🏔')}
              className="px-8 py-4 bg-white text-[#0A0A0A] rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#0A0A0A]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3
                className="text-3xl font-bold tracking-[0.3em] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                PRISH
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed">
                Discover the world's most breathtaking mountain views and embark on unforgettable journeys.
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase mb-4 text-[#0A0A0A]">Mountains</h4>
              <ul className="space-y-2 text-[#999999] text-sm">
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Everest</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Annapurna</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Manang</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Langtang</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase mb-4 text-[#0A0A0A]">Coming Soon</h4>
              <ul className="space-y-2 text-[#999999] text-sm">
                <li>Oceans</li>
                <li>Forests</li>
                <li>Deserts</li>
                <li>Cities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase mb-4 text-[#0A0A0A]">Company</h4>
              <ul className="space-y-2 text-[#999999] text-sm">
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Stories</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#0A0A0A]/10 text-[#999999] text-sm">
            <div>© 2026 PRISH. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#0A0A0A] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#0A0A0A] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#0A0A0A] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button — bottom-left, appears after 400px */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 w-11 h-11 bg-[#0A0A0A] text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-[#333333] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button className="px-6 py-3 bg-white text-[#0A0A0A] rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center gap-2 text-sm">
          ✉ Enquire
        </button>
        <button className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button
          onClick={() => setBotOpen(prev => !prev)}
          className="px-6 py-3 bg-[#0A0A0A] text-white rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center gap-2 text-sm"
        >
          🤖 Ask PRISH
        </button>
      </div>

      {/* PRISH Bot Panel */}
      <AnimatePresence>
        {botOpen && <PrishBot onClose={() => setBotOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}

// ── GalleryCard ───────────────────────────────────────────────────────────────
function GalleryCard({ photo, index }: { photo: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDLLoading, setIsDLLoading] = useState(false);

  async function handleDownload(e: React.MouseEvent) {
    e.stopPropagation();
    setIsDLLoading(true);
    toast('Download started ⬇');
    try {
      const res = await fetch(photo.image);
      const blob = await res.blob();
      const objUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objUrl;
      a.download = (photo.name || 'photo').replace(/\s+/g, '-').toLowerCase() + '.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objUrl);
    } catch {
      // Fallback: open in new tab
      window.open(photo.image, '_blank');
    }
    setIsDLLoading(false);
  }

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-[4px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.08 }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={photo.image}
        alt={photo.name}
        className="w-full h-auto object-cover block"
        style={{ display: 'block' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {photo.name}
          </h3>
          <div className="text-sm opacity-80 mb-2">{photo.location}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              <span className="text-sm">{photo.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-sm opacity-80">
              <Download className="w-4 h-4" />
              {photo.downloads.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); toast('Saved to favourites ♥'); }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart className="w-5 h-5 stroke-[#0A0A0A]" />
          </button>
          <button
            id="dl-btn"
            onClick={handleDownload}
            disabled={isDLLoading}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors disabled:opacity-60"
          >
            {isDLLoading
              ? <span className="text-[10px] text-[#0A0A0A]">...</span>
              : <Download className="w-5 h-5 stroke-[#0A0A0A]" />
            }
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
