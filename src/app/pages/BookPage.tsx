import { PrishNav } from '../components/prish/PrishNav';
import { motion } from 'motion/react';
import { MessageCircle, Calendar, Users, MapPin } from 'lucide-react';

export function BookPage() {
  const packages = [
    {
      name: 'Everest Base Camp Trek',
      duration: '12 Days',
      difficulty: 'Moderate',
      price: '$1,499',
      image: 'https://images.unsplash.com/photo-1697746149225-63a33bcb2ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVyZXN0JTIwYmFzZSUyMGNhbXAlMjB0cmVrfGVufDF8fHx8MTc3MjUzMzEzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Annapurna Circuit',
      duration: '16 Days',
      difficulty: 'Challenging',
      price: '$1,799',
      image: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5hcHVybmElMjBtb3VudGFpbiUyMHJhbmdlJTIwbmVwYWx8ZW58MXx8fHwxNzcyNTMzMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Manang Valley Trek',
      duration: '10 Days',
      difficulty: 'Easy',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1592731056753-5cbc8085e1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbmclMjB2YWxsZXklMjBuZXBhbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzI1MzMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PrishNav />
      
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-8 text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Book Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#999999] text-xl text-center max-w-2xl mx-auto mb-16"
          >
            Choose from our selection of curated mountain adventures
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {pkg.name}
                </h3>
                <div className="space-y-2 mb-4 text-[#999999] text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {pkg.difficulty}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {pkg.price}
                  </div>
                  <button className="px-6 py-2.5 bg-[#0A0A0A] text-white rounded-full text-sm hover:bg-[#333333] transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button className="px-6 py-3 bg-white text-[#0A0A0A] rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center gap-2 text-sm border border-[#0A0A0A]/10">
          ✉ Enquire
        </button>
        <button className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="px-6 py-3 bg-[#0A0A0A] text-white rounded-full shadow-2xl hover:shadow-xl transition-all flex items-center gap-2 text-sm">
          🤖 Ask PRISH
        </button>
      </div>
    </div>
  );
}
