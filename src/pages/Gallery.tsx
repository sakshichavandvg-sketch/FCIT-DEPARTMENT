import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Maximize2 } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import GalleryCarousel from '@/components/GalleryCarousel';
import { GALLERY } from '@/constants';
import { GalleryImage } from '@/types';

const CATEGORIES = ['All', 'Events', 'Campus', 'Workshops', 'Achievements', 'Sports', 'Orientation'];

const FEATURED_MOMENTS = [
  { id: 'fm1', url: '/uploads/gallery/FCIT-photo/FCIT-photo/GMS-TRIP/WhatsApp Image 2026-04-04 at 2.55.41 PM (1).jpeg', title: 'GMS Trip', caption: 'A memorable learning journey outside the classroom.' },
  { id: 'fm2', url: '/uploads/gallery/FCIT-photo/FCIT-photo/parents_meeting/WhatsApp Image 2026-04-04 at 4.40.40 PM (1).jpeg', title: 'Parent Meet', caption: 'Building stronger bonds with families and students.' },
  { id: 'fm3', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Tech-carnival-2k26/WhatsApp Image 2026-04-04 at 2.37.30 PM.jpeg', title: 'Carnival Energy', caption: 'Hands-on innovation and campus excitement.' },
  { id: 'fm4', url: '/uploads/gallery/FCIT-photo/FCIT-photo/ideathon/WhatsApp Image 2026-04-04 at 3.22.28 PM.jpeg', title: 'Idea Sprint', caption: 'Students pitching creative solutions under pressure.' },
  { id: 'fm5', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Ivestiture-ceremony/WhatsApp Image 2026-04-04 at 2.53.30 PM.jpeg', title: 'Investiture', caption: 'Campus leaders taking charge with pride.' },
  { id: 'fm6', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Opeartion sindoor/WhatsApp Image 2026-04-04 at 2.57.13 PM.jpeg', title: 'Community Service', caption: 'A heartfelt outreach initiative from FCIT students.' },
  { id: 'fm7', url: '/uploads/gallery/FCIT-photo/FCIT-photo/NSS/WhatsApp Image 2026-04-04 at 4.15.29 PM.jpeg', title: 'NSS Drive', caption: 'Service, solidarity, and campus impact in action.' },
  { id: 'fm8', url: '/uploads/gallery/FCIT-photo/FCIT-photo/women_empowermentcell/WhatsApp Image 2026-04-04 at 4.58.05 PM.jpeg', title: 'Empowerment Rally', caption: 'Celebrating leadership, voice, and community strength.' },
  { id: 'fm9', url: '/uploads/gallery/FCIT-photo/FCIT-photo/CASP/WhatsApp Image 2026-04-04 at 4.33.23 PM.jpeg', title: 'CASP Gathering', caption: 'Cross-school collaboration and engagement.' },
  { id: 'fm10', url: '/uploads/gallery/FCIT-photo/FCIT-photo/faculty_corner/WhatsApp Image 2026-04-04 at 4.13.14 PM.jpeg', title: 'Faculty Forum', caption: 'Experts exchanging ideas in a candid moment.' },
  { id: 'fm11', url: '/uploads/gallery/FCIT-photo/FCIT-photo/NSS/WhatsApp Image 2026-04-04 at 4.40.49 PM.jpeg', title: 'NSS Action', caption: 'Volunteers making a visible impact across campus.' },
  { id: 'fm12', url: '/uploads/gallery/FCIT-photo/FCIT-photo/parents_meeting/WhatsApp Image 2026-04-04 at 4.42.35 PM (1).jpeg', title: 'Parent Engagement', caption: 'A thoughtful moment from our parent-student discussions.' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const step = 1.2;
    const interval = window.setInterval(() => {
      if (isAutoScrollPaused) return;
      if (!container) return;

      container.scrollLeft += step;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, [isAutoScrollPaused]);

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
              <p className="text-sm uppercase tracking-[0.35em] text-brand-accent font-semibold">Flip Card Gallery</p>
              <h2 className="mt-3 text-4xl font-display font-bold">Interactive Horizontal Showcase</h2>
            </div>
            <p className="max-w-2xl text-gray-500">Click any card to flip it and reveal the back side content.</p>
          </div>

          <div
            ref={scrollRef}
            className="relative overflow-x-auto no-scrollbar py-6"
            style={{ perspective: '1500px' }}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
          >
            <div className="flex gap-6 min-w-[1000px] px-2">
              {FEATURED_MOMENTS.map((item) => {
                const isFlipped = flippedCard === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFlippedCard(isFlipped ? null : item.id)}
                    className="relative w-[280px] h-[420px] flex-shrink-0 rounded-[28px] shadow-[0_30px_70px_rgba(15,23,42,0.18)] overflow-hidden border border-white/10 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03]"
                    style={{ perspective: '1500px' }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.65s ease', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                    >
                      <div
                        className="absolute inset-0 rounded-[28px] overflow-hidden"
                        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <p className="text-xs uppercase tracking-[0.35em] text-brand-accent font-semibold">{item.title}</p>
                          <p className="mt-2 max-w-[220px] text-sm text-white/90">{item.caption}</p>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-[28px] bg-slate-950 text-white p-6 flex flex-col justify-between"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }}
                      >
                        <div>
                          <p className="text-brand-accent uppercase tracking-[0.35em] text-xs font-semibold">More details</p>
                          <h3 className="mt-4 text-2xl font-display font-bold">{item.title}</h3>
                          <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.caption} Experience the story behind this moment with a richer perspective.</p>
                        </div>
                        <div className="text-xs text-white/60">
                          <p className="mb-2">Tap again to flip back.</p>
                          <p className="font-semibold">Location: {item.title}</p>
                        </div>
                      </div>
                    </div>
                  </button>
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
