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
    image:'uploads/gallery/p5.png',
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
    image: '/uploads/gallery/Teja H.jpeg',
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
    image: '/uploads/gallery/Anu V.B.jpeg',
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
  }
];
