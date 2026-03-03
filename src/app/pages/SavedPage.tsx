import Masonry from 'react-responsive-masonry';
import { PhotoCard } from '../components/PhotoCard';
import { mockPhotos } from '../data/mockData';

export function SavedPage() {
  const savedPhotos = mockPhotos.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-[73px] md:pt-[73px] pb-20 md:pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl mb-8">Saved Views</h1>
        
        <Masonry columnsCount={1} gutter="16px" className="md:hidden">
          {savedPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} size="medium" />
          ))}
        </Masonry>
        
        <Masonry columnsCount={2} gutter="16px" className="hidden md:block lg:hidden">
          {savedPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} size="medium" />
          ))}
        </Masonry>
        
        <Masonry columnsCount={3} gutter="20px" className="hidden lg:block">
          {savedPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} size="large" />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
