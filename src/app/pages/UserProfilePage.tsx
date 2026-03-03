import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Bookmark, Download, Settings } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { PhotoCard } from '../components/PhotoCard';
import { mockPhotos } from '../data/mockData';

export function UserProfilePage() {
  const [activeTab, setActiveTab] = useState<'uploads' | 'saved' | 'downloads'>('uploads');

  const coverImage = mockPhotos[5].imageUrl;
  const profileImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150';

  const tabs = [
    { id: 'uploads', label: 'Uploads', icon: Camera, count: 24 },
    { id: 'saved', label: 'Saved', icon: Bookmark, count: 156 },
    { id: 'downloads', label: 'Downloads', icon: Download, count: 89 },
  ];

  const displayPhotos = mockPhotos.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-[73px] md:pt-[73px] pb-20 md:pb-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Cover Photo */}
        <div className="relative h-64 md:h-80 bg-[#0A0A0A] overflow-hidden">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>

        {/* Profile Info */}
        <div className="relative px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="mb-4 text-white md:text-[#0A0A0A]">
                <h1 className="text-3xl md:text-4xl mb-2">Rachel Kim</h1>
                <p className="opacity-70">Landscape & Nature Photographer</p>
              </div>
            </div>

            <button className="mb-4 px-6 py-3 bg-[#0A0A0A] text-white rounded-lg flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors">
              <Settings className="w-5 h-5" />
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-white rounded-xl shadow-sm">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold mb-1">24</p>
              <p className="text-sm opacity-60">Uploads</p>
            </div>
            <div className="text-center border-x border-black/10">
              <p className="text-2xl md:text-3xl font-semibold mb-1">156</p>
              <p className="text-sm opacity-60">Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold mb-1">89</p>
              <p className="text-sm opacity-60">Downloads</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-8 border-b border-black/10 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'border-b-2 border-[#C8FF00] text-[#0A0A0A]'
                      : 'text-[#0A0A0A] opacity-50 hover:opacity-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  <span className="px-2 py-0.5 bg-[#F5F5F5] rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <Masonry columnsCount={1} gutter="16px" className="md:hidden">
              {displayPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="medium" />
              ))}
            </Masonry>
            
            <Masonry columnsCount={2} gutter="16px" className="hidden md:block lg:hidden">
              {displayPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="medium" />
              ))}
            </Masonry>
            
            <Masonry columnsCount={3} gutter="20px" className="hidden lg:block">
              {displayPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} size="large" />
              ))}
            </Masonry>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
