import React from 'react';
import { ArrowRight, Layout, Zap, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      num: "01",
      icon: <Layout className="w-6 h-6" />,
      title: "Web Architecture",
      desc: "단순한 디자인을 넘어 비즈니스의 구조를 설계합니다. 최상위 UX 시나리오를 통해 고객의 체류 시간과 전환율을 극대화합니다."
    },
    {
      num: "02",
      icon: <Zap className="w-6 h-6" />,
      title: "High-End UX Strategy",
      desc: "데이터 기반의 사용자 분석을 통해 브랜드가 나아가야 할 최적의 디지털 접점을 제안하고, 실질적인 매출 성장 동력을 확보합니다."
    },
    {
      num: "03",
      icon: <Database className="w-6 h-6" />,
      title: "Perfomance Dev",
      desc: "최신 프레임워크와 최적화된 코드를 통해 압도적인 로딩 속도와 안정적인 운영 환경을 구축합니다. 당신의 비즈니스는 끊기지 않습니다."
    }
  ];

  return (
    <section id="services" className="py-32 bg-soft-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-brand-orange font-sans italic">Core Competencies</p>
            <h2 className="text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter leading-none">
              Strategic. <br />
              Services.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-[300px] leading-relaxed font-medium">
            우리는 24년의 노하우를 바탕으로 <br />
            감각적인 디자인과 실질적인 성과를 결합합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white p-12 lg:p-16 h-full flex flex-col gap-10 hover:bg-black transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black group-hover:text-white group-hover:border-white/20 transition-colors">
                  {s.icon}
                </div>
                <span className="text-[11px] font-mono font-light text-gray-300 group-hover:text-white/20 transition-colors">{s.num}</span>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-black group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {s.desc}
                </p>
              </div>

              <div className="mt-auto pt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                View Details <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
