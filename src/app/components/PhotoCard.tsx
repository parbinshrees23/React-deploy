import { Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { StarRating } from './StarRating';
import { Photo } from '../data/mockData';
import { toast } from 'sonner';

interface PhotoCardProps {
  photo: Photo;
  size?: 'small' | 'medium' | 'large';
}

export function PhotoCard({ photo, size = 'medium' }: PhotoCardProps) {
  const [saved, setSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
    toast.success(saved ? 'Removed from saved' : 'Saved!');
  };

  const heightClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
  };

  return (
    <Link to={`/photo/${photo.id}`}>
      <motion.div
        className={`relative rounded-lg overflow-hidden group cursor-pointer bg-[#F5F5F5]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={photo.imageUrl}
          alt={photo.location}
          className="w-full h-auto object-cover"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-semibold mb-1">{photo.location}</h3>
            <div className="flex items-center justify-between">
              <StarRating rating={photo.rating} size="sm" />
              <span className="text-sm opacity-90">{photo.ratingCount} reviews</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm"
          >
            <Bookmark
              className={`w-5 h-5 transition-colors ${
                saved ? 'fill-[#C8FF00] stroke-[#C8FF00]' : 'stroke-[#0A0A0A]'
              }`}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </Link>
  );
}