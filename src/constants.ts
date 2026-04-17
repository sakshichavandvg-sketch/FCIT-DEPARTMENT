import { School, GalleryImage, Project, Faculty } from './types';

export const SCHOOLS: School[] = [
  {
    id: 'sca',
    name: 'School of Computer Application',
    shortName: 'SCA',
    description: 'Empowering students with practical knowledge in software development and applications.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    courses: [
      { id: 'bca', name: 'BCA', description: 'A 3-year undergraduate program focusing on computer applications.', duration: '3 Years', level: 'Undergraduate', documentUrl: '/uploads/gallery/Program BCA.pdf', image: '/uploads/gallery/bca.png' },
      { id: 'bca-ai', name: 'BCA in AI & Data Analytics', description: 'A 3-year undergraduate program blending AI and analytics with core application development.', duration: '3 Years', level: 'Undergraduate', documentUrl: '#', image: '/uploads/gallery/bca-ai.png' },
      { id: 'bca-cyber', name: 'BCA in Cybersecurity', description: 'A 3-year undergraduate program focused on cybersecurity principles and practices.', duration: '3 Years', level: 'Undergraduate', documentUrl: '#', image: '/uploads/gallery/bcy.png' },
      { id: 'mca', name: 'MCA', description: 'A 2-year postgraduate program for advanced software skills.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mca.png' },
      { id: 'mca-ai', name: 'MCA in AI & Data Analytics', description: 'A 2-year postgraduate program focusing on AI, analytics, and applied research.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mds.png' },
      { id: 'mca-cyber', name: 'MCA in Cybersecurity', description: 'A 2-year postgraduate program centered on cyber defense and security systems.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mcy.png' },
      { id: 'mca-data', name: 'MCA in Data Science', description: 'A 2-year postgraduate program in data science, machine learning, and big data technologies.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mds.png' },
    ]
  },
  {
    id: 'scs',
    name: 'School of Computer Science',
    shortName: 'SCS',
    description: 'Focusing on the theoretical foundations of information and computation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    courses: [
      { id: 'msc-cs', name: 'M.Sc in Computer Science', description: 'A 2-year postgraduate program focusing on advanced computing theory and research.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mca.png' },
      { id: 'msc-cyber', name: 'M.Sc in Cybersecurity', description: 'A 2-year postgraduate program focused on cybersecurity research and practice.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mcy.png' },
      { id: 'msc-ai', name: 'M.Sc in AI & Data Analytics', description: 'A 2-year postgraduate program centered on artificial intelligence and data analytics.', duration: '2 Years', level: 'Postgraduate', documentUrl: '#', image: '/uploads/gallery/mds.png' },
    ]
  }
];

export const GALLERY: GalleryImage[] = [
  { id: '1', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Tech-carnival-2k26/WhatsApp Image 2026-04-04 at 2.37.28 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Tech Carnival' },
  { id: '2', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Graduation day/WhatsApp Image 2026-04-04 at 5.17.05 PM.jpeg', category: 'Achievements', date: '2026-04-04', title: 'Graduation Day' },
  { id: '3', url: '/uploads/gallery/FCIT-photo/FCIT-photo/conference_2k25/WhatsApp Image 2026-04-04 at 3.58.10 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Conference Event' },
  { id: '4', url: '/uploads/gallery/FCIT-photo/FCIT-photo/workshops/WhatsApp Image 2026-04-04 at 4.20.35 PM.jpeg', category: 'Workshops', date: '2026-04-04', title: 'Workshop Session' },
  { id: '5', url: '/uploads/gallery/FCIT-photo/FCIT-photo/student_corner/WhatsApp Image 2026-04-04 at 5.10.18 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Student Life' },
  { id: '6', url: '/uploads/gallery/FCIT-photo/FCIT-photo/sports events/WhatsApp Image 2026-04-04 at 3.26.44 PM.jpeg', category: 'Sports', date: '2026-04-04', title: 'Sports Moment' },
  { id: '7', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Orientation program/WhatsApp Image 2026-04-04 at 3.08.45 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Orientation Day' },
  { id: '8', url: '/uploads/gallery/FCIT-photo/FCIT-photo/ideathon/WhatsApp Image 2026-04-04 at 3.22.27 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Idea Challenge' },
  { id: '9', url: '/uploads/gallery/FCIT-photo/FCIT-photo/world cancer day/WhatsApp Image 2026-04-04 at 3.04.20 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Community Health' },
  { id: '10', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Ethnic day/WhatsApp Image 2026-04-04 at 5.04.11 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Ethnic Celebration' },
  { id: '11', url: '/uploads/gallery/FCIT-photo/FCIT-photo/Kannada kalavaibhava/kannada.jpeg', category: 'Events', date: '2026-04-04', title: 'Kannada Kalavaibhava' },
  { id: '12', url: '/uploads/gallery/FCIT-photo/FCIT-photo/NSS/WhatsApp Image 2026-04-04 at 4.19.30 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'NSS Outreach' },
  { id: '13', url: '/uploads/gallery/FCIT-photo/FCIT-photo/tech-friction/WhatsApp Image 2026-04-04 at 3.01.45 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Tech Friction' },
  { id: '14', url: '/uploads/gallery/FCIT-photo/FCIT-photo/women_empowermentcell/WhatsApp Image 2026-04-04 at 4.58.04 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Women Empowerment' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AI Based Traffic Management',
    author: 'Dr. Sarah Johnson',
    type: 'Research',
    description: 'A novel approach to urban traffic control using deep reinforcement learning.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    date: '2024-01-20',
    tags: ['AI', 'Smart City', 'Python']
  },
  {
    id: 'p2',
    title: 'Blockchain for Healthcare',
    author: 'John Doe & Team',
    type: 'Student Project',
    description: 'Securing patient records using decentralized ledger technology.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    date: '2024-02-15',
    tags: ['Blockchain', 'Healthcare', 'Solidity']
  },
  {
    id: 'p3',
    title: 'Natural Language Processing for Local Dialects',
    author: 'Prof. Alan Turing',
    type: 'Research',
    description: 'Developing models to understand and translate regional languages.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    date: '2023-11-10',
    tags: ['NLP', 'Machine Learning', 'Linguistics']
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'f1',
    name: 'Prof. Varun K S',
    designation: 'Assistant Professor',
    department: 'School of Computer Applictions',
    email: 'varunks.fcit.scs@gmu.ac.in',
    phone: '+1 234 567 890',
    image: '/uploads/gallery/Varun.jpg',
    bio: 'Prof. Varun has over 4 years of experience in AI and and Cyber Security, Cloud Computing, Project Management, and Image Processing.',
    specialization: ['Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Project Management', 'Image Processing']
  },
  {
    id: 'f2',
    name: 'Prof. Chethan H S',
    designation: 'Associate Professor',
    department: 'Computer Applications',
    email: 'chetankumarhs.fcit.sca@gmu.ac.in',
    phone: '+918296246876',
    image: '/uploads/gallery/Chethan H S.jpg',
    bio: 'Prof. Chethan H S specializes in full-stack development and Software Engineering & Project Management. He has published several papers on software architecture and leads the SCA practical labs.',
    specialization: ['Web Development', 'Software Engineering', 'Project Management']
  },
  {
    id: 'f3',
    name: 'Prof. Swathi Mahindrakar',
    designation: 'Assistant Professor',
    department: 'Computer Science',
    email: 'swathi.mahindrakar@fcit.edu',
    phone: '+1 234 567 892',
    image: '/uploads/gallery/Swathi Mahindrakar.jpeg',
    bio: 'Prof. Swathi Mahindrakar is an expert in Data Science and Project Management. She is the faculty coordinator for the Tech Fest.',
    specialization: ['Data Science', 'Project Management']
  },
  {
    id: 'f3',
    name: 'Prof. Krupa Rani S',
    designation: 'Assistant Professor',
    department: 'Computer Science',
    email: 'krupa.rani@fcit.edu',
    phone: '+1 234 567 892',
    image: '/uploads/gallery/Krupa Rani S.jpeg',
    bio: 'Prof. Krupa Rani S is an expert in Cloud Computing and Big Data Analytics.',
    specialization: ['Cloud Computing', 'Big Data Analytics']
  },
   {
    id: 'f3',
    name: 'Prof. Manjula K',
    designation: 'HOD and Assistant Professor',
    department: 'Computer Science',
    email: 'manjula.k@fcit.edu',
    phone: '+1 234 567 892',
    image: '/uploads/gallery/manjula.jpg',
    bio: 'Prof. Manjula K is an expert in Cyber Security and Project Management. She is the HOD of Computer Science department.',
    specialization: ['Cyber Security', 'Project Management']
  },
   {
    id: 'f3',
    name: 'Prof. Usha N',
    designation: 'HOD and Assistant Professor',
    department: 'Computer Science',
    email: 'usha.n@fcit.edu',
    phone: '+1 234 567 892',
    image: '/uploads/gallery/usha.jpeg',
    bio: 'Prof. Usha N is an expert in image Processing • Database Management System • Cloud Computing • Artificial Neural Network. She is the HOD of Computer Science department.',
    specialization: ['Image Processing', 'Database Management System', 'Cloud Computing', 'Artificial Neural Network']
  }
];
