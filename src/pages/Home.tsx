import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Target, Eye, Compass, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '@/components/Counter';
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

const CORE_VALUES = [
  {
    title: 'Vision',
    description: 'To be a leading center of excellence in computing and information technology, fostering innovation, research, and transformative learning to shape the digital future.',
    icon: Eye,
    color: 'bg-blue-500',
  },
  {
    title: 'Mission',
    description: 'To disseminate knowledge and conduct research in computing and IT with a learner-centric approach.\n- To teach skills such as critical thinking, creativity and innovation, collaboration, communication, technical and digital literacy, flexibility and adaptability, cultural values, and leadership and responsibility.\n- To develop global citizens by educating students on emotional, physical, social, economic, environmental, spiritual dimensions of human growth in addition to intellectual pursuits.\n- To address real-world challenges and to establish the groundwork for entrepreneurship and lifelong learning.',
    icon: Target,
    color: 'bg-purple-500',
  },
  {
    title: 'Objectives',
    description: 'Impart comprehensive engineering education aligned with industry needs.\nPromote research and development activities fostering innovation.\nEncourage sustainable and ethical practices in engineering projects.\nDevelop leadership qualities and lifelong learning habits in students.\nEngage with community and industry to apply knowledge practically.',
    icon: Compass,
    color: 'bg-emerald-500',
  },
];

export default function Home() {
  const deanHeading = 'Welcome to the Department of FCIT';
  const deanMessage = 'Welcome to the Department of FCIT! Our programs foster technical depth, innovation, and hands-on learning for a fast-changing world. Join us to experience collaborative research, expert faculty, and vibrant student life.';

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

  return (
    <div className="pb-20">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/uploads/gallery/tour.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-primary/55" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-accent text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6">
              Empowering Digital Minds
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              FCIT <span className="text-brand-accent italic">Department</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Faculty of Computing and IT (FCIT) will have a transformative impact on society through continual innovation in computing and IT education, research, skill development, creativity, and entrepreneurship
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/schools"
                className="px-10 py-5 bg-white text-brand-primary font-bold rounded-full hover:bg-brand-accent hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 group"
              >
                Explore Schools
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
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
              <h3 className="text-4xl font-display font-bold group-hover:text-white transition-colors mb-2">
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
                A Legacy of <br />
                <span className="text-brand-accent italic">Excellence.</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              To disseminate knowledge and conduct research in computing and IT with learner centric approach - To teach skills such as critical thinking, creativity and innovation, collaboration, communication, technical and digital, flexibility and adaptability, cultural values, and leadership and responsibility

To develop global citizens by educating students on emotional, physical, social, economic, environmental, spiritual dimensions of human growth in addition to intellectual pursuits

- To address real-world challenges and to establish the groundwork for entrepreneurship and lifelong learning Join us in our mission to innovate and excel.
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
            <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs">
              A Message from the Dean
            </span>
            <motion.h2
              variants={headingVariant}
              className="text-5xl md:text-6xl font-display font-bold mt-6"
            >
              {deanHeading.split(' ').map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={wordVariant}
                  className="inline-flex flex-wrap whitespace-nowrap mr-3"
                >
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${word}-${charIndex}`}
                      variants={wordLetterVariant}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              variants={paragraphVariant}
              className="mt-10 text-xl text-gray-600 leading-relaxed flex flex-wrap gap-2"
            >
              {deanMessage.split(' ').map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={wordVariant}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
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
              Shape the <span className="text-brand-accent italic">Future</span> with Us.
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Admissions for the 2026 academic session are now open. Take the first step towards a rewarding career in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-brand-accent text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all shadow-xl text-lg inline-flex items-center justify-center"
              >
                Apply for Admission
              </Link>
              <a
                href="/uploads/gallery/prospectus.pdf"
                download
                className="px-12 py-6 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg backdrop-blur-sm inline-flex items-center justify-center"
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
