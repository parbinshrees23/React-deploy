import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

export function PrishNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journeys', href: '/journeys' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Stories', href: '/stories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b border-[#0A0A0A]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* PRISH Logo - Always Left */}
          <Link to="/">
            <h1
              className={`text-3xl md:text-4xl font-bold tracking-[0.3em] transition-colors ${
                isScrolled ? 'text-[#0A0A0A]' : 'text-white'
              }`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              PRISH
            </h1>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                  isScrolled ? 'text-[#0A0A0A]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Utility Links - Right */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                isScrolled ? 'text-[#0A0A0A]' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/book"
              className="px-6 py-2.5 bg-[#0A0A0A] text-white rounded-full text-sm tracking-wide hover:bg-[#333333] transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0A] z-[100] lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-5">
                <h1
                  className="text-3xl font-bold tracking-[0.3em] text-white"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  PRISH
                </h1>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl md:text-5xl text-white tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl text-white tracking-wide"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              <div className="px-6 pb-8">
                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 bg-white text-[#0A0A0A] rounded-full text-center text-lg tracking-wide"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
