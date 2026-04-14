import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, BookOpen, Users, Lightbulb } from 'lucide-react';
import ParallaxHero from '@/components/ParallaxHero';
import ExpandableCard from '@/components/ExpandableCard';
import { PROJECTS } from '@/constants';

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Research' | 'Student Project'>('All');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTab = activeTab === 'All' || project.type === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="pb-32">
      <ParallaxHero
        title="Research & Innovation"
        subtitle="Exploring the frontiers of technology through rigorous research and creative student projects."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, authors, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-brand-primary font-medium"
            />
          </div>
          
          <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl">
            {(['All', 'Research', 'Student Project'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-brand-accent shadow-sm' 
                    : 'text-gray-500 hover:text-brand-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ExpandableCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-400">No projects found matching your search.</h3>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-brand-accent rounded-[40px] text-white">
            <BookOpen className="w-12 h-12 mb-6 opacity-50" />
            <h3 className="text-4xl font-display font-bold mb-2">150+</h3>
            <p className="text-white/70 font-medium uppercase tracking-widest text-xs">Research Papers Published</p>
          </div>
          <div className="p-10 bg-brand-primary rounded-[40px] text-white">
            <Users className="w-12 h-12 mb-6 opacity-50" />
            <h3 className="text-4xl font-display font-bold mb-2">45+</h3>
            <p className="text-white/70 font-medium uppercase tracking-widest text-xs">Active Research Groups</p>
          </div>
          <div className="p-10 bg-gray-900 rounded-[40px] text-white">
            <Lightbulb className="w-12 h-12 mb-6 opacity-50" />
            <h3 className="text-4xl font-display font-bold mb-2">$2.5M</h3>
            <p className="text-white/70 font-medium uppercase tracking-widest text-xs">Research Grants Secured</p>
          </div>
        </div>
      </section>
    </div>
  );
}
