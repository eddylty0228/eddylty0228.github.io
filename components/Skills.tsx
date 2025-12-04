import React from 'react';
import { Skill } from '../types';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'data_object' },
      { name: 'Java', icon: 'integration_instructions' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'SQL', icon: 'database' },
      { name: 'HTML/CSS', icon: 'code' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'javascript' },
      { name: 'Node.js', icon: 'hub' },
      { name: 'PyQt5', icon: 'desktop_windows' },
      { name: 'TensorFlow', icon: 'psychology' },
      { name: 'Pandas', icon: 'table_chart' },
      { name: 'NumPy', icon: 'calculate' },
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Android Studio', icon: 'android' },
      { name: 'Unreal Engine', icon: 'sports_esports' },
      { name: 'Git', icon: 'share' },
      { name: 'VS Code', icon: 'terminal' },
      { name: 'Postman', icon: 'send' },
      { name: 'Jupyter', icon: 'science' },
    ],
  },
  {
    title: 'Databases',
    skills: [
        { name: 'MySQL', icon: 'database' },
        { name: 'MongoDB', icon: 'dns' },
        { name: 'MS Access', icon: 'table' },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">My toolbox for building modern, scalable web applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white text-center pb-2 border-b border-white/10">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group flex flex-col items-center gap-3 p-3 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
                    </div>
                    <p className="text-gray-200 font-medium text-xs text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;