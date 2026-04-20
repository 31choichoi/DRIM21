import React from 'react';
import { Award, Zap, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "24년의 전략적 인사이트",
      desc: "수천 건의 프로젝트를 통해 다듬어진 디렉터의 안목으로 시장 트렌드와 고객 니즈를 정확히 파악합니다."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "실행 중심의 디자인",
      desc: "단순한 미학을 넘어, 사용자가 행동하게 만드는 UX 심리학 기반의 레이아웃을 설계합니다."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24 items-center">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Our Identity</p>
              <h2 className="text-5xl font-extrabold text-black leading-tight mb-8">
                성장을 가속화하는 <br />
                <span className="text-gray-300">디자인의 힘.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                우리는 건축적 명확성을 믿습니다. DRIM 21은 단순히 보기 좋은 것을 만드는 것이 아니라, 
                당신의 비즈니스를 지속시키고 확장하는 디지털 구조를 구축합니다.
              </p>
            </div>

            <div className="space-y-10">
              {philosophies.map((p, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-100 bg-white flex items-center justify-center shadow-sm">
                    {p.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-black">{p.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <a 
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all font-sans"
              >
                더 알아보기 <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Modern Office" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                />
            </div>
            {/* Box decoration */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-black -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
