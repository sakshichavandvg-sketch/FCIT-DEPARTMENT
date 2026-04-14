import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, GraduationCap, Award, BookOpen, X } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import ClipPathCard from '@/components/ClipPathCard';
import { FACULTY } from '@/constants';
import { Faculty as FacultyType } from '@/types';

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyType | null>(null);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Our Faculty"
        subtitle="Meet the visionary educators and researchers shaping the future of FCIT."
        image="/uploads/gallery/Faculty.jpeg"
      />

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {FACULTY.map((faculty, i) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ClipPathCard
                image={faculty.image}
                title={faculty.name}
                subtitle={faculty.designation}
                onClick={() => setSelectedFaculty(faculty)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faculty Detail View (Zoom-in effect) */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-primary/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Left Section: Photo */}
              <div className="md:w-2/5 relative h-[400px] md:h-auto">
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                  <h2 className="text-3xl font-display font-bold">{selectedFaculty.name}</h2>
                  <p className="text-white/80">{selectedFaculty.designation}</p>
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="md:w-3/5 p-8 md:p-16 overflow-y-auto max-h-[80vh]">
                <div className="hidden md:block mb-10">
                  <h2 className="text-5xl font-display font-bold mb-2">{selectedFaculty.name}</h2>
                  <p className="text-xl text-brand-accent font-medium">{selectedFaculty.designation}</p>
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-2">{selectedFaculty.department}</p>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-brand-accent" />
                      Biography
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedFaculty.bio}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-brand-accent" />
                        Specialization
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.specialization.map(s => (
                          <span key={s} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-brand-accent" />
                        Contact Info
                      </h3>
                      <div className="space-y-3">
                        <a href={`mailto:${selectedFaculty.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-accent transition-colors">
                          <Mail className="w-5 h-5" />
                          <span>{selectedFaculty.email}</span>
                        </a>
                        <a href={`tel:${selectedFaculty.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-accent transition-colors">
                          <Phone className="w-5 h-5" />
                          <span>{selectedFaculty.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-gray-100">
                    <button className="w-full py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-accent transition-all shadow-xl">
                      View Full Profile & Publications
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
