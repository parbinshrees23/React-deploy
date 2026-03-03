import { PrishNav } from '../components/prish/PrishNav';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrishNav />
      
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#999999] text-lg mb-12"
              >
                Have questions about our journeys? We'd love to hear from you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#0A0A0A] mt-1" />
                  <div>
                    <div className="font-medium text-[#0A0A0A] mb-1">Email</div>
                    <div className="text-[#999999]">hello@prish.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#0A0A0A] mt-1" />
                  <div>
                    <div className="font-medium text-[#0A0A0A] mb-1">Phone</div>
                    <div className="text-[#999999]">+977 1 234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0A0A0A] mt-1" />
                  <div>
                    <div className="font-medium text-[#0A0A0A] mb-1">Location</div>
                    <div className="text-[#999999]">Thamel, Kathmandu, Nepal</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-[#0A0A0A] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#0A0A0A]/20 rounded-lg outline-none focus:border-[#0A0A0A] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#0A0A0A] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-[#0A0A0A]/20 rounded-lg outline-none focus:border-[#0A0A0A] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#0A0A0A] mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-[#0A0A0A]/20 rounded-lg outline-none focus:border-[#0A0A0A] transition-colors resize-none"
                    placeholder="Tell us about your journey..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0A0A0A] text-white rounded-lg hover:bg-[#333333] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
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
