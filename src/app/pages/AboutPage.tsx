import { PrishNav } from '../components/prish/PrishNav';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrishNav />
      
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            About PRISH
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="text-[#999999] text-xl leading-relaxed mb-6">
              PRISH is a premium travel discovery platform dedicated to showcasing the world's most breathtaking mountain landscapes and adventures.
            </p>
            <p className="text-[#999999] text-xl leading-relaxed">
              From the towering peaks of the Himalayas to serene alpine valleys, we curate extraordinary visual experiences that inspire wanderlust and celebrate the beauty of nature.
            </p>
          </motion.div>
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
