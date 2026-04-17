import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, Maximize2 } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import GalleryCarousel from '@/components/GalleryCarousel';
import { GALLERY } from '@/constants';
import { GalleryImage } from '@/types';

const CATEGORIES = ['All', 'Events', 'Campus', 'Workshops', 'Achievements', 'Sports', 'Orientation'];

const FEATURED_MOMENTS = [
  { id: 'fm1', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Tech-carnival-2k26/WhatsApp Image 2026-04-04 at 2.37.28 PM.jpeg', title: 'Tech Carnival', caption: 'Energy and celebration on campus.' },
  { id: 'fm2', url: '/uploads/gallery/FCIT-photo/FCIT-photo/conference_2k25/WhatsApp Image 2026-04-04 at 3.58.10 PM.jpeg', title: 'Conference Day', caption: 'Focused minds and new ideas.' },
  { id: 'fm3', url: '/uploads/gallery/FCIT-photo/FCIT-photo/workshops/WhatsApp Image 2026-04-04 at 4.20.35 PM.jpeg', title: 'Workshop Moment', caption: 'Learning through doing.' },
  { id: 'fm4', url: '/uploads/gallery/FCIT-photo/FCIT-photo/student_corner/WhatsApp Image 2026-04-04 at 5.10.18 PM.jpeg', title: 'Student Life', caption: 'Every connection matters.' },
  { id: 'fm5', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Graduation day/WhatsApp Image 2026-04-04 at 5.17.05 PM.jpeg', title: 'Graduation Day', caption: 'A proud campus milestone.' },
  { id: 'fm6', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Orientation program/WhatsApp Image 2026-04-04 at 3.08.45 PM.jpeg', title: 'Orientation Day', caption: 'New beginnings and fresh ideas.' },
  { id: 'fm7', url: '/uploads/gallery/FCIT-photo/FCIT-photo/sports events/WhatsApp Image 2026-04-04 at 3.26.44 PM.jpeg', title: 'Sports Spirit', caption: 'Teamwork out on the field.' },
  { id: 'fm8', url: '/uploads/gallery/FCIT-photo/FCIT-photo/world cancer day/WhatsApp Image 2026-04-04 at 3.04.20 PM.jpeg', title: 'Community Care', caption: 'Events that bring everyone together.' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFeatured, setActiveFeatured] = useState<string | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Visual Journey"
        subtitle="Capturing the moments that define our vibrant community."
        image="/uploads/gallery/FCIT-photo/FCIT-photo/Graduation day/WhatsApp Image 2026-04-04 at 5.17.05 PM.jpeg"
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
                  loading="lazy"
                  decoding="async"
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

      <section className="mt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-accent font-semibold">Featured Moments</p>
              <h2 className="mt-3 text-4xl font-display font-bold">Expandable Photo Strip</h2>
            </div>
            <p className="max-w-2xl text-gray-500">Hover any moment to expand it and reveal the emotion behind the event.</p>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <div className="flex min-w-[1200px] gap-4">
              {FEATURED_MOMENTS.map((item, index) => {
                const isActive = activeFeatured === item.id;
                const isDimmed = activeFeatured !== null && activeFeatured !== item.id;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                    animate={{
                      flex: isActive ? '2.4 1 0%' : isDimmed ? '0.8 1 0%' : '1 1 140px',
                      opacity: isDimmed ? 0.8 : 1,
                    }}
                    onHoverStart={() => setActiveFeatured(item.id)}
                    onHoverEnd={() => setActiveFeatured(null)}
                    className="group relative min-w-[140px] overflow-hidden rounded-[30px] bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition-all duration-500 ease-in-out"
                  >
                    <motion.img
                      src={item.url}
                      alt={item.title}
                      className="h-[420px] w-full object-cover transition-transform duration-700"
                      animate={{ scale: isActive ? 1.06 : 1 }}
                      whileHover={{ scale: 1.08 }}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Featured</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-200/90 font-accent">{item.caption}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
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
                loading="lazy"
                decoding="async"
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
