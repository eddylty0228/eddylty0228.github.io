import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 'uiuc',
    role: 'Master of Computer Science',
    company: 'University of Illinois Urbana-Champaign',
    period: 'Starting Spring 2026',
    description: [
      'Incoming graduate student in the Professional Master of Computer Science (MCS) program.',
      'Focusing on advanced computer science topics and software engineering.'
    ],
    technologies: [],
    type: 'education'
  },
  {
    id: '1',
    role: 'IT Intern',
    company: 'China CITIC Bank',
    period: 'Summer 2024',
    description: [
      'Supported IT infrastructure and system maintenance at China CITIC Bank, assisting with troubleshooting, network monitoring, and employee support.',
      'Contributed to database management and application testing, ensuring reliability and security of banking systems.'
    ],
    technologies: ['Java', 'Android Studio', 'Unreal Engine'],
    type: 'work'
  },
  {
    id: '2',
    role: 'B.S. in Computer and Information Technology',
    company: 'Purdue University',
    period: 'Expected Dec 2025',
    description: [
      "Minor in Finance",
      "Current GPA: 3.47",
      "Relevant Coursework: Database Management, System Analysis and Design, Web Development, Windows Server Administration."
    ],
    technologies: [],
    type: 'education'
  },
  {
    id: '3',
    role: 'Major in Computer Science',
    company: 'Iowa State University (Transferred)',
    period: '',
    description: [
      'Relevant Coursework: Application Development, Data Structures, Algorithms'
    ],
    technologies: [],
    type: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Education & Experience</h2>
          <p className="text-[#92a4c9] text-lg">My professional and academic journey so far.</p>
        </div>

        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#324467]"></div>

            <div className="flex flex-col gap-12">
                {experiences.map((exp) => (
                    <div key={exp.id} className="relative pl-12 md:pl-16 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background-dark border-2 border-primary/30 text-primary z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                            <span className="material-symbols-outlined text-xl">
                                {exp.type === 'work' ? 'work' : 'school'}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-[#92a4c9] mb-2 font-medium">
                                <span>{exp.company}</span>
                                {exp.period && <span>•</span>}
                                {exp.period && <span>{exp.period}</span>}
                            </div>
                            
                            <ul className="flex flex-col gap-2 mb-4">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed relative pl-4">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {exp.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;