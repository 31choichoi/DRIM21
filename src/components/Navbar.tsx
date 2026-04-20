import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Review', href: '/#review' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-black text-xl tracking-tighter uppercase text-black">
            <span className="bg-black text-white px-1">D</span>
            <span>DRIM 21</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href="/#contact"
            className="px-10 py-4 bg-black text-white text-[12px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-xl font-sans"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
