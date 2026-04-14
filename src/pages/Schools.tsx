import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Download, Info, ArrowRight } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import ClipPathCard from '@/components/ClipPathCard';
import Modal from '@/components/Modal';
import { SCHOOLS } from '@/constants';
import { Course } from '@/types';

function groupCourses(courses: Course[]) {
  return {
    Undergraduate: courses.filter((course) => course.level === 'Undergraduate'),
    Postgraduate: courses.filter((course) => course.level === 'Postgraduate'),
  };
}

export default function Schools() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Our Schools"
        subtitle="Specialized centers of excellence in Computer Applications and Computer Science."
        image="/uploads/gallery/gmu.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SCHOOLS.map((school) => (
            <div key={school.id} id={school.id} className="space-y-8">
              <ClipPathCard
                image={school.image}
                title={school.name}
                subtitle={school.shortName}
                className="aspect-video"
              />
              
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-3xl font-display font-bold mb-6">About {school.shortName}</h3>
                <p className="text-gray-600 mb-10 leading-relaxed">{school.description}</p>
                
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6 text-brand-accent" />
                  Available Courses
                </h4>
                
                <div className="space-y-10">
                  {Object.entries(groupCourses(school.courses)).map(([level, courses]) => (
                    courses.length > 0 ? (
                      <div key={level} className="space-y-4">
                        <h5 className="text-sm font-bold uppercase tracking-[0.35em] text-brand-accent">
                          {level} Courses
                        </h5>
                        <div className="space-y-4">
                          {courses.map((course) => (
                            <motion.div
                              key={course.id}
                              whileHover={{ x: 10 }}
                              className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between group cursor-pointer"
                              onClick={() => setSelectedCourse(course)}
                            >
                              <div>
                                <p className="font-bold text-brand-primary">{course.name}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{course.level} • {course.duration}</p>
                              </div>
                              <div className="flex gap-2">
                                <button className="p-2 bg-white text-brand-accent rounded-lg shadow-sm hover:bg-brand-accent hover:text-white transition-all">
                                  <Info className="w-5 h-5" />
                                </button>
                                {course.documentUrl && course.documentUrl !== '#' ? (
                                  <a
                                    href={course.documentUrl}
                                    download
                                    onClick={(event) => event.stopPropagation()}
                                    className="p-2 bg-white text-brand-accent rounded-lg shadow-sm hover:bg-brand-accent hover:text-white transition-all inline-flex items-center justify-center"
                                  >
                                    <Download className="w-5 h-5" />
                                  </a>
                                ) : (
                                  <button
                                    disabled
                                    className="p-2 bg-gray-100 text-gray-400 rounded-lg shadow-sm cursor-not-allowed"
                                  >
                                    <Download className="w-5 h-5" />
                                  </button>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : null
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      <Modal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        title={selectedCourse?.name}
      >
        {selectedCourse && (
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[40px] shadow-xl">
              <div className="relative min-h-[280px] bg-gray-100">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 p-8">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/80">Course Preview</span>
                  <h3 className="mt-4 text-4xl font-display font-bold text-white">{selectedCourse.name}</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Duration</p>
                <p className="text-xl font-display font-bold">{selectedCourse.duration}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Level</p>
                <p className="text-xl font-display font-bold">{selectedCourse.level}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Format</p>
                <p className="text-xl font-display font-bold">Full Time</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold">Course Overview</h3>
              <p className="text-gray-600 leading-relaxed">{selectedCourse.description}</p>
              <p className="text-gray-600 leading-relaxed">
                This program is designed to provide students with a comprehensive understanding of the subject matter, combining theoretical knowledge with practical applications. Students will have access to state-of-the-art labs and mentorship from experienced faculty members.
              </p>
            </div>

            <div className="pt-6 flex flex-col md:flex-row gap-4">
              {selectedCourse?.documentUrl && selectedCourse.documentUrl !== '#' ? (
              <a
                href={selectedCourse.documentUrl}
                download
                className="flex-1 py-4 bg-brand-accent text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary transition-all"
              >
                <Download className="w-5 h-5" />
                Download Syllabus
              </a>
            ) : (
              <button
                disabled
                className="flex-1 py-4 bg-gray-200 text-gray-500 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                Download Syllabus
              </button>
            )}
            <Link
              to="/contact"
              className="flex-1 py-4 border-2 border-brand-primary text-brand-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all"
            >
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
            </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
