import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start mb-20 lg:mb-32">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 lg:space-y-16"
          >
            <div className="space-y-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-brand-orange mb-4">
                Architecture of Digital Success
              </p>
              
              <h1 className="font-light text-brand-brown leading-[1.1] tracking-tighter uppercase flex flex-col gap-2">
                <span className="text-4xl sm:text-5xl lg:text-7xl block">Your Partner in</span>
                <span className="text-xl sm:text-2xl lg:text-3xl block text-gray-400 font-normal">Growing Your Revenue</span>
              </h1>
              
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg font-medium text-balance">
                단순한 웹사이트를 넘어 비즈니스의 성장을 설계합니다. 
                24년의 노하우로 완성하는 최상위 디자인과 기획을 경험하세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 py-10 border-y border-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                   <p className="text-[18px] font-black leading-none">500+</p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center">
                  <Users className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[18px] font-black leading-none">100%</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="/#portfolio"
                className="group inline-flex items-center gap-4 py-4 px-10 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-2xl rounded-full"
              >
                Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Refined Tech Workspace */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5.5] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Design Studio" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined Info Box */}
              <div className="absolute bottom-6 right-6 left-6 glass rounded-2xl p-6 lg:p-10 space-y-4 lg:space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-brand-orange text-[10px] uppercase font-black tracking-widest mb-1">Expertise</p>
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight uppercase">High-End Development</h3>
                  </div>
                  <div className="hidden sm:flex gap-4">
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                       <span className="text-[10px] font-black">21</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-[12px] leading-relaxed font-medium">
                  우리는 비즈니스의 격을 높이는 최상위 디지털 환경을 구축합니다. 
                  기획부터 개발까지, 모든 과정에 건축적 정교함을 담습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Technologies / Partners Section */}
      <div className="bg-white py-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">React</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">TypeScript</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">Framer</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">Tailwind</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">Firebase</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
             <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown">Next.js</span>
                <div className="w-12 h-1 px-4 bg-gray-100 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
