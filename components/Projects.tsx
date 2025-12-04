import React, { useState } from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'LetsTrade',
    description: 'A stock simulator web app with AI-powered investment analysis. Features real-time stock data integration, portfolio tracking, and AI-generated investment recommendations.',
    imageUrl: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=LetsTrade',
    tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'WebSocket'],
    category: 'Web Dev',
    links: { code: '#', demo: '#' }
  },
  {
    id: '2',
    title: 'Fitness Android App',
    description: 'A full-featured Android fitness application designed to help users track workouts, monitor progress, and achieve fitness goals with personalized plans and detailed analytics.',
    imageUrl: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Fitness+App',
    tags: ['Android Studio', 'Java', 'Firebase', 'REST API'],
    category: 'Mobile',
    links: { code: '#', demo: '#' }
  }
];

const categories = ['All', 'Web Dev', 'Mobile', 'Machine Learning'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    if (!url || url === '#') {
      e.preventDefault();
      // Optional: Add toast notification here
      console.log('Link coming soon');
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">My Work</h2>
            <p className="text-slate-400">A selection of my recent projects and experiments.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col rounded-xl border border-white/10 bg-surface-dark overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url("${project.imageUrl}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-2">
                     <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white/10 hover:bg-primary rounded-lg text-white backdrop-blur-sm transition-colors cursor-pointer" 
                        title="View Demo"
                        onClick={(e) => handleLinkClick(e, project.links.demo)}
                     >
                        <span className="material-symbols-outlined">visibility</span>
                     </a>
                     <a 
                        href={project.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white/10 hover:bg-primary rounded-lg text-white backdrop-blur-sm transition-colors cursor-pointer" 
                        title="View Code"
                        onClick={(e) => handleLinkClick(e, project.links.code)}
                     >
                        <span className="material-symbols-outlined">code</span>
                     </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;