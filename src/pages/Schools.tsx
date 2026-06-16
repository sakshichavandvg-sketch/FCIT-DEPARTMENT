import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Download, Info, ArrowRight, Code, Monitor, ShieldCheck, Cloud, BarChart3, Mail, Phone, BookOpen, X, Lock, Brain, Zap, Database, Network, Terminal } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import ClipPathCard from '@/components/ClipPathCard';
import DownloadBrochureButton from '@/components/DownloadBrochureButton';
import Modal from '@/components/Modal';
import { SCHOOLS } from '@/constants';
import { Course, Leadership } from '@/types';

function groupCourses(courses: Course[]) {
  return {
    Undergraduate: courses.filter((course) => course.level === 'Undergraduate'),
    Postgraduate: courses.filter((course) => course.level === 'Postgraduate'),
  };
}

// Dynamic course-specific content mapping
const COURSE_CONTENT: Record<string, { learning: Array<{ title: string; subtitle: string; icon: any }>; careers: Array<{ title: string; description: string; icon: any }> }> = {
  // BCA - Undergraduate Computer Applications
  'bca': {
    learning: [
      { title: 'Core Programming', subtitle: 'C, Java, Python fundamentals', icon: Code },
      { title: 'Web Development', subtitle: 'HTML, CSS, JavaScript, responsive design', icon: Monitor },
      { title: 'Database Systems', subtitle: 'SQL, MySQL, database design', icon: Database },
      { title: 'Software Development', subtitle: 'OOP, design patterns, development cycles', icon: Terminal },
      { title: 'Cloud Basics', subtitle: 'Cloud computing fundamentals & deployment', icon: Cloud },
    ],
    careers: [
      { title: 'Jr. Software Developer', description: 'Build applications using modern programming languages.', icon: Code },
      { title: 'Web Developer', description: 'Create responsive web applications and digital experiences.', icon: Monitor },
      { title: 'Database Administrator', description: 'Manage and optimize databases for performance.', icon: Database },
      { title: 'QA Engineer', description: 'Ensure software quality through systematic testing.', icon: Zap },
    ]
  },
  
  // BCA AI & Data Analytics
  'bca-ai': {
    learning: [
      { title: 'Python Programming', subtitle: 'Advanced Python for data science', icon: Code },
      { title: 'Machine Learning', subtitle: 'ML algorithms, supervised & unsupervised learning', icon: Brain },
      { title: 'Data Analytics', subtitle: 'Statistical analysis, insights extraction', icon: BarChart3 },
      { title: 'Data Visualization', subtitle: 'Tableau, Power BI, matplotlib, seaborn', icon: Monitor },
      { title: 'Big Data Basics', subtitle: 'Hadoop, Spark fundamentals', icon: Cloud },
    ],
    careers: [
      { title: 'Data Analyst', description: 'Transform raw data into actionable business insights.', icon: BarChart3 },
      { title: 'ML Engineer', description: 'Build and deploy machine learning models at scale.', icon: Brain },
      { title: 'Business Intelligence Developer', description: 'Create data dashboards and reporting solutions.', icon: Monitor },
      { title: 'Analytics Engineer', description: 'Bridge data engineering and analytics practices.', icon: Zap },
    ]
  },
  
  // BCA Cybersecurity
  'bca-cyber': {
    learning: [
      { title: 'Cybersecurity Fundamentals', subtitle: 'Security principles, threat landscape', icon: ShieldCheck },
      { title: 'Network Security', subtitle: 'Firewalls, IDS, network protocols', icon: Network },
      { title: 'Ethical Hacking', subtitle: 'Penetration testing, vulnerability assessment', icon: Lock },
      { title: 'Cryptography', subtitle: 'Encryption, digital signatures, PKI', icon: Lock },
      { title: 'Incident Response', subtitle: 'Detection, analysis, and remediation', icon: Zap },
    ],
    careers: [
      { title: 'Security Analyst', description: 'Monitor and defend systems against cyber threats.', icon: ShieldCheck },
      { title: 'Penetration Tester', description: 'Identify vulnerabilities before attackers do.', icon: Lock },
      { title: 'SOC Analyst', description: 'Work in Security Operations Center to protect infrastructure.', icon: Terminal },
      { title: 'Security Engineer', description: 'Design and implement security solutions.', icon: ShieldCheck },
    ]
  },

  // BCA Data Science
  'bca-data': {
    learning: [
      { title: 'Python & R', subtitle: 'Programming for data science', icon: Code },
      { title: 'Statistics & Mathematics', subtitle: 'Probability, hypothesis testing, regression', icon: BarChart3 },
      { title: 'Data Wrangling', subtitle: 'Data cleaning, transformation, preparation', icon: Database },
      { title: 'Machine Learning Models', subtitle: 'Classification, clustering, prediction', icon: Brain },
      { title: 'Data Communication', subtitle: 'Visualization and storytelling with data', icon: Monitor },
    ],
    careers: [
      { title: 'Data Scientist', description: 'Extract insights and build predictive models from data.', icon: Brain },
      { title: 'Analytics Scientist', description: 'Apply scientific methods to business analytics.', icon: BarChart3 },
      { title: 'Data Engineer', description: 'Build data pipelines and infrastructure.', icon: Database },
      { title: 'Business Analyst', description: 'Use data to drive business decisions and strategy.', icon: Monitor },
    ]
  },

  // MCA - Postgraduate Computer Applications
  'mca': {
    learning: [
      { title: 'Advanced Software Engineering', subtitle: 'System design, architecture patterns', icon: Code },
      { title: 'Enterprise Development', subtitle: 'Spring, microservices, enterprise frameworks', icon: Terminal },
      { title: 'Full Stack Development', subtitle: 'Frontend, backend, database integration', icon: Monitor },
      { title: 'DevOps & CI/CD', subtitle: 'Docker, Kubernetes, deployment pipelines', icon: Cloud },
      { title: 'Performance Optimization', subtitle: 'Scalability, caching, optimization techniques', icon: Zap },
    ],
    careers: [
      { title: 'Senior Software Engineer', description: 'Lead technical projects and mentor development teams.', icon: Code },
      { title: 'Solutions Architect', description: 'Design scalable solutions for complex problems.', icon: Terminal },
      { title: 'DevOps Engineer', description: 'Manage infrastructure and deployment pipelines.', icon: Cloud },
      { title: 'Tech Lead', description: 'Guide technical direction and code quality standards.', icon: Monitor },
    ]
  },

  // MCA AI & Data Analytics
  'mca-ai': {
    learning: [
      { title: 'Deep Learning', subtitle: 'Neural networks, CNNs, RNNs, transformers', icon: Brain },
      { title: 'NLP & Computer Vision', subtitle: 'Text processing, image recognition, AI applications', icon: Monitor },
      { title: 'Advanced ML Algorithms', subtitle: 'Ensemble methods, reinforcement learning', icon: Brain },
      { title: 'Big Data & Distributed Systems', subtitle: 'Spark, distributed ML, scalable analytics', icon: Cloud },
      { title: 'ML Operations', subtitle: 'Model deployment, monitoring, MLOps best practices', icon: Zap },
    ],
    careers: [
      { title: 'Senior ML Engineer', description: 'Design and deploy advanced ML systems at scale.', icon: Brain },
      { title: 'AI Research Engineer', description: 'Develop cutting-edge AI algorithms and solutions.', icon: Brain },
      { title: 'Data Scientist Lead', description: 'Lead data science initiatives and model development.', icon: BarChart3 },
      { title: 'Analytics Architect', description: 'Design enterprise analytics platforms.', icon: Monitor },
    ]
  },

  // MCA Cybersecurity
  'mca-cyber': {
    learning: [
      { title: 'Advanced Threat Analysis', subtitle: 'APT, forensics, malware analysis', icon: ShieldCheck },
      { title: 'Cloud Security', subtitle: 'AWS, Azure security, cloud compliance', icon: Cloud },
      { title: 'Application Security', subtitle: 'OWASP, secure coding, vulnerability management', icon: Lock },
      { title: 'Compliance & Governance', subtitle: 'ISO 27001, GDPR, security frameworks', icon: Terminal },
      { title: 'Incident Management', subtitle: 'Forensics, incident response, recovery', icon: Zap },
    ],
    careers: [
      { title: 'Security Architect', description: 'Design comprehensive security strategies.', icon: ShieldCheck },
      { title: 'Threat Intelligence Officer', description: 'Analyze threats and advise on defensive measures.', icon: Lock },
      { title: 'Security Manager', description: 'Lead security teams and oversee compliance.', icon: Terminal },
      { title: 'AppSec Engineer', description: 'Secure applications through the development lifecycle.', icon: Code },
    ]
  },

  // MCA Data Science
  'mca-data': {
    learning: [
      { title: 'Advanced Statistical Methods', subtitle: 'Bayesian analysis, time series, causal inference', icon: BarChart3 },
      { title: 'Big Data Technologies', subtitle: 'Hadoop, Spark, distributed computing', icon: Cloud },
      { title: 'Feature Engineering', subtitle: 'Domain-driven features, advanced techniques', icon: Brain },
      { title: 'MLOps & Production ML', subtitle: 'Model deployment, versioning, monitoring', icon: Terminal },
      { title: 'Business Analytics', subtitle: 'Strategic analytics, ROI analysis, forecasting', icon: Monitor },
    ],
    careers: [
      { title: 'Principal Data Scientist', description: 'Lead data science strategies and innovation.', icon: Brain },
      { title: 'Data Engineering Manager', description: 'Oversee data infrastructure and pipelines.', icon: Cloud },
      { title: 'Analytics Director', description: 'Drive analytics vision across the organization.', icon: BarChart3 },
      { title: 'Quantitative Analyst', description: 'Apply advanced analytics to finance and trading.', icon: Monitor },
    ]
  },

  // MSc Computer Science
  'msc-cs': {
    learning: [
      { title: 'Advanced Algorithms', subtitle: 'Complexity analysis, optimization techniques', icon: Code },
      { title: 'System Design', subtitle: 'Architecture, scalability, distributed systems', icon: Terminal },
      { title: 'Formal Methods', subtitle: 'Verification, formal specifications', icon: Brain },
      { title: 'Research Methodology', subtitle: 'Academic research, paper writing, publications', icon: BookOpen },
      { title: 'Emerging Technologies', subtitle: 'Blockchain, IoT, quantum computing', icon: Zap },
    ],
    careers: [
      { title: 'Research Scholar', description: 'Pursue doctoral research in computer science.', icon: Brain },
      { title: 'Systems Architect', description: 'Design large-scale systems and infrastructure.', icon: Terminal },
      { title: 'Research Engineer', description: 'Conduct research and develop innovative solutions.', icon: Code },
      { title: 'Academic Professional', description: 'Teach and conduct research in universities.', icon: BookOpen },
    ]
  },

  // MSc Cybersecurity
  'msc-cyber': {
    learning: [
      { title: 'Advanced Cryptography', subtitle: 'Post-quantum crypto, homomorphic encryption', icon: Lock },
      { title: 'Security Research', subtitle: 'Vulnerability research, academic publications', icon: ShieldCheck },
      { title: 'Zero Trust Architecture', subtitle: 'Modern security models, implementation', icon: Network },
      { title: 'Regulatory Frameworks', subtitle: 'International security standards, compliance', icon: Terminal },
      { title: 'Emerging Threats', subtitle: 'AI-based attacks, new threat vectors', icon: Zap },
    ],
    careers: [
      { title: 'Security Researcher', description: 'Conduct cybersecurity research and publish findings.', icon: ShieldCheck },
      { title: 'Chief Security Officer', description: 'Lead organizational security strategy and vision.', icon: Lock },
      { title: 'Security Consultant', description: 'Advise organizations on security frameworks.', icon: Terminal },
      { title: 'Compliance Officer', description: 'Ensure regulatory compliance and governance.', icon: Monitor },
    ]
  },

  // MSc AI & Data Analytics
  'msc-ai': {
    learning: [
      { title: 'Research in AI', subtitle: 'Papers, novel algorithms, academic contributions', icon: Brain },
      { title: 'Advanced Deep Learning', subtitle: 'Specialized architectures, research frontiers', icon: Brain },
      { title: 'AI Ethics & Responsible AI', subtitle: 'Bias, fairness, interpretability, governance', icon: Zap },
      { title: 'Large Language Models', subtitle: 'Transformers, LLMs, prompt engineering', icon: Monitor },
      { title: 'Thesis & Publication', subtitle: 'Original research contribution, peer review', icon: BookOpen },
    ],
    careers: [
      { title: 'AI Research Scientist', description: 'Publish research and advance AI frontiers.', icon: Brain },
      { title: 'ML Research Engineer', description: 'Develop novel machine learning techniques.', icon: Brain },
      { title: 'Research Director', description: 'Lead AI research labs and initiatives.', icon: Terminal },
      { title: 'PhD Candidate', description: 'Pursue doctoral studies in AI/ML/DS.', icon: BookOpen },
    ]
  },
};

// Fallback defaults for any unmapped courses
const DEFAULT_LEARNING_PILLARS = [
  { title: 'Programming', subtitle: 'Core programming languages', icon: Code },
  { title: 'Web Development', subtitle: 'Modern web technologies', icon: Monitor },
  { title: 'AI & Data Analytics', subtitle: 'Data-driven insights', icon: BarChart3 },
  { title: 'Cybersecurity', subtitle: 'Security & defense', icon: ShieldCheck },
  { title: 'Cloud Computing', subtitle: 'Cloud architecture', icon: Cloud },
];

const DEFAULT_CAREER_PATHS = [
  { title: 'Software Developer', description: 'Build applications across platforms.', icon: Code },
  { title: 'Data Analyst', description: 'Extract insights from complex datasets.', icon: BarChart3 },
  { title: 'Security Professional', description: 'Protect systems and data.', icon: ShieldCheck },
  { title: 'Cloud Engineer', description: 'Design and manage cloud infrastructure.', icon: Cloud },
];

export default function Schools() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLeadership, setSelectedLeadership] = useState<Leadership | null>(null);

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Our Schools"
        subtitle="Specialized centers of excellence in Computer Applications and Computer Science."
        image="/uploads/gallery/km.png"
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
              
              {/* Leadership Section */}
              {(school.director || school.hod) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {school.director && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedLeadership(school.director!)}
                    >
                      <div className="relative h-[320px] overflow-visible shadow-lg hover:shadow-xl transition-shadow" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%)' }}>
                        <img
                          src={school.director.image}
                          alt={school.director.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="inline-block px-3 py-1 bg-brand-accent/90 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            Director
                          </div>
                          <h4 className="text-xl font-bold mb-1">{school.director.name}</h4>
                          <p className="text-sm text-gray-200">{school.director.designation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {school.hod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedLeadership(school.hod!)}
                    >
                      <div className="relative h-[320px] overflow-visible shadow-lg hover:shadow-xl transition-shadow" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%)' }}>
                        <img
                          src={school.hod.image}
                          alt={school.hod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="inline-block px-3 py-1 bg-blue-500/90 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            HOD
                          </div>
                          <h4 className="text-xl font-bold mb-1">{school.hod.name}</h4>
                          <p className="text-sm text-gray-200">{school.hod.designation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
              
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
                                  <div onClick={(event) => event.stopPropagation()}>
                                    <DownloadBrochureButton
                                      fileUrl={course.documentUrl}
                                      fileName={`${course.name}-Brochure.pdf`}
                                      defaultCourseName={course.name}
                                      buttonText=""
                                      buttonClassName="p-2 bg-white text-brand-accent rounded-lg shadow-sm hover:bg-brand-accent hover:text-white transition-all inline-flex items-center justify-center"
                                    >
                                      <Download className="w-5 h-5" />
                                    </DownloadBrochureButton>
                                  </div>
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
                  Practical, scannable learning paths grounded in your specialization.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {(COURSE_CONTENT[selectedCourse.id]?.learning || DEFAULT_LEARNING_PILLARS).map((pillar) => {
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
                {(COURSE_CONTENT[selectedCourse.id]?.careers || DEFAULT_CAREER_PATHS).map((career) => {
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
                className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-brand-accent px-10 text-base font-semibold text-white shadow-[0_20px_60px_rgba(201,162,39,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#A3861D]"
              >
                Apply Now
              </Link>
              {selectedCourse?.documentUrl && selectedCourse.documentUrl !== '#' ? (
                <DownloadBrochureButton
                  fileUrl={selectedCourse.documentUrl}
                  fileName={`${selectedCourse.name}-Brochure.pdf`}
                  defaultCourseName={selectedCourse.name}
                  buttonText="Download Brochure"
                  buttonClassName="inline-flex min-h-[64px] items-center justify-center rounded-full border border-slate-200 bg-white px-10 text-base font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                />
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

      {/* Leadership Detail Modal */}
      <AnimatePresence>
        {selectedLeadership && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-primary/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedLeadership(null)}
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
                  src={selectedLeadership.image}
                  alt={selectedLeadership.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                  <h2 className="text-3xl font-display font-bold">{selectedLeadership.name}</h2>
                  <p className="text-white/80">{selectedLeadership.designation}</p>
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="md:w-3/5 p-8 md:p-16 overflow-y-auto max-h-[80vh]">
                <div className="hidden md:block mb-10">
                  <h2 className="text-5xl font-display font-bold mb-2">{selectedLeadership.name}</h2>
                  <p className="text-xl text-brand-accent font-medium">{selectedLeadership.designation}</p>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-brand-accent" />
                      Biography
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedLeadership.bio}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-brand-accent" />
                        Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedLeadership.specialization.map(s => (
                          <span key={s} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-brand-accent" />
                        Contact Info
                      </h3>
                      <div className="space-y-3">
                        <a href={`mailto:${selectedLeadership.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-accent transition-colors">
                          <Mail className="w-5 h-5" />
                          <span>{selectedLeadership.email}</span>
                        </a>
                        <a href={`tel:${selectedLeadership.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-accent transition-colors">
                          <Phone className="w-5 h-5" />
                          <span>{selectedLeadership.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedLeadership(null)}
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

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
