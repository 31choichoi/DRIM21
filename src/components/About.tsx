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
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24 items-center">
          {/* Left Side - Image */}
          <div className="relative lg:order-1 max-w-sm mx-auto w-full">
            <div className="aspect-[3/4] bg-white overflow-hidden shadow-2xl rounded-[3rem]">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Web Design Strategy" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                />
            </div>
            {/* Box decoration */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-brand-orange -z-10 opacity-20" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-12 lg:order-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-2 font-sans">Our Identity</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-brown leading-tight mb-8">
                매출 올리는 홈페이지 <br />
                <span className="text-gray-200">기획/디자인의 힘.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md font-medium">
                우리는 단순한 웹사이트 제작을 넘어 고객의 구매 여정을 설계합니다. 
                DRIM 21은 24년의 노하우를 바탕으로 브랜드의 지향점과 실제 매출 향상이라는 
                명확한 성과를 위한 전략적 디지털 공간을 구축합니다.
              </p>
            </div>

            <div className="space-y-10">
              {philosophies.map((p, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-100 bg-white flex items-center justify-center shadow-sm text-brand-orange">
                    {p.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-brown">{p.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <a 
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest border-b-2 border-brand-orange pb-1 hover:text-brand-brown hover:border-brand-brown transition-all font-sans text-brand-brown"
              >
                더 알아보기 <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
