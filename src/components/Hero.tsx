import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Layers, BarChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-1/2 h-[120%] bg-soft-bg -z-10 translate-x-1/4 -skew-x-12 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          {/* Left Side: Strategic Content */}
          <div className="relative z-10 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-brand-orange" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange">
                  Digital Strategy & Design Studio
                </p>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-brand-brown leading-[1] tracking-tighter uppercase relative">
                Focused on <br />
                <span className="font-serif italic font-normal text-brand-orange ml-8 lg:ml-16">Revenue</span> <br />
                Growth.
              </h1>
              
              <p className="text-gray-500 text-lg lg:text-xl font-medium max-w-lg leading-relaxed pt-4">
                홈페이지의 본질은 <span className="text-brand-brown underline decoration-brand-orange/30 underline-offset-8">매출 향상</span>에 있습니다. 
                단순한 미학을 넘어 고객의 성장을 증명하는 최고의 디지털 아키텍처를 경험하세요.
              </p>
            </motion.div>

            {/* Strategic Pillars */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-brand-orange/10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-brand-brown/5 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-brand-brown" />
                   </div>
                   <h3 className="text-[12px] font-black uppercase tracking-widest text-brand-brown">Architecture</h3>
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  비즈니스 목표를 구조화하여 최적의 경로로 고객을 유도하는 전략적 설계.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-brand-orange/5 flex items-center justify-center">
                      <BarChart className="w-4 h-4 text-brand-orange" />
                   </div>
                   <h3 className="text-[12px] font-black uppercase tracking-widest text-brand-brown">Conversion</h3>
                </div>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  사용자 경험(UX) 심리학을 기반으로 실제 매출 전환을 이끌어내는 실행력.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="/#portfolio"
                className="group inline-flex items-center gap-6 px-12 py-5 bg-black text-white text-[12px] font-black uppercase tracking-[0.3em] hover:bg-brand-brown transition-all shadow-2xl rounded-full"
              >
                Explore Works <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Sophisticated Visual */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[3/4] overflow-hidden rounded-[4rem] shadow-[-20px_40px_80px_-20px_rgba(61,43,31,0.15)] bg-soft-bg"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Sophisticated Architecture" 
                className="w-full h-full object-cover grayscale-[40%] hover:scale-110 transition-transform duration-[2000ms] ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Aesthetic Plate */}
              <div className="absolute top-10 right-0 glass px-8 py-4 rounded-l-full border-r-0 transform translate-x-4">
                 <div className="flex items-center gap-4">
                   <Globe className="w-4 h-4 text-brand-orange animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-brown">Global Standards</span>
                 </div>
              </div>
            </motion.div>

            {/* Floating Metric Card */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl border border-brand-orange/5 rounded-[2rem] hidden md:block"
            >
                <div className="space-y-1">
                   <p className="text-5xl font-black text-brand-brown tracking-tighter">24<span className="text-brand-orange text-2xl ml-1">y</span></p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-2">Expertise Insight</p>
                </div>
            </motion.div>
            
            {/* Signature Accent */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-[60px]" />
          </div>
        </div>
      </div>
      
      {/* Signature Vertical Rail Text */}
      <div className="absolute left-10 bottom-20 hidden xl:flex flex-col gap-10 items-center opacity-20 pointer-events-none">
          <span className="writing-vertical-rl text-[11px] font-black uppercase tracking-[0.8em] text-brand-brown">
             DESIGN FOR CONVERSION — STRATEGIC GROWTH
          </span>
          <div className="w-[1px] h-32 bg-brand-brown" />
      </div>
    </section>
  );
}
