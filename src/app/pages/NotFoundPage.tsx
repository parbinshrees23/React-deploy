import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl mb-4">404</h1>
        <p className="text-2xl mb-8 opacity-70">View not found</p>
        <Link to="/">
          <button className="px-8 py-4 bg-[#0A0A0A] text-white rounded-xl flex items-center gap-2 mx-auto hover:bg-[#1A1A1A] transition-colors">
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
