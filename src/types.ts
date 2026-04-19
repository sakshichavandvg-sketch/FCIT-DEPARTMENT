export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  documentUrl: string;
  image: string;
}

export interface Leadership {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialization: string[];
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  description: string;
  courses: Course[];
  image: string;
  director?: Leadership;
  hod?: Leadership;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'Events' | 'Campus' | 'Workshops' | 'Achievements' | 'Sports' | 'Orientation';
  date: string;
  title: string;
}

export interface Project {
  id: string;
  title: string;
  author: string;
  type: 'Research' | 'Student Project';
  description: string;
  image: string;
  date: string;
  tags: string[];
  downloadUrl?: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialization: string[];
}
