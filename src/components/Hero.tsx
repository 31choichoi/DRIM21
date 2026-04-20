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
              
              <h1 className="font-light text-black leading-[1.1] tracking-tighter uppercase flex flex-col gap-2">
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
                  <Briefcase className="w-4 h-4 text-black" />
                </div>
                <div>
                   <p className="text-[18px] font-black leading-none">500+</p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center">
                  <Users className="w-4 h-4 text-black" />
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

          {/* Right Side - Refined Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5.5] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Director" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined Info Box */}
              <div className="absolute bottom-6 right-6 left-6 glass rounded-2xl p-6 lg:p-10 space-y-4 lg:space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight">DRIM 21</h3>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Business Designer</p>
                  </div>
                  <div className="flex gap-4">
                    <Instagram className="w-4 h-4 opacity-50 hover:opacity-100 cursor-pointer" />
                    <Linkedin className="w-4 h-4 opacity-50 hover:opacity-100 cursor-pointer" />
                  </div>
                </div>
                <p className="text-gray-500 text-[12px] leading-relaxed font-medium">
                  성공적인 비즈니스는 명확한 디지털 레이아웃에서 시작됩니다. 
                  우리는 그 시작과 성장을 함께합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Full Width Element */}
      <div className="w-full h-[300px] lg:h-[500px] bg-soft-bg relative overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600" 
              alt="Creative Space" 
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />
      </div>
    </section>
  );
}
