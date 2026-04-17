import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Calendar, User, Tag, Download } from 'lucide-react';
import { Project } from '@/types';

interface ExpandableCardProps {
  project: Project;
}

export default function ExpandableCard({ project }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ borderRadius: 16 }}
      className="bg-white shadow-xl overflow-hidden border border-gray-100 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {project.type}
        </div>
      </div>

      <div className="p-6">
        <motion.h3 layout="position" className="text-xl font-display font-bold mb-2">
          {project.title}
        </motion.h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{project.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 mb-4 rounded-lg border border-brand-primary px-4 py-3 text-sm font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  Download Report
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
