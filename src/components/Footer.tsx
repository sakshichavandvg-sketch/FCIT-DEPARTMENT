import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img
  src="/uploads/gallery/logo.jpeg"   // 👈 your logo path
  alt="FCIT Logo"
  className="h-10 w-auto object-contain"
/>
            <span className="font-display font-bold text-2xl tracking-tighter">
              FCIT Department
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Faculty of Computer and Information Technology. Excellence in education, research, and innovation since 1995.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1886qdz3mL/" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Facebook className="w-4 h-4" />
            </a>
            
            <a href="https://www.instagram.com/gmsafgcdvg?igsh=MWc5NDVuem9zMXI5MQ==" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Instagram className="w-4 h-4" />
            </a>
            
            <a href="https://youtube.com/@gmudvg?si=zj0zJ7fL2LlFtrmz" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/schools" className="hover:text-white transition-colors">Schools</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
            <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>FACULTY OF COMPUTING AND IT ,1st Floor , Room No:W120</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>+91 9141158736</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <span>dean.fcit@gmu.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2025 FCIT Department. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
