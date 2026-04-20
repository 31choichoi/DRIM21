import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Review', href: '/#review' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14 transition-all duration-500 ${scrolled ? 'glass rounded-full shadow-lg h-20' : ''}`}>
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-black text-xl tracking-tighter uppercase text-black">
            <span className="bg-black text-white px-1 ml-4 sm:ml-0">D</span>
            <span className={scrolled ? 'block' : 'hidden sm:block'}>DRIM 21</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a 
              href="/#contact"
              className="px-8 py-3 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-xl rounded-full mr-4 sm:mr-0"
            >
              Inquiry
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-black mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-white z-[60] flex flex-col p-10 pt-32 gap-8"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-black"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-black hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-auto border-t border-gray-100 pt-10">
              <a 
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-block text-center py-5 bg-black text-white text-sm font-black uppercase tracking-widest"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
