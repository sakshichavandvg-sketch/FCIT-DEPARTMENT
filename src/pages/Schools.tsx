import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Download, Info, ArrowRight, Code, Monitor, ShieldCheck, Cloud, BarChart3 } from 'lucide-react';
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

const LEARNING_PILLARS = [
  { title: 'Programming', subtitle: 'C, Java, Python', icon: Code },
  { title: 'Web Development', subtitle: 'HTML, CSS, JavaScript', icon: Monitor },
  { title: 'AI & Data Analytics', subtitle: 'Machine learning & visualization', icon: BarChart3 },
  { title: 'Cybersecurity', subtitle: 'Secure systems & risk defense', icon: ShieldCheck },
  { title: 'Cloud Computing', subtitle: 'Modern cloud architecture', icon: Cloud },
];

const CAREER_PATHS = [
  { title: 'Software Developer', description: 'Build responsive applications for industry.', icon: Code },
  { title: 'Data Analyst', description: 'Turn datasets into strategic insight.', icon: BarChart3 },
  { title: 'Web Developer', description: 'Create engaging digital experiences.', icon: Monitor },
  { title: 'Cybersecurity Specialist', description: 'Protect systems against evolving threats.', icon: ShieldCheck },
];

export default function Schools() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Our Schools"
        subtitle="Specialized centers of excellence in Computer Applications and Computer Science."
        image="/uploads/gallery/image_e00f9047.png"
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
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[36px] shadow-[0_40px_120px_rgba(15,23,42,0.16)]"
            >
              <img
                src={selectedCourse.image}
                alt={selectedCourse.name}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="inline-flex rounded-full bg-amber-100/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-800 backdrop-blur-sm">
                  Course Preview
                </div>
                <h3 className="mt-6 text-4xl font-display font-bold tracking-tight text-white">
                  {selectedCourse.name === 'BCA' ? 'Bachelor of Computer Applications (BCA)' : selectedCourse.name}
                </h3>
                <p className="mt-4 max-w-xl text-sm text-slate-200 leading-relaxed">
                  {selectedCourse.name === 'BCA'
                    ? 'Build real-world tech skills for the future with practice-driven labs, industry-ready projects, and an outcome-focused undergraduate path.'
                    : selectedCourse.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
              className="space-y-8 rounded-[36px] bg-white p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]"
            >
              <div className="space-y-5">
                <span className="inline-flex items-center rounded-full bg-amber-100/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-amber-800">
                  {selectedCourse.level} • {selectedCourse.duration}
                </span>
                <h3 className="text-4xl font-display font-bold text-slate-950">Build real-world tech skills for the future</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  This premium program combines application development, analytics, cybersecurity, and cloud foundations to prepare students for high-demand technology careers.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-3xl bg-slate-950 p-5 text-center text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Duration</p>
                  <p className="mt-4 text-2xl font-bold">{selectedCourse.duration}</p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-5 text-center text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Level</p>
                  <p className="mt-4 text-2xl font-bold">{selectedCourse.level}</p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-5 text-center text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mode</p>
                  <p className="mt-4 text-2xl font-bold">Full Time</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">What you will learn</p>
                  <h4 className="mt-3 text-3xl font-display font-bold text-slate-950">Skills that lead to career impact</h4>
                </div>
                <p className="max-w-2xl text-slate-500 leading-relaxed">
                  Practical, scannable learning paths grounded in programming, web development, AI, security, and cloud systems.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {LEARNING_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      whileHover={{ y: -6 }}
                      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h5 className="mt-5 text-xl font-semibold text-slate-950">{pillar.title}</h5>
                      <p className="mt-3 text-slate-500 leading-relaxed">{pillar.subtitle}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">Career Outcomes</p>
                  <h4 className="mt-3 text-3xl font-display font-bold text-slate-950">Roles you can step into</h4>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {CAREER_PATHS.map((career) => {
                  const Icon = career.icon;
                  return (
                    <motion.div
                      key={career.title}
                      whileHover={{ y: -6 }}
                      className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-transform duration-300"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h5 className="mt-5 text-2xl font-semibold text-slate-950">{career.title}</h5>
                      <p className="mt-3 text-slate-500 leading-relaxed">{career.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-amber-600 font-semibold">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                to="/contact"
                className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-blue-600 px-10 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Apply Now
              </Link>
              {selectedCourse?.documentUrl && selectedCourse.documentUrl !== '#' ? (
                <a
                  href={selectedCourse.documentUrl}
                  download
                  className="inline-flex min-h-[64px] items-center justify-center rounded-full border border-slate-200 bg-white px-10 text-base font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <Download className="h-5 w-5 text-blue-600" />
                  Download Brochure
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex min-h-[64px] w-full items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-10 text-base font-semibold text-slate-400"
                >
                  <Download className="h-5 w-5" />
                  Download Brochure
                </button>
              )}
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
