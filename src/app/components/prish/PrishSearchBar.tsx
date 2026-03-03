import { useState } from 'react';
import { Search, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchSuggestion {
  id: string;
  image: string;
  location: string;
  category: string;
}

interface PrishSearchBarProps {
  variant?: 'hero' | 'white';
  className?: string;
}

export function PrishSearchBar({ variant = 'hero', className = '' }: PrishSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const suggestions: SearchSuggestion[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      location: 'Mount Everest, Nepal',
      category: 'Mountains',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      location: 'Annapurna Circuit',
      category: 'Hiking',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400',
      location: 'Lake Louise, Canada',
      category: 'Lakes',
    },
  ];

  const isHero = variant === 'hero';

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`relative flex items-center gap-3 ${
          isHero
            ? 'bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full'
            : 'bg-white border-2 border-[#0A0A0A]/10 rounded-2xl'
        } ${isFocused ? 'ring-4 ring-[#0A0A0A]/10' : ''} transition-all`}
      >
        <Search className={`absolute left-6 w-5 h-5 ${isHero ? 'text-white/70' : 'text-[#0A0A0A]/50'}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search destinations, moods, views..."
          className={`flex-1 pl-14 pr-4 py-4 md:py-5 bg-transparent outline-none text-base md:text-lg ${
            isHero ? 'text-white placeholder:text-white/60' : 'text-[#0A0A0A] placeholder:text-[#0A0A0A]/40'
          }`}
        />
        <Mic className={`w-5 h-5 ${isHero ? 'text-white/70' : 'text-[#0A0A0A]/50'} mr-3`} />
        <button className="px-8 py-3 bg-[#0A0A0A] text-white rounded-full text-sm md:text-base tracking-wide hover:bg-[#333333] transition-colors mr-2">
          Search
        </button>
      </motion.div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isFocused && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-3 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-[#0A0A0A]/5 overflow-hidden z-50"
          >
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                className="w-full flex items-center gap-4 p-4 hover:bg-[#F8F8F6] transition-colors border-b border-[#0A0A0A]/5 last:border-0"
              >
                <img
                  src={suggestion.image}
                  alt={suggestion.location}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 text-left">
                  <div className="font-medium text-[#0A0A0A]">{suggestion.location}</div>
                  <div className="text-sm text-[#999999]">{suggestion.category}</div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
