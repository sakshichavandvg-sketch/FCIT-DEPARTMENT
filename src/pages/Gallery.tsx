import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, Maximize2 } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import GalleryCarousel from '@/components/GalleryCarousel';
import { GALLERY } from '@/constants';
import { GalleryImage } from '@/types';

const CATEGORIES = ['All', 'Events', 'Campus', 'Workshops', 'Achievements','sports','Ideathon'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Visual Journey"
        subtitle="Capturing the moments that define our vibrant community."
        image="/uploads/gallery/img6.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <GalleryCarousel images={GALLERY.slice(0, 5)} />
      </div>

      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-display font-bold">Photo Archives</h2>
            <p className="text-gray-500">Explore our history through the lens.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-accent text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-accent px-2 py-1 rounded mb-2 inline-block">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-display font-bold">{image.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-white/60 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{image.date}</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-4xl font-display font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-white/60">{selectedImage.category} • {selectedImage.date}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-10 right-10 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              >
                <Maximize2 className="w-6 h-6 rotate-45" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
