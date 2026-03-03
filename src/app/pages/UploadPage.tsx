import { Upload as UploadIcon } from 'lucide-react';

export function UploadPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-[73px] md:pt-[73px] pb-20 md:pb-8 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-6">
            <UploadIcon className="w-10 h-10 stroke-[#C8FF00]" />
          </div>
          <h1 className="text-3xl md:text-4xl mb-4">Upload Your Views</h1>
          <p className="text-lg opacity-70 mb-8">
            Share your stunning photography with the world
          </p>
          <button className="px-8 py-4 bg-[#C8FF00] rounded-xl font-semibold hover:bg-[#b8ef00] transition-colors">
            Select Photos
          </button>
        </div>
      </div>
    </div>
  );
}
