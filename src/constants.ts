import { School, GalleryImage, Project, Faculty } from './types';

export const SCHOOLS: School[] = [
  {
    id: 'sca',
    name: 'School of Computer Application',
    shortName: 'SCA',
    description: 'Empowering students with practical knowledge in software development and applications.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    director: {
      id: 'sca-dir',
      name: 'Prof.Rajashekar G C',
      designation: 'Director - School of Computer Applications',
      email: 'chetankumarhs.fcit.sca@gmu.ac.in',
      phone: '+918296246876',
      image: '/uploads/gallery/Rjc.png',
      bio: 'Prof. Rajashekar G C is the Director of the School of Computer Applications at GM University. He holds an MCA degree and an M.Sc. in Mathematics and is currently pursuing his Ph.D. With more than 16 years of teaching experience and 3 years of research experience, he has cultivated expertise in diverse domains including PHP & MySQL, Database Management Systems, JAVA, Cloud Computing, and R Programming. His academic interests are centered on the application of advanced computational techniques to address real-world challenges. He is deeply committed to promoting innovative research and ensuring the delivery of high-quality education to his students.',
      specialization: ['PHP & MySql', 'Database Management System', 'Java Programming', 'Cloud Computing']
    },
    hod: {
      id: 'sca-hod',
      name: 'Prof. Usha N',
      designation: 'HOD - School of Computer Applications',
      email: 'usha.n@fcit.edu',
      phone: '+1 234 567 892',
      image: '/uploads/gallery/usha.jpeg',
      bio: 'Prof. Usha N is an expert in Image Processing, Database Management System, Cloud Computing, and Artificial Neural Networks.',
      specialization: ['Image Processing', 'Database Management System', 'Cloud Computing', 'Artificial Neural Network']
    },
    courses: [
      { id: 'bca', name: 'BCA', description: 'A 3-year undergraduate program focusing on computer applications.', duration: '3 Years', level: 'Undergraduate', documentUrl: '/uploads/gallery/Program BCA.pdf', image: '/uploads/gallery/bca.png' },
      { id: 'bca-ai', name: 'BCA in AI & Data Analytics', description: 'A 3-year undergraduate program blending AI and analytics with core application development.', duration: '3 Years', level: 'Undergraduate', documentUrl: '/uploads/gallery/Program Document -BCA-AI&DA26.pdf', image: '/uploads/gallery/bca-ai.png' },
      { id: 'bca-cyber', name: 'BCA in Cybersecurity', description: 'A 3-year undergraduate program focused on cybersecurity principles and practices.', duration: '3 Years', level: 'Undergraduate', documentUrl: '/uploads/gallery/Program Document-BCA-Cyber Security.pdf', image: '/uploads/gallery/bcy.png' },
      { id: 'bca-data', name: 'BCA in Data Science', description: 'A 3-year postgraduate program in data science, machine learning, and big data technologies.', duration: '3 Years', level: 'Undergraduate', documentUrl: '/uploads/gallery/Program Document -BCA-DS26.pdf', image: '/uploads/gallery/mds.png' },
      { id: 'mca', name: 'MCA', description: 'A 2-year postgraduate program for advanced software skills.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program MCA.pdf', image: '/uploads/gallery/mca.png' },
      { id: 'mca-ai', name: 'MCA in AI & Data Analytics', description: 'A 2-year postgraduate program focusing on AI, analytics, and applied research.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program MCA.pdf', image: '/uploads/gallery/mds.png' },
      { id: 'mca-cyber', name: 'MCA in Cybersecurity', description: 'A 2-year postgraduate program centered on cyber defense and security systems.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program MCA.pdf', image: '/uploads/gallery/mcy.png' },
      { id: 'mca-data', name: 'MCA in Data Science', description: 'A 2-year postgraduate program in data science, machine learning, and big data technologies.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program MCA.pdf', image: '/uploads/gallery/mds.png' },
    ]
  },
  {
    id: 'scs',
    name: 'School of Computer Science',
    shortName: 'SCS',
    description: 'Focusing on the theoretical foundations of information and computation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    director: {
      id: 'scs-dir',
      name: 'Prof. Shamina M. Attar',
      designation: 'Director - School of Computer Science',
      email: 'varunks.fcit.scs@gmu.ac.in',
      phone: '+1 234 567 890',
      image: '/uploads/gallery/shamina.jpeg',
      bio: 'Ms. Shamina M. Attar is the Director of the School of Computer Science, FCIT, GM University Davanagere. She holds an MCA and is pursuing a PhD. With over 8 years of teaching experience, 2 years of research involvement, and 2 years in industry, she brings a well-rounded academic and professional background. Her areas of expertise include Full Stack Development, Artificial Intelligence, and Machine Learning.',
      specialization: ['Full Stack Development', 'Artificial Intelligence', 'Machine Learning']
    },
    hod: {
      id: 'scs-hod',
      name: 'Prof. Manjula K',
      designation: 'HOD - School of Computer Science',
      email: 'manjula.k@fcit.edu',
      phone: '+1 234 567 892',
      image: '/uploads/gallery/manjula.jpg',
      bio: 'Prof. Manjula K is an expert in Cyber Security and Project Management.',
      specialization: ['Cyber Security', 'Project Management']
    },
    courses: [
      { id: 'msc-cs', name: 'M.Sc in Computer Science', description: 'A 2-year postgraduate program focusing on advanced computing theory and research.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program BCA.pdf', image: '/uploads/gallery/mca.png' },
      { id: 'msc-cyber', name: 'M.Sc in Cybersecurity', description: 'A 2-year postgraduate program focused on cybersecurity research and practice.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program Document - M.Sc.- Cyber Security26.pdf', image: '/uploads/gallery/mcy.png' },
      { id: 'msc-ai', name: 'M.Sc in AI & Data Analytics', description: 'A 2-year postgraduate program centered on artificial intelligence and data analytics.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program Document-M.Sc-AI & DA26.pdf', image: '/uploads/gallery/mds.png' },
      { id: 'msc-data', name: 'M.Sc in Data Science', description: 'A 2-year postgraduate program centered on data science.', duration: '2 Years', level: 'Postgraduate', documentUrl: '/uploads/gallery/Program Document-M.Sc-DS26.pdf', image: '/uploads/gallery/mds.png' },
    ]
  }
];

export const GALLERY: GalleryImage[] = [
  { id: '1', url: '/uploads/gallery/FCIT-photo/Tech-carnival-2k26/WhatsApp Image 2026-04-04 at 2.37.28 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Tech Carnival' },
  { id: '2', url: '/uploads/gallery/FCIT-photo/Graduation day/WhatsApp Image 2026-04-04 at 5.17.05 PM.jpeg', category: 'Achievements', date: '2026-04-04', title: 'Graduation Day' },
  { id: '3', url: '/uploads/gallery/FCIT-photo/conference_2k25/WhatsApp Image 2026-04-04 at 3.58.10 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Conference Event' },
  { id: '4', url: '/uploads/gallery/FCIT-photo/workshops/WhatsApp Image 2026-04-04 at 4.20.35 PM.jpeg', category: 'Workshops', date: '2026-04-04', title: 'Workshop Session' },
  { id: '5', url: '/uploads/gallery/FCIT-photo/student_corner/WhatsApp Image 2026-04-04 at 5.10.18 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Student Life' },
  { id: '6', url: '/uploads/gallery/FCIT-photo/sports events/WhatsApp Image 2026-04-04 at 3.26.44 PM.jpeg', category: 'Sports', date: '2026-04-04', title: 'Sports Moment' },
  { id: '7', url: '/uploads/gallery/FCIT-photo/Orientation program/WhatsApp Image 2026-04-04 at 3.08.45 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Orientation Day' },
  { id: '8', url: '/uploads/gallery/FCIT-photo/ideathon/WhatsApp Image 2026-04-04 at 3.22.27 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Idea Challenge' },
  { id: '9', url: '/uploads/gallery/FCIT-photo/world cancer day/WhatsApp Image 2026-04-04 at 3.04.20 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Community Health' },
  { id: '10', url: '/uploads/gallery/FCIT-photo/Ethnic day/WhatsApp Image 2026-04-04 at 5.04.11 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Ethnic Celebration' },
  { id: '11', url: '/uploads/gallery/FCIT-photo/Kannada kalavaibhava/kannada.jpeg', category: 'Events', date: '2026-04-04', title: 'Kannada Kalavaibhava' },
  { id: '12', url: '/uploads/gallery/FCIT-photo/NSS/WhatsApp Image 2026-04-04 at 4.19.30 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'NSS Outreach' },
  { id: '13', url: '/uploads/gallery/FCIT-photo/tech-friction/WhatsApp Image 2026-04-04 at 3.01.45 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Tech Friction' },
  { id: '14', url: '/uploads/gallery/FCIT-photo/women_empowermentcell/WhatsApp Image 2026-04-04 at 4.58.04 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'Women Empowerment' },
  { id: '15', url: '/uploads/gallery/FCIT-photo/CASP/WhatsApp Image 2026-04-04 at 4.24.15 PM.jpeg', category: 'Events', date: '2026-04-04', title: 'CASP Collaboration' },
  { id: '16', url: '/uploads/gallery/FCIT-photo/faculty_corner/WhatsApp Image 2026-04-04 at 4.12.05 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Faculty Corner' },
  { id: '17', url: '/uploads/gallery/FCIT-photo/GMS-TRIP/WhatsApp Image 2026-04-04 at 2.55.41 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'GMS Trip' },
  { id: '18', url: '/uploads/gallery/FCIT-photo/MCA_outreach program/mca.jpeg', category: 'Events', date: '2026-04-04', title: 'MCA Outreach' },
  { id: '19', url: '/uploads/gallery/FCIT-photo/MCA_outreach program/mca1.jpeg', category: 'Events', date: '2026-04-04', title: 'MCA Outreach Event' },
  { id: '20', url: '/uploads/gallery/FCIT-photo/parents_meeting/WhatsApp Image 2026-04-04 at 4.46.13 PM.jpeg', category: 'Campus', date: '2026-04-04', title: 'Parents Meeting' },
];

export const PROJECTS: Project[] = [
  // Dr. Shweta Marigoudar - Dean FCIT
  {
    id: 'p1',
    title: 'Machine Learning Regression Techniques to Detect the Disease in Cotton Leaf',
    author: 'Dr. Shweta Marigoudar',
    type: 'Research',
    description: 'Application of machine learning regression techniques for early disease detection in cotton crops.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: '2024-07-01',
    tags: ['Machine Learning', 'Agriculture', 'Disease Detection', 'Data Science'],
    downloadUrl: '#'
  },
  {
    id: 'p2',
    title: 'Intelligent Video Analytics for Abnormal Event Detection',
    author: 'Dr. Shweta Marigoudar',
    type: 'Research',
    description: 'Advanced video analytics system using deep learning for detecting abnormal events in real-time.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    date: '2024-08-01',
    tags: ['Video Analytics', 'Deep Learning', 'Computer Vision', 'Security'],
    downloadUrl: '#'
  },
  {
    id: 'p3',
    title: 'SmartHeart: A Cloud and Machine Learning Framework for Early Cardiovascular Disease Prediction',
    author: 'Dr. Shweta Marigoudar',
    type: 'Research',
    description: 'Cloud-based ML framework for predicting cardiovascular diseases using health data analytics.',
    image: 'uploads/gallery/p7.png',
    date: '2025-02-08',
    tags: ['Healthcare', 'Machine Learning', 'Cloud Computing', 'Predictive Analytics'],
    downloadUrl: '#'
  },
  // Mr. Rajashekhar G C - Director SCA
  {
    id: 'p4',
    title: 'Security Challenges in IoT Devices: Analysing Vulnerabilities and Proposing Comprehensive Solutions',
    author: 'Mr. Rajashekhar G C',
    type: 'Research',
    description: 'Comprehensive analysis of security vulnerabilities in IoT devices with proposed mitigation strategies.',
    image: 'uploads/gallery/p5.png',
    date: '2024-09-01',
    tags: ['IoT Security', 'Cybersecurity', 'Vulnerability Analysis'],
    downloadUrl: '#'
  },
  // Ms. Shamina M Attar - Director SCS
  {
    id: 'p6',
    title: 'AI-Driven Cyber Security: Enhancing Threat Detection and Response Strategies in Organizations',
    author: 'Ms. Shamina M Attar',
    type: 'Research',
    description: 'AI-based approach for detecting and responding to cyber threats in organizational networks.',
    image: 'uploads/gallery/p12.png',
    date: '2024-10-01',
    tags: ['Cybersecurity', 'AI', 'Threat Detection'],
    downloadUrl: '#'
  },
  // Mrs. Usha N - HOD SCA
  {
    id: 'p7',
    title: 'Significance of Early Disease Detection in Arecanut using Convolutional Neural Network',
    author: 'Mrs. Usha N',
    type: 'Research',
    description: 'CNN-based approach for detecting diseases in arecanut crops at early stages.',
    image: 'uploads/gallery/p2.png',
    date: '2024-09-01',
    tags: ['CNN', 'Agriculture', 'Disease Detection', 'Deep Learning'],
    downloadUrl: '#'
  },
  {
    id: 'p8',
    title: 'Fusion-Based Deep Learning for Kidney Stone Detection using Ultrasound, CT and MRI',
    author: 'Mrs. Usha N',
    type: 'Research',
    description: 'Multi-modal fusion deep learning approach for accurate kidney stone detection from medical imaging.',
    image: 'uploads/gallery/p13.png',
    date: '2024-09-01',
    tags: ['Medical Imaging', 'Deep Learning', 'Healthcare', 'Image Fusion'],
    downloadUrl: '#'
  },
  {
    id: 'p9',
    title: 'Future of Cloud Computing: Benefits and Challenges',
    author: 'Mrs. Usha N',
    type: 'Research',
    description: 'Comprehensive analysis of cloud computing advancements, opportunities and challenges.',
    image: 'uploads/gallery/p9.png',
    date: '2025-01-01',
    tags: ['Cloud Computing', 'Technology Trends'],
    downloadUrl: '#'
  },
  {
    id: 'p10',
    title: 'Ethical and Social Dimensions of AI: Enhancing Transparency, Privacy and Accountability',
    author: 'Mrs. Usha N',
    type: 'Research',
    description: 'Discussion on ethical implications and responsible AI deployment in healthcare systems.',
    image: 'uploads/gallery/p17.png',
    date: '2025-03-01',
    tags: ['AI Ethics', 'Healthcare', 'Transparency', 'Privacy'],
    downloadUrl: '#'
  },
  // Mrs. Manjula K - HOD SCS
  {
    id: 'p13',
    title: 'Advances in Breast Cancer Detection: A Comprehensive Survey of Techniques and Challenges',
    author: 'Mrs. Manjula K',
    type: 'Research',
    description: 'Survey of modern techniques and challenges in breast cancer detection using AI and imaging.',
    image: 'uploads/gallery/p16.png',
    date: '2025-05-01',
    tags: ['Healthcare', 'Cancer Detection', 'AI', 'Medical Imaging'],
    downloadUrl: '#'
  },
  {
    id: 'p15',
    title: 'Sustainable Healthcare Systems: Technologies, Practices and Management',
    author: 'Mrs. Manjula K',
    type: 'Research',
    description: 'Book chapter on sustainable approaches in healthcare systems using modern technology.',
    image: 'uploads/gallery/p18.png',
    date: '2025-05-01',
    tags: ['Healthcare', 'Sustainability', 'Technology Management'],
    downloadUrl: '#'
  },
  // Mrs. Megha M - Assistant Professor
  {
    id: 'p16',
    title: 'Security Based on Identity Encryption for Cloud Data Sharing',
    author: 'Mrs. Megha M',
    type: 'Research',
    description: 'Identity-based encryption approach for secure data sharing in cloud environments.',
    image: 'uploads/gallery/p16.png',
    date: '2017-12-01',
    tags: ['Cloud Security', 'Encryption', 'Data Sharing'],
    downloadUrl: '#'
  },
  {
    id: 'p17',
    title: 'Fortifying Digital Safety',
    author: 'Mrs. Megha M',
    type: 'Research',
    description: 'Comprehensive approach to digital security and safety measures.',
    image: 'uploads/gallery/p20.png',
    date: '2024-09-23',
    tags: ['Cybersecurity', 'Digital Safety'],
    downloadUrl: '#'
  },
  // Mr. Devraj H S - Assistant Professor
  {
    id: 'p21',
    title: 'A Social Network with Multiple Features to Students',
    author: 'Mr. Devraj H S',
    type: 'Research',
    description: 'Design and implementation of a feature-rich social networking platform for students.',
    image: 'uploads/gallery/p21.png',
    date: '2020-06-01',
    tags: ['Social Network', 'Web Development', 'Student Platform'],
    downloadUrl: '#'
  },
  {
    id: 'p22',
    title: 'A Research on Possible Misuse of Digitally Converted Handwritten Text',
    author: 'Mr. Devraj H S',
    type: 'Research',
    description: 'Study on security implications and misuse prevention in digitized handwritten content.',
    image: 'uploads/gallery/p22.png',
    date: '2021-04-01',
    tags: ['Document Security', 'OCR', 'Cybersecurity'],
    downloadUrl: '#'
  },
  // Mr. Varun K S - Assistant Professor
  {
    id: 'p26',
    title: 'Diabetic Retinopathy Detection Using Deep Convolutional Neural Networks Architecture ResNet-18',
    author: 'Mr. Varun K S',
    type: 'Research',
    description: 'Application of ResNet-18 architecture for accurate diabetic retinopathy detection.',
    image: 'uploads/gallery/p10.png',
    date: '2024-08-01',
    tags: ['Medical Imaging', 'Deep Learning', 'Healthcare', 'Computer Vision'],
    downloadUrl: '#'
  },
  {
    id: 'p27',
    title: 'Smart Voting System with Face Recognition',
    author: 'Mr. Varun K S',
    type: 'Research',
    description: 'Secure voting system integrating facial recognition technology.',
    image: 'uploads/gallery/p19.png',
    date: '2025-05-01',
    tags: ['Face Recognition', 'AI', 'Security', 'Voting System'],
    downloadUrl: '#'
  },
  {
    id: 'p29',
    title: 'AI-Driven Retinal Image Analysis for Early Detection of Diabetic Retinopathy: Innovations and Future Prospects',
    author: 'Mr. Varun K S',
    type: 'Research',
    description: 'Advanced AI techniques for early detection of diabetic retinopathy using retinal imaging.',
    image: 'uploads/gallery/p10.png',
    date: '2025-08-16',
    tags: ['Medical Imaging', 'AI', 'Healthcare', 'Ophthalmology'],
    downloadUrl: '#'
  },
  // Mr. Manjunatha K V - Assistant Professor
  {
    id: 'p30',
    title: 'Learning Application Using Android System',
    author: 'Mr. Manjunatha K V',
    type: 'Research',
    description: 'Development of educational mobile application for Android platform.',
    image: 'uploads/gallery/p30.png',
    date: '2023-09-08',
    tags: ['Android', 'Mobile App', 'Education'],
    downloadUrl: '#'
  },
  {
    id: 'p31',
    title: 'A Study on Agronomist Labs to Help Farmers to Increase Crop Yields',
    author: 'Mr. Manjunatha K V',
    type: 'Research',
    description: 'Technology-driven approach to assist farmers in improving agricultural productivity.',
    image: 'uploads/gallery/p15.png',
    date: '2023-07-28',
    tags: ['Agriculture', 'Technology', 'Innovation'],
    downloadUrl: '#'
  },
  {
    id: 'p33',
    title: 'Artificial Intelligence in E-Commerce Fraud Detection: A Paradigm Shift in Digital Security',
    author: 'Mr. Manjunatha K V',
    type: 'Research',
    description: 'AI-based approach to detect and prevent fraud in e-commerce transactions.',
    image: 'uploads/gallery/p12.png',
    date: '2025-05-01',
    tags: ['AI', 'E-commerce', 'Fraud Detection', 'Security'],
    downloadUrl: '#'
  },
  {
    id: 'p34',
    title: 'Real-Time Monitoring and Route Optimization in Smart Waste Collection Systems',
    author: 'Mr. Manjunatha K V',
    type: 'Research',
    description: 'IoT and AI application for efficient waste collection and environmental management.',
    image: 'uploads/gallery/p8.png',
    date: '2025-05-01',
    tags: ['IoT', 'Smart City', 'Environmental Management'],
    downloadUrl: '#'
  },
  {
    id: 'p35',
    title: 'Social Media Cybersecurity: A Behavioral and Technological Perspective',
    author: 'Mr. Manjunatha K V',
    type: 'Research',
    description: 'Study on cybersecurity threats in social media and behavioral patterns.',
    image: 'uploads/gallery/p12.png',
    date: '2025-05-01',
    tags: ['Social Media', 'Cybersecurity', 'Behavioral Analysis'],
    downloadUrl: '#'
  },
  {
    id: 'p42',
    title: 'A Deep Learning Approach to Sentiment Analysis of Customer Feedback for Enhanced Business Intelligence',
    author: 'Mrs. Swathi D M',
    type: 'Research',
    description: 'Deep learning model for analyzing customer sentiment and business intelligence extraction.',
    image: 'uploads/gallery/p42.png',
    date: '2025-05-01',
    tags: ['Deep Learning', 'NLP', 'Business Intelligence', 'Sentiment Analysis'],
    downloadUrl: '#'
  },
  // Student Projects
  {
    id: 'sp1',
    title: 'Agronomist Real Estate App',
    author: 'Darshan HS, Nikhil Desai, Pradeep KH',
    type: 'Student Project',
    description: 'The Agri Real Estate App is an Android-based application designed to provide a centralized digital platform that connects agricultural land owners with users in a secure and efficient environment. This project aims to simplify and modernize the agricultural land transaction process.',
    image: 'uploads/gallery/s1.png',
    date: '2026-01-01',
    tags: ['Mobile App', 'Android', 'Real Estate', 'Agriculture'],
    mentor: 'Kantesh M'
  },
  {
    id: 'sp2',
    title: 'AI Enabled Skin Classification and Customised Product Recommendation',
    author: 'Vidya U Mudigoudar, Ananya SS, Swathi C L',
    type: 'Student Project',
    description: 'A web-based platform that analyzes skin characteristics and recommends personalized skincare products using artificial intelligence. The system helps users understand their skin better and choose products that match their specific needs.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'AI', 'Python', 'VIT', 'CNN'],
    mentor: 'Sugandha MS'
  },
  {
    id: 'sp3',
    title: 'Placement Cell',
    author: 'Harish D, Adarsh H, Vivek N Ritti',
    type: 'Student Project',
    description: 'A web application designed to streamline the recruitment process within educational institutions. It provides a platform where students can register, upload resumes, and apply for job opportunities while administrators manage company details and track placement statistics.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'Placement', 'Student Platform'],
    mentor: 'Rajashekhar G C'
  },
  {
    id: 'sp4',
    title: 'Fake News Detection',
    author: 'Shalini SP, Varshitha J, Basavashre Poojar',
    type: 'Student Project',
    description: 'A machine learning project to detect fake news scenarios related to COVID-19. The system focuses on identifying misinformation in digital media using Python and machine learning algorithms to ensure users have access to verified information.',
    image: 'uploads/gallery/s4.png',
    date: '2026-01-01',
    tags: ['Python', 'Machine Learning', 'AI', 'Misinformation Detection'],
    mentor: 'Suhasini'
  },
  {
    id: 'sp5',
    title: 'An Integrated AI Model for COVID-19 News Credibility Assessment',
    author: 'Varshitha J, Shalini SP, Basavashree Poojar S',
    type: 'Student Project',
    description: 'An AI-powered system that detects fake news based on COVID-19 information spread through social media. The project uses machine learning techniques to identify whether news is fake or real and solve the problem of misinformation spread.',
    image: 'uploads/gallery/s5.png',
    date: '2026-01-01',
    tags: ['AI', 'Python', 'Machine Learning', 'Fake News Detection'],
    mentor: 'Suhasini'
  },
  {
    id: 'sp6',
    title: 'First Assistant and Hospital Finder App',
    author: 'Barkha Bahar, Keerthi V R, Jyothi S Sarode',
    type: 'Student Project',
    description: 'A mobile application that helps users respond quickly during medical emergencies by providing simple first aid instructions and locating nearby hospitals using GPS. It offers step-by-step guidance and real-time directions to healthcare facilities.',
    image: 'uploads/gallery/s6.png',
    date: '2026-01-01',
    tags: ['Mobile App', 'Healthcare', 'Python', 'First Aid', 'GPS'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp7',
    title: 'Bridge Between Investors & Business People App',
    author: 'Subodha L Desai, Pavan Kumar Hiremath, Manoj Kumar Guggalashetty',
    type: 'Student Project',
    description: 'The Invest Bridge application, developed using Flutter, connects entrepreneurs with suitable investors. It provides a centralized and secure platform where both parties can discover and interact with each other, reducing time and communication gaps.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Mobile App', 'Flutter', 'Python', 'MySQL', 'Investment', 'Startup'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp8',
    title: 'Crop Disease Detection',
    author: 'Misbah Kouser, Nazneen Banu, Amra Ali Khanum',
    type: 'Student Project',
    description: 'A web-based system that detects diseases in rice and chili plant leaves using deep learning techniques. Users can upload images of plant leaves and get instant disease predictions using CNN and Vision Transformer models.',
    image: 'uploads/gallery/p2.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'VIT', 'CNN', 'Agriculture', 'Deep Learning'],
    mentor: 'Sugandha MS'
  },
  {
    id: 'sp9',
    title: 'Career Compass',
    author: 'Mohammed Faizan, Shayan Ahmed, Ghouse Mohiddin',
    type: 'Student Project',
    description: 'A comprehensive web application designed to bridge the gap between job seekers and employers. It features a robust job search engine with advanced filtering, personalized career recommendations, and an intuitive dashboard for managing applications.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Job Platform'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp10',
    title: 'Voice-Based Email System for the Visually Impaired',
    author: 'Varshini G, Sahana K S, Suhana Bhanu',
    type: 'Student Project',
    description: 'A Voice-Based Email System that allows visually impaired individuals to send, read, and manage emails through voice commands. The system leverages Speech-to-Text and Text-to-Speech technologies for a hands-free experience.',
    image: 'uploads/gallery/p5.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'Accessibility', 'Voice Recognition', 'Speech Technology'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp11',
    title: 'Smart Attendance System using Face Recognition',
    author: 'Sushma G P, Priyanka S M, Ashwini K M',
    type: 'Student Project',
    description: 'An automated attendance system using face recognition that tracks attendance through a camera. The system compares captured images against a database using advanced facial recognition algorithms and logs attendance in real-time.',
    image: 'uploads/gallery/p3.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'OpenCV', 'Flask', 'MySQL', 'Face Recognition'],
    mentor: 'Prof. Sumanth M B'
  },
  {
    id: 'sp12',
    title: 'Smart Farming System using IoT',
    author: 'Prajwal M, Ranganath S, Rahul B S',
    type: 'Student Project',
    description: 'An IoT-based system designed to optimize agricultural practices by monitoring environmental conditions in real-time. It tracks soil moisture, temperature, and humidity to provide farmers with actionable data for improving crop yield.',
    image: 'uploads/gallery/s1.png',
    date: '2026-01-01',
    tags: ['IoT', 'Python', 'Arduino', 'Raspberry Pi', 'Firebase', 'Smart Agriculture'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp13',
    title: 'Real-Time Sign Language Recognition System',
    author: 'Karthik S, Manjunath K, Naveen P',
    type: 'Student Project',
    description: 'A real-time sign language recognition system that translates hand gestures into text and speech instantly. Using deep learning models, the system identifies corresponding letters or words from live gesture detection.',
    image: 'uploads/gallery/s13.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Gesture Recognition'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp14',
    title: 'Virtual Home Interior Designer',
    author: 'Bhoomika G J, Madhushree M, Deepthi S M',
    type: 'Student Project',
    description: 'A web-based platform that uses AI and augmented reality to help users design their living spaces. Users can upload photos of rooms and virtually place furniture items, paint colors, and flooring options.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['AI', 'Web Development', 'Python', 'Django', 'Three.js', 'MySQL', 'Design'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp15',
    title: 'Personal Portfolio Website',
    author: 'Shushmitha M S, G S Manasa, Priyanka K',
    type: 'Student Project',
    description: 'A personal portfolio website that showcases individual skills, projects, and achievements. Designed as a comprehensive digital resume with an About Me section, project gallery, and functional contact form.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Portfolio'],
    mentor: 'Suhasini K'
  },
  {
    id: 'sp16',
    title: 'E-Commerce Platform for Local Artisans',
    author: 'Santhosh G, Vijay K, Ajay M',
    type: 'Student Project',
    description: 'An e-commerce platform specifically designed for local craftsmen and small-scale producers. It allows artisans to create digital storefronts, upload product images, and manage orders efficiently with secure authentication and payment gateway.',
    image: 'uploads/gallery/p3.png',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'Django', 'SQLite', 'Bootstrap', 'E-Commerce'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp17',
    title: 'Smart Parking Management System',
    author: 'Praveen B, Darshan H, Chetan S',
    type: 'Student Project',
    description: 'An IoT and sensor-based system that provides real-time updates on parking availability in urban areas. Sensors detect vehicle presence and send data to a central server for users to access via web or mobile application.',
    image: 'uploads/gallery/p11.png',
    date: '2026-01-01',
    tags: ['IoT', 'Python', 'Raspberry Pi', 'MySQL', 'Smart City', 'Parking'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp18',
    title: 'Student Information Management System',
    author: 'Amrutha R, Archana M N, Bhoomika G S',
    type: 'Student Project',
    description: 'A digital platform to store, manage, and retrieve student information efficiently. It replaces manual record-keeping methods with features including adding new student details, updating records, and quick search functionality.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Database', 'Student Records'],
    mentor: 'Prof. Sugandha M S'
  },
  {
    id: 'sp19',
    title: 'Credit Card Fraud Detection',
    author: 'Manohara K, Karthik S, Chandrashekara S R',
    type: 'Student Project',
    description: 'A machine learning project that detects fraudulent transactions in real-time by analyzing patterns in transaction data. The model identifies anomalies that suggest fraud using Logistic Regression and other algorithms.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'Scikit-learn', 'Pandas', 'Fraud Detection', 'Finance'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp20',
    title: 'Automated Essay Scoring System',
    author: 'Pallavi G S, Pooja M, Priyanka K R',
    type: 'Student Project',
    description: 'A system that uses Natural Language Processing to evaluate and score student essays automatically. It analyzes grammar, vocabulary, coherence, and relevance to provide automated grading and feedback to students.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'NLTK', 'Scikit-learn', 'NLP', 'Education'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp21',
    title: 'Plant Disease Detection using Image Processing',
    author: 'Madhumitha S, Pallavi C, Lavanya B',
    type: 'Student Project',
    description: 'An image processing and machine learning project that helps farmers identify plant diseases early. Users can upload images of infected plant leaves and get disease diagnosis based on visual symptom analysis.',
    image: 'uploads/gallery/p15.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'OpenCV', 'TensorFlow', 'Agriculture', 'Image Processing'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp22',
    title: 'Hospital Management System',
    author: 'Shashi Kumar K V, Santhosh Kumar B R, Darshan S',
    type: 'Student Project',
    description: 'A comprehensive system to digitize hospital operations including patient registration, doctor scheduling, and billing. Features include record management, search functionality, and user-friendly interface for operational efficiency.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Healthcare', 'Management'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp23',
    title: 'Stock Price Prediction',
    author: 'Shivaraj K, Naveen Kumar M, Rahul G',
    type: 'Student Project',
    description: 'A machine learning project that predicts future stock prices based on historical data. It provides data visualization, trend analysis, and price forecasting to help investors make data-driven investment decisions.',
    image: 'uploads/gallery/s23.png',
    date: '2026-01-01',
    tags: ['AI-ML', 'Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Finance'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp24',
    title: 'Voice Assistant for PC',
    author: 'Manoj S, Karthik R, Abhishek M',
    type: 'Student Project',
    description: 'A PC application that performs tasks based on voice commands including opening applications, searching the web, and playing music. Features speech recognition, natural language processing, and system task automation.',
    image: 'uploads/gallery/p21.png',
    date: '2026-01-01',
    tags: ['AI', 'Python', 'Pyttsx3', 'SpeechRecognition', 'Voice Control'],
    mentor: 'Suhasini K'
  },
  {
    id: 'sp25',
    title: 'Online Quiz System',
    author: 'Deepa M, Kavya S, Megha R',
    type: 'Student Project',
    description: 'A web-based platform that allows teachers to create quizzes and students to take them online. Features include user authentication, quiz management, automated scoring, and result display for efficient examination process.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Education'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp26',
    title: 'Weather Forecasting App',
    author: 'Ranjitha K, Shwetha M, Sahana G',
    type: 'Student Project',
    description: 'A web application that provides real-time weather information for different locations. Users can search for cities and get details like temperature, humidity, and wind speed with API integration and responsive interface.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Weather'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp27',
    title: 'Chatbot for Customer Support',
    author: 'Bharath K, Goutham S, Harish M',
    type: 'Student Project',
    description: 'A chatbot that automates responses to frequently asked questions using NLP to understand user queries. Features include intent recognition, automated replies, and chat interface for improving customer service efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['AI', 'Python', 'NLTK', 'Flask', 'NLP', 'Customer Support'],
    mentor: 'Suhasini K'
  },
  {
    id: 'sp28',
    title: 'Recipe Recommendation System',
    author: 'Kavana S, Kusuma R, Pooja G',
    type: 'Student Project',
    description: 'A web-based system that suggests recipes based on available ingredients. Users can enter ingredients they have and receive a list of possible dishes with recipe details and cooking instructions.',
    image: 'uploads/gallery/s28.png',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Python', 'Recipe'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp29',
    title: 'Library Management System',
    author: 'Manisha S M, Meghana R S, Anusha B S',
    type: 'Student Project',
    description: 'A digital tool that simplifies the management of books and their distribution in libraries. Features include adding new books, tracking issued books, and managing member records with organized database.',
    image: 'uploads/gallery/s29.png',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Library', 'Management'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp30',
    title: 'Blood Bank Management System',
    author: 'Sharan Kumar, Vinay Kumar, Rohan S',
    type: 'Student Project',
    description: 'A system that manages blood donor records and blood availability in blood banks. Features include donor registration, blood stock tracking, and search functionality for urgent requirements during emergencies.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Healthcare', 'Blood Bank'],
    mentor: 'Suhasini K'
  }
  ,
  {
    id: 'sp31',
    title: 'Vehicle Rental System',
    author: 'Abhishek S, Akash M, Goutham R',
    type: 'Student Project',
    description: 'An online platform for renting vehicles like cars and bikes. Features include vehicle listings, user registration, booking management, and a payment interface for customers and rental businesses.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp32',
    title: 'Expense Tracker',
    author: 'Anjali K, Bhavya S, Divya M',
    type: 'Student Project',
    description: 'A mobile application for tracking daily expenses with expense logging, category management, and visualizations to help users manage personal finances and budgeting.',
    image: 'uploads/gallery/s32.png',
    date: '2026-01-01',
    tags: ['Mobile App', 'Flutter', 'Firebase', 'Finance'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp33',
    title: 'Pharmacy Management System',
    author: 'Harshith K, Jeevan S, Lohith M',
    type: 'Student Project',
    description: 'A system to manage medicine inventory and sales in a pharmacy, including stock management, billing, and medicine search to ensure accurate stock tracking and efficient billing.',
    image: 'uploads/gallery/s33.png',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Inventory'],
    mentor: 'Sumanth M B'
  },
  {
    id: 'sp34',
    title: 'Music Player Application',
    author: 'Madan K, Nithin S, Rahul R',
    type: 'Student Project',
    description: 'A mobile music player app allowing users to play and manage their music library with playlists, playback controls, and a user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Mobile App', 'Java (Android)', 'XML', 'Media'],
    mentor: 'Suhasini K'
  },
  {
    id: 'sp35',
    title: 'Gym Management System',
    author: 'Puneeth K, Sachin S, Varun M',
    type: 'Student Project',
    description: 'A system to manage gym memberships and trainer schedules including member registration, attendance tracking, and fee management for gym owners and fitness centers.',
    image: 'uploads/gallery/s35.png',
    date: '2026-01-01',
    tags: ['Other', 'Python', 'Tkinter', 'MySQL', 'Management'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp36',
    title: 'Event Management System',
    author: 'Rakshitha K, Sahana M, Tejaswini S',
    type: 'Student Project',
    description: 'A web platform for organizing and managing events with event creation, attendee registration, and scheduling features for event planners and organizations.',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Django'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp37',
    title: 'Personal Diary Application',
    author: 'Sneha K, Swathi S, Vidya M',
    type: 'Student Project',
    description: 'A secure personal diary mobile app for writing and saving daily entries with search and password protection for private journaling.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Mobile App', 'Flutter', 'SQLite', 'Diary'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp38',
    title: 'Airline Reservation System',
    author: 'Ullas K, Vishwas S, Yashas M',
    type: 'Student Project',
    description: 'A web-based airline reservation system for searching flights and booking tickets with seat selection and user authentication.',
    image: 'uploads/gallery/s38.png',
    date: '2026-01-01',
    tags: ['Web Development', 'Java (Servlets)', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    mentor: 'Suhasini K'
  },
  {
    id: 'sp39',
    title: 'Inventory Management System',
    author: 'Swathi R M, Soumya M M, Deepa S',
    type: 'Student Project',
    description: 'An inventory management system to track stock, manage incoming/outgoing products and generate reports, simplifying warehouse/store inventory operations.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'MySQL', 'Inventory'],
    mentor: 'Kavya G'
  },
  {
    id: 'sp40',
    title: 'AI-Based Leaf Nutrition Deficiency Detection',
    author: 'Jessica R, Shreevaibhavi K G, Mukthashree J V',
    type: 'Student Project',
    description: 'A system to detect nutrient deficiencies in plant leaves using AI and image processing; users upload leaf images and the model predicts nutrient deficiency types.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'TensorFlow', 'MobileNetV2', 'Image Processing'],
    mentor: 'Sugandha M S'
  },
  {
    id: 'sp41',
    title: 'Labour Link',
    author: 'Tanoj S D, Abhishek J B, Jeevan K H',
    type: 'Student Project',
    description: 'A mobile app connecting users with verified skilled construction workers, offering profiles, ratings, booking, and secure communication for the unorganized labour market.',
    image: 'uploads/gallery/s41.png',
    date: '2026-01-01',
    tags: ['Mobile App', 'Android', 'Workforce', 'Services'],
    mentor: 'Sahana K E'
  },
  {
    id: 'sp42',
    title: 'Web based Computer Lab Management System',
    author: 'Chinmayi Urs M, Soumya Irappa Kusanur, Harshita M S',
    type: 'Student Project',
    description: 'A website-based system to manage computer labs, automating task tracking and resource allocation with centralized online data storage for administrators and students.',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&q=80&w=800',
    date: '2026-01-01',
    tags: ['Web Development', 'Python', 'MySQL', 'Lab Management'],
    mentor: 'Mrs. Teja H'
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
    image: '/uploads/gallery/Chethan H S.png',
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
    id: 'f4',
    name: 'Prof. Usha N',
    designation: 'HOD and Assistant Professor',
    department: 'Computer Science',
    email: 'usha.n@fcit.edu',
    phone: '+1 234 567 892',
    image: '/uploads/gallery/usha.jpeg',
    bio: 'Prof. Usha N is an expert in image Processing • Database Management System • Cloud Computing • Artificial Neural Network. She is the HOD of Computer Science department.',
    specialization: ['Image Processing', 'Database Management System', 'Cloud Computing', 'Artificial Neural Network']
  },
  {
    id: 'f5',
    name: 'Ms. Sahana K E',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing & IT',
    email: 'sahanake.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Sahana K E.jpeg',
    bio: 'Asst. Professor Sahana K E specializes in Java Programming and Database Management System. She has extensive experience with Java in both research and teaching.',
    specialization: ['Core Java', 'Database Management System']
  },
  {
    id: 'f6',
    name: 'Mrs. Teja H',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing and IT',
    email: 'tejah.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/teja.jpg',
    bio: 'Asst. Professor Teja H specializes in Artificial Intelligence, Cloud Computing, and Python programming. With 2 years of teaching experience, she possesses strong knowledge and expertise in research and teaching within these domains. Her expertise is focused on applying computational methods and emerging technologies to solve real-world challenges.',
    specialization: ['Artificial Intelligence', 'Cloud Computing', 'Big Data Analytics', 'Python Programming']
  },
  {
    id: 'f7',
    name: 'Ms. Suhasini S',
    designation: 'Assistant Professor',
    department: 'School of Computer Applications',
    email: 'suhasinis.fcit.scs@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Suhasini S.jpeg',
    bio: 'Ms. Suhasini S, Assistant Professor in the School of Computer Applications at GM University, holds an MCA. With 2 years of teaching experience, her areas of expertise include Full stack web development, Artificial Intelligence, Cyber Security, and Data Science. She is skilled in guiding students on academic projects with a strong focus on applying theoretical knowledge to practical computing and security applications.',
    specialization: ['Full Stack Web Development', 'Artificial Intelligence', 'Cyber Security', 'Data Science']
  },
  {
    id: 'f8',
    name: 'Mr. Sumanth M Budhya',
    designation: 'Assistant Professor',
    department: 'School of Computer Applications',
    email: 'sumanthmbudhya.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Sumanth M Budhya.jpeg',
    bio: 'Assistant Professor Sumanth M. Budhya specializes in Full Stack Java Development, building robust and scalable applications. He is proficient in React Development, creating dynamic and user-friendly interfaces. His expertise also extends to Data Analytics and Machine Learning, enabling data-driven insights and intelligent solutions.',
    specialization: ['Full Stack Java Development', 'React Development', 'Data Analytics', 'Machine Learning']
  },
  {
    id: 'f9',
    name: 'Ms. Kavya G',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing IT',
    email: 'kavyag.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Kavya G.jpeg',
    bio: 'Asst. Professor Kavya G specializes in Artificial Intelligence, Cloud Computing, and Python programming. With 9 months of teaching experience, she has extensive expertise with Python and MATLAB for research and teaching. Her specialization includes machine learning and big data analytics applications.',
    specialization: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Big Data Analytics', 'Python']
  },
  {
    id: 'f10',
    name: 'Ms. Anu V.B',
    designation: 'Assistant Professor',
    department: 'School of Computer Applications',
    email: 'anuvb.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Anu.png',
    bio: 'Ms. Anu V.B is an Assistant Professor in the School of Computer Applications at GM University. She holds an MCA degree, with over 7.9 years of teaching experience. She has developed strong expertise in Database Management Systems, Cyber Security, Java, and Artificial Intelligence and Machine Learning.',
    specialization: ['Artificial Intelligence', 'Machine Learning', 'Database Management System', 'Cyber Security', 'Java']
  },
  {
    id: 'f11',
    name: 'Mr. Rajashekhar G C',
    designation: 'Director',
    department: 'School of Computer Applications',
    email: 'dir.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Rjc.png',
    bio: 'Mr. Rajashekar G C is the Director of the School of Computer Applications at GM University. He holds an MCA degree and an M.Sc. in Mathematics and is currently pursuing his Ph.D. With more than 16 years of teaching experience and 3 years of research experience, he has cultivated expertise in diverse domains including PHP & MySQL, Database Management Systems, Java, Cloud Computing, and R Programming.',
    specialization: ['PHP & MySQL', 'Database Management System', 'Java Programming', 'Cloud Computing', 'R Programming']
  },
  {
    id: 'f12',
    name: 'Ms. Sugandha M S',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing IT',
    email: 'sugandhams.fcit.sca@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/sugandha.jpeg',
    bio: 'Asst. Professor Sugandha M S specializes in Artificial Intelligence, Cloud Computing, and Python programming. With 9 months of teaching experience, she has extensive expertise with Python and MATLAB for research and teaching. Her specialization includes machine learning and big data analytics for solving real-world challenges.',
    specialization: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Big Data Analytics', 'Python']
  },
  {
    id: 'f13',
    name: 'Dr. Shweta Marigoudar',
    designation: 'Dean',
    department: 'Faculty of Computing and Information Technology',
    email: 'dean.fcit@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Dean.jpg',
    bio: 'Dr. Shweta Marigoudar serves as the Dean, Faculty of Computing and Information Technology at GM University, Davangere. With over 16 years of teaching experience at both undergraduate and postgraduate levels, she has guided multiple research scholars at the doctoral level. Her areas of academic expertise include Image Processing, Machine Learning, Pattern recognition, and Data Science. A seasoned academician, she was honored with the "Best Teacher Award" by the Nirmala Foundation and has several publications in peer-reviewed and Scopus-indexed journals.',
    specialization: ['Image Processing', 'Pattern Recognition', 'Artificial Intelligence', 'Medical Image Processing', 'Agricultural Image Processing', 'Data Analytics']
  },
  {
    id: 'f14',
    name: 'Ms. Kavya R Sarathi',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing and IT',
    email: 'kavyarsarathi@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Kavya R Sarathi.jpeg',
    bio: 'Asst. Professor Kavya R Sarathi holds an MCA and specializes in Analysis and Design of Algorithms, Computer Networks, Image Processing, Software Engineering, and Project Management. With 6 months of teaching experience, she possesses strong knowledge and expertise in research and teaching. Her focus is on applying computational methods and emerging technologies to solve real-world challenges.',
    specialization: ['Image Processing', 'Analysis and Design of Algorithms', 'Software Engineering', 'Project Management']
  },
  {
    id: 'f15',
    name: 'Ms. Sangeetha R P',
    designation: 'Assistant Professor',
    department: 'Faculty of Computing and IT',
    email: 'sangeetharp@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/Sangeetha R.P.jpeg',
    bio: 'Asst. Professor Sangeetha R P holds an MCA and specializes in Java, Software Engineering, and Image Processing. With 6 months of teaching experience, she possesses strong knowledge and expertise in research and teaching. Her focus is on applying computational methods and emerging technologies to solve real-world challenges in software development.',
    specialization: ['Image Processing', 'Java', 'Software Engineering']
  },
  {
    id: 'f16',
    name: 'Mr. Kantesh M',
    designation: 'Assistant Professor',
    department: 'School of Computer Applications',
    email: 'kanteshm.fcit.sca.bca@gmu.ac.in',
    phone: '+918296246876',
    image: '/uploads/gallery/Kantesh.jpg',
    bio: 'Kantesh Mallikarjun is an Assistant Professor in the computer science domain at GM University, Davangere. He earned his Master of Computer Applications (MCA) from Bapuji Institute of Engineering and Technology. With 1 year 7 months of teaching experience and 1 year 2 months of IT industry experience as a Resident Engineer at Tata Consultancy Services (TCS), his expertise encompasses Java, Linux, and Web Technologies. Kantesh is actively involved in mentoring student projects in emerging fields like IoT and Machine Learning. He has published research on predictive ML models and holds certifications in Google Cybersecurity and Google Prompt Essentials.',
    specialization: ['Cybersecurity', 'IoT', 'Artificial Intelligence', 'Full Stack Development', 'Java', 'Linux']
  },
  {
    id: 'f17',
    name: 'Ms. Shamina M. Attar',
    designation: 'Director',
    department: 'School of Computer Science',
    email: 'dir.scs@gmu.ac.in',
    phone: '+91 XXXXXXX',
    image: '/uploads/gallery/shamina.jpeg',
    bio: 'Ms. Shamina M. Attar is the Director of the School of Computer Science, FCIT, GM University Davanagere. She holds an MCA and is pursuing a PhD. With over 8 years of teaching experience, 2 years of research involvement, and 2 years of industry experience, she brings a well-rounded academic and professional background. Her areas of expertise include Full Stack Development, Artificial Intelligence, and Machine Learning. She is committed to fostering innovative research and delivering high-quality education to students.',
    specialization: ['Full Stack Development', 'Artificial Intelligence', 'Machine Learning']
  },
  {
    id: 'f18',
    name: 'Ms. SUSHMITHA .M',
    designation: 'Assistant Professor',
    department: 'School of Computer Applictions',
    email: 'sushmitham@gmu.ac.in',
    phone: '+1 234 567 890',
    image: '/uploads/gallery/Susmitha.png',
    bio: 'Asst. Professor. SUSHMITHA .M specializes in Java , She possesses strong knowledge and experience in research and teaching within these domains. Her expertise is focused on applying computational methods and emerging technologies to solve real-world challenges.',
    specialization: ['Core Java', 'Software Engineering', 'SQL']
  },
  {
    id: 'f19',
    name: 'Prof. Keerthana G V',
    designation: 'Assistant Professor',
    department: 'School of Computer Applictions',
    email: 'Keerthanagv.fcit.scs@gmu.ac.in',
    phone: '+91 8970531153',
    image: '/uploads/gallery/Keerthana.jpg',
    bio: 'Prof. Keerthana has extensive experience in AI, Machine Learning and Image Processing.',
    specialization: ['Artificial Intelligence', 'Machine Learning', 'AndroidApp Development', 'Computer Vision', 'Image Processing', 'Research in AI-based Application']
  }
];
