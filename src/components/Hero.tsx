import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-0 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-20">
          {/* Left Side */}
          <div className="space-y-10 group">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 font-sans">
                Award Winning Web Designer
              </p>
              <h1 className="font-light text-black leading-[1.1] tracking-tighter mb-10 uppercase flex flex-col">
                <span className="text-4xl lg:text-5xl block">Your Partner in</span>
                <span className="text-2xl lg:text-3xl block mt-2 text-gray-400">Growing Your Revenue</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10 font-medium">
                우리는 단순한 디자인을 넘어 비즈니스의 매출을 설계합니다. 
                24년의 기획 노하우와 사용자 중심의 UX 설계를 통해 당신의 스토리를 성공으로 연결합니다.
              </p>
            </div>

            <div className="flex gap-12 border-t border-gray-100 pt-10">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-black" />
                <span className="text-[12px] font-bold text-black uppercase tracking-widest">500+ 프로젝트 완료</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-black" />
                <span className="text-[12px] font-bold text-black uppercase tracking-widest">100+ 만족한 고객사</span>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/#about"
                className="inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
              >
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Side - Tall Portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5.5] overflow-hidden shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1)]">
              {/* Using a high-quality professional Asian woman portrait in white blazer to match the attachment's vibe */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                alt="DRIM 21 Director" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Box - High Contrast - Matching Kyle Mills style */}
              <div className="absolute bottom-12 right-0 left-10 md:left-20 bg-[#141414] text-white p-10 space-y-6 shadow-2xl">
                <h3 className="text-2xl font-extrabold tracking-tight">드림21 (DRIM 21)</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed font-medium">
                  철저한 기획과 사용자 경험 디자인을 통해 브랜드의 가치를 높이고, 
                  실질적인 비즈니스 성장으로 이어지는 디지털 환경을 구축합니다.
                </p>
                <div className="flex gap-6 pt-2">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
                  <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wide Background Image - Colorful Interior like the reference */}
      <div className="w-full h-[600px] mt-[-100px] overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2600" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
      </div>
    </section>
  );
}
