import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: "01.",
      title: "Web Design",
      desc: "컨셉 수립부터 최종 구현까지, 당신의 브랜드 가치를 높이고 최적의 비즈니스 고객 경험을 제공하는 웹사이트를 디자인합니다."
    },
    {
      num: "02.",
      title: "UI/UX Strategy",
      desc: "복잡한 사용자 여정을 최적화하고, 모든 디지털 접점에서 비즈니스의 목표가 달성될 수 있도록 정밀한 UX 전략을 기획합니다."
    },
    {
      num: "03.",
      title: "Development",
      desc: "최신 기술 스택을 활용하여 빠르고 안정적인 시스템을 구축하며, 운영 효율성을 극대화하는 관리 환경을 제공합니다."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">What I Do</p>
            <h2 className="text-4xl font-extrabold text-black uppercase">Services</h2>
          </div>
          <a href="/#services" className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gray-500 transition-colors font-sans">
            서비스 전체보기 <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((s, idx) => (
            <div key={idx} className="space-y-6">
              <span className="text-[13px] font-bold text-black border-b-2 border-black inline-block pb-1">{s.num}</span>
              <h3 className="text-2xl font-extrabold">{s.title}</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
