import { Home, Search, Upload, Bookmark, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

export function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: Upload, label: 'Upload', path: '/upload' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/10 pb-safe md:hidden z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} to={item.path} className="flex-1">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1 py-2"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    isActive ? 'stroke-[#C8FF00] fill-[#C8FF00]' : 'stroke-[#1A1A1A]'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[10px] transition-colors ${
                  isActive ? 'text-[#0A0A0A] font-semibold' : 'text-[#1A1A1A] opacity-60'
                }`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
