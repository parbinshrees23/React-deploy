import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Check } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (tier: 'web' | 'hd' | 'raw') => void;
  photoLocation: string;
}

export function DownloadModal({ isOpen, onClose, onDownload, photoLocation }: DownloadModalProps) {
  const tiers = [
    {
      id: 'web',
      name: 'Web',
      description: 'Perfect for websites and social media',
      resolution: '1920 × 1080',
      price: 'Free',
      features: ['Standard quality', 'Instant download', 'Attribution required'],
    },
    {
      id: 'hd',
      name: 'HD',
      description: 'High definition for print and displays',
      resolution: '3840 × 2160',
      price: 'Free with account',
      features: ['High quality', 'Instant download', 'Attribution required'],
      highlight: true,
    },
    {
      id: 'raw',
      name: 'RAW',
      description: 'Uncompressed for professional editing',
      resolution: 'Original size',
      price: 'Premium',
      features: ['Maximum quality', 'Full editing flexibility', 'No attribution required', 'Commercial license'],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-2">Download {photoLocation}</h2>
                  <p className="text-sm opacity-60">Choose your preferred quality</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <motion.button
                    key={tier.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onDownload(tier.id as 'web' | 'hd' | 'raw')}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      tier.highlight
                        ? 'border-[#C8FF00] bg-[#C8FF00]/5'
                        : 'border-black/10 hover:border-[#C8FF00]'
                    }`}
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{tier.name}</h3>
                        {tier.highlight && (
                          <span className="px-2 py-1 bg-[#C8FF00] text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-60 mb-2">{tier.description}</p>
                      <p className="text-lg font-semibold">{tier.price}</p>
                      <p className="text-xs opacity-50">{tier.resolution}</p>
                    </div>

                    <div className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 stroke-[#C8FF00] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/10">
                      <div className="flex items-center justify-center gap-2 font-semibold">
                        <Download className="w-5 h-5" />
                        Download {tier.name}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#F5F5F5] rounded-lg">
                <p className="text-sm opacity-70">
                  <strong>Attribution:</strong> When using free downloads, please credit the photographer. 
                  Example: "Photo by [Photographer Name] on VIEWS"
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
