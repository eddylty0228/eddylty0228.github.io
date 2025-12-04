import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background-dark border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Tianyi Luo. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;