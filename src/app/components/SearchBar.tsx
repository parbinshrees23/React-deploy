import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({ placeholder = 'Search destinations, photographers, tags...', onSearch, className = '' }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A0A0A]/40 transition-colors peer-focus:text-[#C8FF00]" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="peer w-full pl-14 pr-6 py-4 md:py-5 bg-white/95 backdrop-blur-md border-2 border-white/20 rounded-full text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 focus:outline-none focus:border-[#C8FF00] focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,255,0,0.1)] transition-all duration-300 text-base md:text-lg"
      />
    </div>
  );
}