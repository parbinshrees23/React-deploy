import { Link } from 'react-router';
import { Menu, User, Bookmark } from 'lucide-react';

export function WebHeader() {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-black/5 z-50">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl tracking-tight">VIEWS</h1>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link to="/explore" className="hover:opacity-70 transition-opacity">
              Explore
            </Link>
            <Link to="/upload" className="hover:opacity-70 transition-opacity">
              Upload
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/saved">
                <button className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/profile">
                <button className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
