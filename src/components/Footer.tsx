import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-brand-accent rounded-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">
              FCIT Department
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Faculty of Computer and Information Technology. Excellence in education, research, and innovation since 1995.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent transition-colors rounded-full">
              <Linkedin className="w-4 h-4" />
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
          <h4 className="font-display font-bold text-lg mb-6">Schools</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/schools#sca" className="hover:text-white transition-colors">School of Computer Application</Link></li>
            <li><Link to="/schools#scs" className="hover:text-white transition-colors">School of Computer Science</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Admissions 2024</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>123 University Ave, Tech City, TC 54321</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <span>contact@fcit.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2024 FCIT Department. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
