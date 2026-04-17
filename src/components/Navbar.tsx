import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Schools', path: '/schools' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Research', path: '/research' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled
          ? 'bg-[#0B1F3A]/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.22)]'
          : 'bg-[#0B1F3A]'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/uploads/gallery/logo.jpg"
            alt="FCIT Department logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <span className="font-display font-bold text-xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,234,133,0.25)]">
            FCIT Department
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition duration-300 ease-in-out relative text-white hover:text-[#FFEA85] hover:drop-shadow-[0_0_16px_rgba(255,234,133,0.45)]',
                location.pathname === link.path
                  ? 'text-[#FFEA85] drop-shadow-[0_0_14px_rgba(255,234,133,0.35)]'
                  : 'text-white'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFEA85]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B1F3A] shadow-[0_35px_70px_rgba(0,0,0,0.25)] p-6 md:hidden flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-white/10 text-white transition duration-300 ease-in-out hover:text-[#FFEA85]',
                  location.pathname === link.path ? 'text-[#FFEA85]' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
