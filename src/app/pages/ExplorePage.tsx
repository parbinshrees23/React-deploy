import { useState } from 'react';
import { motion } from 'motion/react';
import { Grid3x3, LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { FilterSidebar } from '../components/FilterSidebar';
import { PhotoCard } from '../components/PhotoCard';
import { SearchBar } from '../components/SearchBar';
import { mockPhotos } from '../data/mockData';

export function ExplorePage() {
  const [viewMode, setViewMode] = useState<'masonry' | 'grid' | 'list'>('masonry');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-[73px] md:pt-[73px]">
      {/* Editorial Header */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-6xl mb-4">Alpine Peaks</h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-8">
            Explore breathtaking mountain photography from peaks around the world. 
            From the Himalayas to the Alps, discover stunning vistas captured by talented photographers.
          </p>
          <SearchBar className="max-w-xl" />
        </div>
      </section>

      {/* Controls Bar */}
      <div className="bg-white border-y border-black/10 sticky top-[73px] z-30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden md:inline">Filters</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'masonry' ? 'bg-[#0A0A0A] text-white' : 'bg-[#F5F5F5] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-[#0A0A0A] text-white' : 'bg-[#F5F5F5] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-[#0A0A0A] text-white' : 'bg-[#F5F5F5] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Filter Sidebar */}
        <motion.div
          initial={false}
          animate={{ x: showFilters ? 0 : -320 }}
          className="hidden md:block fixed left-0 top-[145px] bottom-0 w-72 z-20"
        >
          <FilterSidebar />
        </motion.div>

        {/* Photo Grid */}
        <div
          className={`flex-1 py-8 md:py-12 transition-all ${
            showFilters ? 'md:ml-72' : 'md:ml-0'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            {viewMode === 'masonry' && (
              <>
                <Masonry columnsCount={1} gutter="20px" className="md:hidden">
                  {mockPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} size="medium" />
                  ))}
                </Masonry>
                <Masonry columnsCount={2} gutter="24px" className="hidden md:block lg:hidden">
                  {mockPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} size="medium" />
                  ))}
                </Masonry>
                <Masonry columnsCount={3} gutter="28px" className="hidden lg:block">
                  {mockPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} size="large" />
                  ))}
                </Masonry>
              </>
            )}

            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {mockPhotos.map((photo) => (
                  <div key={photo.id} className="aspect-[4/3]">
                    <PhotoCard photo={photo} size="medium" />
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'list' && (
              <div className="space-y-4">
                {mockPhotos.map((photo) => (
                  <div key={photo.id} className="h-48">
                    <PhotoCard photo={photo} size="small" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}