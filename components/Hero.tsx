
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the navbar + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-dark bg-grid-pattern bg-[size:24px_24px] opacity-[0.2]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#135bec33,transparent)]"></div>
      </div>

      <div className="relative z-10 px-4 flex flex-col items-center gap-8 max-w-4xl text-center animate-fade-in-up">
        
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
            Tianyi Luo
          </h1>
          <p className="text-primary text-xl sm:text-2xl font-medium tracking-wide">
            Developer & AI Enthusiast
          </p>
          <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-4">
            I'm a developer passionate about creating AI-driven web apps and data tools, machine learning and its potential to solve complex real-world problems through intelligent automation.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, '#projects')}
            className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center justify-center h-12 px-8 rounded-lg bg-white/5 text-white text-base font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce hover:text-primary transition-colors cursor-pointer z-10"
        aria-label="Scroll down to About section"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <span className="material-symbols-outlined">expand_more</span>
      </a>
    </section>
  );
};

export default Hero;
