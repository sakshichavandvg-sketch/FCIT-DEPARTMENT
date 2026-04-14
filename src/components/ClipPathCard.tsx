import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ClipPathCardProps {
  image: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

export default function ClipPathCard({ image, title, subtitle, onClick, className }: ClipPathCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer overflow-hidden clip-path-poly bg-white shadow-lg transition-all duration-500',
        className
      )}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-display font-bold mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-white/70 font-medium uppercase tracking-wider">{subtitle}</p>}
        
        <div className="mt-4 h-1 w-0 bg-brand-accent group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}
