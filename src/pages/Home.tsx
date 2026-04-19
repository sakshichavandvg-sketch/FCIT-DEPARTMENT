import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Target, Eye, Compass, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '@/components/Counter';
import DownloadBrochureButton from '@/components/DownloadBrochureButton';
import ImageSlider from '@/components/ImageSlider';

const STATS = [
  { label: 'Students', value: 700, suffix: '+', icon: Users },
  { label: 'Faculty', value: 20, suffix: '+', icon: GraduationCap },
  { label: 'Research Papers', value: 5, suffix: '+', icon: BookOpen },
  { label: 'Awards', value: 50, suffix: '+', icon: Trophy },
];

const ABOUT_IMAGES = [
  '/uploads/gallery/photo-1.jpg',
  '/uploads/gallery/photo-2.jpg',
  '/uploads/gallery/photo-3.jpg',
  '/uploads/gallery/photo-4.jpg',
  '/uploads/gallery/photo-5.jpg',
];

const MEMORY_JOURNEY = [
  {
    year: '2023',
    title: 'The Beginning of the Journey',
    caption: 'The first cohort arrived, and the campus began to pulse with possibility.',
    mainImage: '/uploads/gallery/photo-1.jpg',
    secondaryImages: ['/uploads/gallery/photo-2.jpg', '/uploads/gallery/photo-3.jpg'],
  },
  {
    year: '2024',
    title: 'Research Comes Alive',
    caption: 'Early innovation sparks took root in labs, workshops, and student collaborations.',
    mainImage: '/uploads/gallery/photo-4.jpg',
    secondaryImages: ['/uploads/gallery/photo-5.jpg', '/uploads/gallery/photo-1.jpg'],
  },
  {
    year: '2025',
    title: 'Community Momentum',
    caption: 'The campus became a stage for events, shared stories, and meaningful connections.',
    mainImage: '/uploads/gallery/photo-2.jpg',
    secondaryImages: ['/uploads/gallery/photo-3.jpg', '/uploads/gallery/photo-4.jpg'],
  },
  {
    year: '2026',
    title: 'A Future in Focus',
    caption: 'New leaders emerged, ready to carry the spirit of FCIT into tomorrow.',
    mainImage: '/uploads/gallery/photo-5.jpg',
    secondaryImages: ['/uploads/gallery/photo-1.jpg', '/uploads/gallery/photo-2.jpg'],
  },
];

const CORE_VALUES = [
  {
    title: 'Vision',
    description: [
      'To be a leading center of excellence in computing and information technology.',
      'To foster innovation, research, and transformative learning.',
      'To shape the digital future through quality education.'
    ],
    icon: Eye,
    color: 'bg-blue-500',
  },
  {
    title: 'Mission',
    description: [
      'To disseminate knowledge and conduct research in computing and IT with a learner-centric approach.',
      'To develop critical thinking, creativity, innovation, collaboration, and communication skills.',
      'To enhance technical, digital literacy, flexibility, and adaptability.',
      'To nurture cultural values, leadership, and responsibility.',
      'To develop global citizens with emotional, social, environmental, and intellectual growth.'
    ],
    icon: Target,
    color: 'bg-purple-500',
  },
  {
    title: 'Objectives',
    description: [
      'Impart comprehensive engineering education aligned with industry needs.',
      'Promote research and development fostering innovation.',
      'Encourage sustainable and ethical engineering practices.',
      'Develop leadership qualities and lifelong learning habits.',
      'Engage with community and industry for practical application.'
    ],
    icon: Compass,
    color: 'bg-emerald-500',
  },
];

export default function Home() {
  const deanHeading = 'Welcome to the Department of FCIT';
  const deanAuthor = 'Dean, Faculty of Computing and Information Technology';
  const deanMessage = [
    { text: 'Welcome to the Department of FCIT! Our programs foster ' },
    { text: 'technical depth, innovation, and hands-on learning', highlight: true },
    { text: ' for a fast-changing world. Join us to experience collaborative research, expert faculty, and vibrant student life.', highlight: false },
  ];

  const headingVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
  };

  const wordLetterVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  };

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pulseY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pulseOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/uploads/gallery/GM.png"
            alt="GM University campus building"
            className="h-full w-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 py-10 lg:px-8">
            <div className="flex w-full justify-end">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="w-full max-w-2xl p-8 sm:p-12"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-[-0.04em] text-white leading-tight drop-shadow-lg"
                >
                  Welcome To Faculty of Computing and Information Technology
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.25 }}
                  className="mt-6 text-base sm:text-lg text-white leading-relaxed"
                >
                  Preparing leaders in Technology
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="mt-10"
                >
                  <a
                    href="/uploads/gallery/tour.mp4"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-cta inline-flex items-center justify-center rounded-full bg-[#C9A227] px-10 py-4 text-sm font-semibold text-[#081018] shadow-[0_20px_60px_rgba(201,162,39,0.25)] transition duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_26px_80px_rgba(201,162,39,0.32)]"
                  >
                    TAKE A TOUR
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counting Numbers */}
      <section className="relative -mt-24 z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl border border-white/20 text-center group hover:bg-brand-accent transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-4xl sm:text-5xl font-sans font-semibold group-hover:text-white transition-colors mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest group-hover:text-white/70 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section with Image Slider */}
      <section className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs">Excellence in Tech</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tighter">
                A Legacy of <br />Excellence.
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-loose font-light text-justify max-w-4xl mx-auto tracking-wide">
  To disseminate knowledge and conduct research in computing and information technology with a learner-centric approach. 
  To teach essential skills such as critical thinking, creativity and innovation, collaboration, communication, technical 
  and digital proficiency, flexibility and adaptability, cultural values, and leadership and responsibility. 
  To develop global citizens by educating students across emotional, physical, social, economic, environmental, spiritual, 
  and intellectual dimensions of human growth in addition to intellectual pursuits. 
  To address real-world challenges and establish the groundwork for entrepreneurship and lifelong learning. 
  Join us in our mission to innovate and excel.
</p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-brand-primary">35%</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Placement Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-brand-primary">50+</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Research Papers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-[60px] overflow-hidden shadow-2xl border-[20px] border-white">
              <ImageSlider images={ABOUT_IMAGES} />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent rounded-full flex items-center justify-center text-white p-6 text-center shadow-2xl animate-pulse">
              <p className="text-xs font-bold uppercase tracking-widest">Top Ranked Department 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dean Message Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[50px] shadow-2xl"
          >
            <img
              src="/uploads/gallery/Dean.jpg"
              alt="Dean of FCIT"
              className="w-full h-full min-h-[420px] object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-14 rounded-[50px] shadow-2xl border border-gray-100"
          >
            <span className="text-brand-accent font-sans uppercase tracking-[0.4em] text-xs">
  A Message from the Dean
</span>

<motion.h2
  variants={headingVariant}
  className="text-5xl md:text-6xl font-display font-bold mt-6 tracking-tight text-slate-950 leading-tight"
>
  {deanHeading}
</motion.h2>

<p className="mt-4 text-lg font-sans text-slate-700 max-w-2xl">
  {deanAuthor}
</p>

<motion.p
  variants={paragraphVariant}
  className="mt-10 text-base sm:text-lg text-slate-700 leading-[1.75] font-sans max-w-3xl"
>
  {deanMessage.map((segment, index) => (
    <span
      key={index}
      className={segment.highlight ? 'font-semibold' : ''}
    >
      {segment.text}
    </span>
  ))}
</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Memory Spine Section */}
      <section ref={timelineRef} className="relative overflow-hidden py-40 px-6 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.08),transparent_20%),linear-gradient(180deg,#020617_0%,#0b1220_55%,#050812_100%)]" />
        <div className="absolute inset-0 opacity-70 bg-noise-pattern pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80 font-semibold">Memory Spine</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white">Move through moments, not milestones</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-lg leading-relaxed">
              A continuous living path of activation, where each memory blooms into clarity as your scroll carries the pulse forward.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 rounded-full bg-white/10 blur-sm" />
            <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200 via-orange-300 to-amber-100 opacity-30 blur-2xl" />
            <motion.div
              style={{ height: timelineProgress }}
              className="absolute left-1/2 top-0 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-white via-amber-100 to-orange-300 shadow-[0_0_60px_rgba(248,180,48,0.35)]"
            />
            <motion.div
              style={{ top: pulseY, opacity: pulseOpacity }}
              className="absolute left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.4)] ring-8 ring-orange-300/30"
            />

            <div className="relative space-y-28 py-10">
              {MEMORY_JOURNEY.map((memory, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={memory.year} className="relative grid items-center gap-6 lg:grid-cols-[minmax(320px,1fr)_80px_minmax(320px,1fr)]">
                    <div className={`${isLeft ? 'lg:col-start-1 lg:text-right lg:pr-14' : 'lg:col-start-3 lg:text-left lg:pl-14'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 32, scale: 1.08, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="relative inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.35em] text-amber-100 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                      >
                        {memory.year}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 28, scale: 1.08, filter: 'blur(14px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.12 }}
                        className="mt-8 rounded-[36px] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                      >
                        <h3 className="text-3xl font-semibold leading-tight text-white">{memory.title}</h3>
                        <p className="mt-4 max-w-xl text-slate-300 text-lg leading-relaxed font-accent">{memory.caption}</p>
                      </motion.div>
                    </div>

                    <div className="relative flex justify-center lg:order-2">
                      <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)] ring-4 ring-orange-300/20" />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 88 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className={`absolute top-1/2 h-[2px] bg-gradient-to-r ${isLeft ? 'right-full' : 'left-full'} from-transparent via-orange-300 to-transparent`}
                        style={isLeft ? { right: '50%', transform: 'translateY(-50%)' } : { left: '50%', transform: 'translateY(-50%)' }}
                      />
                    </div>

                    <div className={`${isLeft ? 'lg:col-start-3 lg:text-left lg:pl-14' : 'lg:col-start-1 lg:text-right lg:pr-14'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 28, scale: 1.08, filter: 'blur(12px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.16 }}
                        className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/90 shadow-[0_50px_140px_rgba(0,0,0,0.5)]"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_42%)] opacity-0 transition duration-700 group-hover:opacity-100" />
                        <div className="relative grid gap-4 p-5 sm:grid-cols-[1.4fr_0.9fr]">
                          <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl"
                          >
                            <img
                              src={memory.mainImage}
                              alt={`${memory.year} main memory`}
                              className="h-80 w-full object-cover transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          </motion.div>

                          <div className="grid gap-4">
                            {memory.secondaryImages.map((src) => (
                              <motion.div
                                key={src}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl"
                              >
                                <img
                                  src={src}
                                  alt={`${memory.year} memory secondary`}
                                  className="h-36 w-full object-cover transition duration-500"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals Section */}
      <section className="py-40 bg-brand-surface px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Vision, Mission & Objectives</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Our department is committed to academic excellence, innovation, and developing responsible leaders through technology education and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-white p-12 rounded-[50px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${value.color} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
                
                <div className={`w-20 h-20 ${value.color} rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-6">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light whitespace-pre-line">
                  {value.description}
                </p>
                
                <div className="mt-10 flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-brand-primary rounded-[80px] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)]" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Shape the Future with Us.
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Admissions for the 2026 academic session are now open. Take the first step towards a rewarding career in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-[#0B1F3A]   // example navy text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all shadow-xll text-lg inline-flex items-center justify-center"
              >
                Apply for Admission
              </Link>
              <DownloadBrochureButton
                fileUrl="/uploads/gallery/prospectus.pdf"
                fileName="FCIT-Prospectus.pdf"
                buttonText="Download Prospectus"
                buttonClassName="px-12 py-6 bg-[#0B1F3A]   // example navy text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all shadow-xll text-lg inline-flex items-center justify-center"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
