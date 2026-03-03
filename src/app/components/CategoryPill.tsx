import { motion } from 'motion/react';

interface CategoryPillProps {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryPill({ label, icon, active = false, onClick }: CategoryPillProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-full whitespace-nowrap transition-all font-medium
        ${
          active
            ? 'bg-[#0A0A0A] text-white'
            : 'bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#1A1A1A] hover:text-white'
        }
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </motion.button>
  );
}
