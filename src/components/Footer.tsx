import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Youtube, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-40 flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white border border-gray-100 text-black flex items-center justify-center shadow-2xl hover:bg-gray-50 transition-all rounded-full group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            <span className="sr-only">Top</span>
          </motion.button>
        )}
      </AnimatePresence>
      
      <a
        href="/#contact"
        className="w-14 h-14 bg-black text-white flex items-center justify-center shadow-2xl hover:bg-gray-800 transition-all rounded-full"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-[1fr_1.5fr_1.5fr_1.5fr] gap-12 mb-20 items-start">
          {/* Logo Area */}
          <div className="flex items-center gap-1 font-black text-lg tracking-tighter uppercase">
            <span className="bg-black text-white px-1">D</span>
            <span>DRIM 21</span>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-black uppercase tracking-widest font-sans">Contact Details</h4>
            <div className="space-y-4 text-[13px] text-gray-500 leading-relaxed font-sans font-medium">
              <p>DRIM 21 Inc.</p>
              <p>연락처:<br />02-1234-5678</p>
              <p>이메일:<br />contact@dream21.kr</p>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-black uppercase tracking-widest font-sans">Get In Touch</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-sans font-medium">
               우리는 당신의 비전을 현실로 만듭니다. 
               세상에 하나뿐인 브랜드 경험을 지금 바로 디자인하세요. 
               성공을 향한 여정에 함께하겠습니다.
            </p>
          </div>

          {/* My Location */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-black uppercase tracking-widest font-sans">My Location</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-sans font-medium">
              서울특별시 강남구 테헤란로 123<br />
              DRIM 21 빌딩, 10층
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">
          <p className="text-[11px] text-gray-400 font-medium">
            Copyright © 2026 DRIM 21 Design Studio | Powered By DRIM 21
          </p>
          
          <div className="flex gap-6">
            <Instagram className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Twitter className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Youtube className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Linkedin className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Removing Stats since they aren't in the reference image design
export function Stats() {
    return null;
}
