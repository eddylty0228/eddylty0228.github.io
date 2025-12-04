import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // ----------------------------------------------------------------------
    // CONFIGURATION REQUIRED:
    // To receive emails, create a free form at https://formspree.io/
    // and replace 'YOUR_FORM_ID' below with your actual form ID.
    // ----------------------------------------------------------------------
    const FORMSPREE_ID: string = 'mdkqdnoq'; 
    
    try {
      // Check if ID is configured
      if (FORMSPREE_ID === 'YOUR_FORM_ID' || !FORMSPREE_ID) {
        // Simulate network delay for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.warn("Formspree ID not configured. Please update components/Contact.tsx with your Formspree ID to receive emails.");
        
        // For demo purposes, we'll show success but alert the user
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert("This is a demo. To receive actual emails, please configure your Formspree ID in the code.");
        return;
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        console.error("Form submission error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Form */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always interested in new opportunities and collaborations. Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  disabled={status === 'submitting'}
                  className="w-full h-14 px-4 rounded-lg bg-surface-dark border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </label>
              
              <label className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'submitting'}
                  className="w-full h-14 px-4 rounded-lg bg-surface-dark border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </label>
              
              <label className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                  disabled={status === 'submitting'}
                  className="w-full min-h-[150px] p-4 rounded-lg bg-surface-dark border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </label>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full md:w-auto h-14 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 mt-2 flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-2 animate-fade-in-up">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-2 animate-fade-in-up">
                    <span className="material-symbols-outlined">error</span>
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 lg:pt-20">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <a href="mailto:lty228eddy@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="size-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <span className="text-lg">lty228eddy@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="size-12 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <span className="text-lg">(816)-752444</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Find Me On</h3>
              <div className="flex gap-4">
                {[
                  { icon: 'code', href: 'https://github.com/eddylty0228', label: 'GitHub' },
                  { icon: 'business_center', href: 'https://www.linkedin.com/in/tianyi-luo-450a05275', label: 'LinkedIn' },
                  { icon: 'smart_display', href: 'https://www.youtube.com/@eddy-o2b', label: 'YouTube' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="size-14 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    title={social.label}
                  >
                    <span className="material-symbols-outlined text-3xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;