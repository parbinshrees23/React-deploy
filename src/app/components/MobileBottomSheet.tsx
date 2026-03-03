import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MobileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MobileBottomSheet({ isOpen, onClose, children }: MobileBottomSheetProps) {
  const [dragY, setDragY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) {
                onClose();
              }
            }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white z-10 pt-4 pb-2">
              <div className="w-12 h-1.5 bg-[#1A1A1A]/20 rounded-full mx-auto mb-4" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-6 pb-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
