import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export function StarRating({ rating, onRate, interactive = false, size = 'md', showValue = false }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const displayRating = hoverRating || rating;

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (value: number) => {
    if (interactive && onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <motion.button
          key={value}
          whileTap={interactive ? { scale: 1.2 } : {}}
          onClick={() => handleClick(value)}
          onMouseEnter={() => interactive && setHoverRating(value)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={`${interactive ? 'cursor-pointer' : 'cursor-default'}`}
          disabled={!interactive}
        >
          <Star
            className={`${sizeClasses[size]} transition-colors ${
              value <= displayRating
                ? 'fill-[#C8FF00] stroke-[#C8FF00]'
                : 'fill-none stroke-[#1A1A1A] stroke-opacity-30'
            }`}
          />
        </motion.button>
      ))}
      {showValue && (
        <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
