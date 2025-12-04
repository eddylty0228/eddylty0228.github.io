import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-dark">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="relative w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse group-hover:bg-primary/30 transition-all duration-500"></div>
              {/* 
                 NOTE: 
                 1. Create a folder named 'public' in your project root.
                 2. Move your image into the 'public' folder.
                 3. Rename it to 'profile.png' (since your screenshot indicated it is a PNG file).
              */}
              <img 
                src="/profile.png" 
                alt="Tianyi Luo"
                className="relative h-full w-full rounded-full border-4 border-primary/50 shadow-2xl object-cover bg-surface-dark"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Try jpg if png fails, or fallback to placeholder
                  if (target.src.endsWith('png')) {
                    target.src = '/profile.png';
                  } else {
                    target.src = 'https://via.placeholder.com/400x400/1e293b/ffffff?text=Tianyi+Luo';
                  }
                }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col gap-6 md:w-2/3 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">About Me</h2>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <h3 className="text-xl font-medium text-white/90">Hello, I'm Tianyi Luo</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-[#92a4c9] leading-relaxed">
              <p>
                I am a Computer and Information Technology student at Purdue University interested in AI, application development, and web development. I enjoy combining design, data, and programming to build innovative solutions.
              </p>
              <p>
                I am currently learning machine learning to build data-driven intelligent applications. Working on innovative solutions that combine design, data, and programming to create impactful applications. I am available for part-time projects and internships.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
              {['Artificial Intelligence', 'Web Development', 'Data Science', 'Software Development', 'Finance'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                  <p className="text-sm font-medium text-white">{skill}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;