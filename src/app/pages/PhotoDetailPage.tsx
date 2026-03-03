import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Download, Share2, MapPin, Mountain, Calendar, Palette, ArrowLeft } from 'lucide-react';
import { StarRating } from '../components/StarRating';
import { PhotographerByline } from '../components/PhotographerByline';
import { DownloadModal } from '../components/DownloadModal';
import { PhotoCard } from '../components/PhotoCard';
import { mockPhotos } from '../data/mockData';
import { toast } from 'sonner';

export function PhotoDetailPage() {
  const { id } = useParams();
  const photo = mockPhotos.find((p) => p.id === id);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [userRating, setUserRating] = useState(0);

  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Photo not found</p>
      </div>
    );
  }

  const similarPhotos = mockPhotos.filter((p) => p.id !== photo.id).slice(0, 4);

  const handleDownload = (tier: 'web' | 'hd' | 'raw') => {
    toast.success(`Downloaded in ${tier.toUpperCase()} quality!`);
    setShowDownloadModal(false);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    toast.success(`Rated ${rating} stars!`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Back Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Link to="/">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        </Link>
      </div>

      {/* Desktop: Split Screen Layout */}
      <div className="hidden md:flex min-h-screen pt-[73px]">
        {/* Left: Image (60%) */}
        <div className="w-[60%] sticky top-[73px] h-[calc(100vh-73px)] bg-[#0A0A0A]">
          <img
            src={photo.imageUrl}
            alt={photo.location}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Info (40%) */}
        <div className="w-[40%] overflow-y-auto">
          <div className="p-8 lg:p-12">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 opacity-60 hover:opacity-100 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              Back to gallery
            </Link>

            <h1 className="text-4xl lg:text-5xl mb-4">{photo.location}</h1>
            
            <div className="mb-8">
              <PhotographerByline
                name={photo.photographer}
                avatar={photo.photographerAvatar}
                size="lg"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-[#F5F5F5] rounded-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 stroke-[#C8FF00]" />
                <div>
                  <p className="text-sm opacity-60 mb-1">Coordinates</p>
                  <p className="font-mono text-sm">{photo.coordinates}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mountain className="w-5 h-5 mt-1 stroke-[#C8FF00]" />
                <div>
                  <p className="text-sm opacity-60 mb-1">Altitude</p>
                  <p className="font-semibold">{photo.altitude}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 mt-1 stroke-[#C8FF00]" />
                <div>
                  <p className="text-sm opacity-60 mb-1">Season</p>
                  <p className="font-semibold">{photo.season}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 mt-1 stroke-[#C8FF00]" />
                <div>
                  <p className="text-sm opacity-60 mb-1">Tone</p>
                  <p className="font-semibold">{photo.colorTone}</p>
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Rate this view</h3>
              <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
                <StarRating
                  rating={userRating || photo.rating}
                  onRate={handleRate}
                  interactive
                  size="lg"
                />
                <div className="text-sm">
                  <p className="font-semibold">{photo.rating.toFixed(1)}</p>
                  <p className="opacity-60">{photo.ratingCount.toLocaleString()} ratings</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#F5F5F5] rounded-full text-sm hover:bg-[#0A0A0A] hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDownloadModal(true)}
                className="w-full py-4 bg-[#C8FF00] rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-[#b8ef00] transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
              </motion.button>
              <p className="text-sm opacity-60 mt-2 text-center">
                {photo.downloadCount.toLocaleString()} downloads
              </p>
            </div>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#F5F5F5] rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share
            </motion.button>

            {/* Similar Views */}
            <div className="mt-12">
              <h3 className="text-2xl mb-6">Similar Views</h3>
              <div className="grid grid-cols-2 gap-4">
                {similarPhotos.map((similarPhoto) => (
                  <PhotoCard key={similarPhoto.id} photo={similarPhoto} size="small" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="md:hidden">
        <div className="relative h-screen">
          <img
            src={photo.imageUrl}
            alt={photo.location}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl mb-3">{photo.location}</h1>
            <PhotographerByline
              name={photo.photographer}
              avatar={photo.photographerAvatar}
              size="md"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 bg-[#F5F5F5] rounded-xl text-sm">
            <div>
              <p className="opacity-60 mb-1">Coordinates</p>
              <p className="font-mono text-xs">{photo.coordinates}</p>
            </div>
            <div>
              <p className="opacity-60 mb-1">Altitude</p>
              <p className="font-semibold">{photo.altitude}</p>
            </div>
            <div>
              <p className="opacity-60 mb-1">Season</p>
              <p className="font-semibold">{photo.season}</p>
            </div>
            <div>
              <p className="opacity-60 mb-1">Tone</p>
              <p className="font-semibold">{photo.colorTone}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Rate this view</h3>
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <StarRating
                rating={userRating || photo.rating}
                onRate={handleRate}
                interactive
                size="md"
              />
              <div className="text-sm">
                <p className="font-semibold">{photo.rating.toFixed(1)}</p>
                <p className="opacity-60">{photo.ratingCount.toLocaleString()} ratings</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {photo.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-[#F5F5F5] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDownloadModal(true)}
            className="w-full py-4 bg-[#C8FF00] rounded-xl flex items-center justify-center gap-3 font-semibold"
          >
            <Download className="w-5 h-5" />
            Download
          </motion.button>

          <div className="pt-6 border-t border-black/10">
            <h3 className="text-xl mb-4">Similar Views</h3>
            <div className="grid grid-cols-2 gap-3">
              {similarPhotos.map((similarPhoto) => (
                <PhotoCard key={similarPhoto.id} photo={similarPhoto} size="small" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onDownload={handleDownload}
        photoLocation={photo.location}
      />
    </div>
  );
}
